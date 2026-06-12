const db = require('../config/db');

// Helper to escape CSV values for Excel compatibility
const escapeCsv = (val) => {
  if (val === null || val === undefined) return '';
  if (val instanceof Date) {
    // Format timestamp nicely
    return val.toISOString().replace(/T/, ' ').replace(/\..+/, '');
  }
  const str = String(val);
  // If value contains special characters, wrap it in quotes and double escape inner quotes
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
};

// Helper to check if key matches
const checkAdminKey = (req) => {
  const keyHeader = req.headers['x-admin-key'];
  const keyBody = req.body && req.body.adminKey;
  const adminSecret = process.env.ADMIN_SECRET_KEY || 'Brindha@15AdminExportKey';
  
  return (keyHeader === adminSecret) || (keyBody === adminSecret);
};

/**
 * @desc    Verify admin secret key
 * @route   POST /api/admin/verify
 * @access  Private
 */
const verifyKey = (req, res) => {
  try {
    if (checkAdminKey(req)) {
      return res.status(200).json({
        success: true,
        message: 'Admin Secret Key verified successfully!'
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Invalid Admin Secret Key.'
      });
    }
  } catch (error) {
    console.error('Error verifying admin key:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during verification.'
    });
  }
};

/**
 * @desc    Export database tables to CSV format
 * @route   GET /api/admin/export/:type
 * @access  Private (Requires x-admin-key header)
 */
const exportData = async (req, res) => {
  try {
    // 1. Verify Secret Key
    if (!checkAdminKey(req)) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid Admin Secret Key.'
      });
    }

    const { type } = req.params;
    const dateStr = new Date().toISOString().split('T')[0];
    
    let csvContent = '';
    let filename = `${type}_export_${dateStr}.csv`;

    if (type === 'contacts') {
      const result = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
      const headers = ['ID', 'Name', 'Phone', 'Email', 'Destination', 'Message', 'Travel Date', 'Adults', 'Children', 'Infants', 'Seniors', 'Total Travelers', 'Created At'];
      const fields = ['id', 'name', 'phone', 'email', 'destination', 'message', 'travel_date', 'adults', 'children', 'infants', 'seniors', 'total_travelers', 'created_at'];
      
      const rows = result.rows.map(row => 
        fields.map(field => escapeCsv(row[field])).join(',')
      );
      csvContent = [headers.join(','), ...rows].join('\r\n');

    } else if (type === 'enquiries') {
      const result = await db.query('SELECT * FROM enquiries ORDER BY created_at DESC');
      const headers = ['ID', 'Name', 'Phone', 'Travel Date', 'Travelers Reference', 'Adults', 'Children', 'Infants', 'Seniors', 'Total Travelers', 'Package ID', 'Package Title', 'Created At'];
      const fields = ['id', 'name', 'phone', 'travel_date', 'travelers', 'adults', 'children', 'infants', 'seniors', 'total_travelers', 'package_id', 'package_title', 'created_at'];
      
      const rows = result.rows.map(row => 
        fields.map(field => escapeCsv(row[field])).join(',')
      );
      csvContent = [headers.join(','), ...rows].join('\r\n');

    } else if (type === 'all') {
      // Stack all datasets together into a single Excel file
      // 1. Contacts
      const cResult = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
      const cHeaders = ['ID', 'Name', 'Phone', 'Email', 'Destination', 'Message', 'Travel Date', 'Adults', 'Children', 'Infants', 'Seniors', 'Total Travelers', 'Created At'];
      const cFields = ['id', 'name', 'phone', 'email', 'destination', 'message', 'travel_date', 'adults', 'children', 'infants', 'seniors', 'total_travelers', 'created_at'];
      const cRows = cResult.rows.map(row => cFields.map(field => escapeCsv(row[field])).join(','));
      const contactsCsv = ['=== CONTACT ENQUIRIES & CUSTOM QUOTES ===', cHeaders.join(','), ...cRows].join('\r\n');

      // 2. Enquiries
      const eResult = await db.query('SELECT * FROM enquiries ORDER BY created_at DESC');
      const eHeaders = ['ID', 'Name', 'Phone', 'Travel Date', 'Travelers Reference', 'Adults', 'Children', 'Infants', 'Seniors', 'Total Travelers', 'Package ID', 'Package Title', 'Created At'];
      const eFields = ['id', 'name', 'phone', 'travel_date', 'travelers', 'adults', 'children', 'infants', 'seniors', 'total_travelers', 'package_id', 'package_title', 'created_at'];
      const eRows = eResult.rows.map(row => eFields.map(field => escapeCsv(row[field])).join(','));
      const enquiriesCsv = ['=== TOUR BOOKING ENQUIRIES ===', eHeaders.join(','), ...eRows].join('\r\n');

      csvContent = [
        contactsCsv,
        '',
        '',
        enquiriesCsv
      ].join('\r\n');

    } else {
      return res.status(400).json({
        success: false,
        message: 'Invalid export type. Must be contacts, enquiries, or all.'
      });
    }

    // Set headers for secure browser attachment download
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    
    // Add UTF-8 Byte Order Mark (BOM) so Microsoft Excel opens it with correct UTF-8 encoding
    return res.status(200).send('\uFEFF' + csvContent);

  } catch (error) {
    console.error('Error exporting database data:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, failed to compile CSV export.'
    });
  }
};

module.exports = {
  verifyKey,
  exportData
};
