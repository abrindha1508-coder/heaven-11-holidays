const db = require('../config/db');

/**
 * @desc    Submit a new tour booking enquiry
 * @route   POST /api/enquiries
 * @access  Public
 */
const submitEnquiry = async (req, res) => {
  try {
    const { name, phone, date, travelers, packageId, packageTitle, adults, children, infants, seniors, total_travelers } = req.body;

    // Basic Input Validation
    if (!name || !phone || !date) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, phone, and travel date.'
      });
    }

    // Insert into PostgreSQL database
    const queryText = `
      INSERT INTO enquiries (name, phone, travel_date, travelers, package_id, package_title, adults, children, infants, seniors, total_travelers)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `;
    const values = [
      name.trim(),
      phone.trim(),
      date, // YYYY-MM-DD format from HTML date input
      travelers || null,
      packageId ? packageId.trim() : null,
      packageTitle ? packageTitle.trim() : null,
      adults !== undefined && adults !== null ? parseInt(adults, 10) : null,
      children !== undefined && children !== null ? parseInt(children, 10) : null,
      infants !== undefined && infants !== null ? parseInt(infants, 10) : null,
      seniors !== undefined && seniors !== null ? parseInt(seniors, 10) : null,
      total_travelers !== undefined && total_travelers !== null ? parseInt(total_travelers, 10) : null
    ];

    const result = await db.query(queryText, values);

    return res.status(201).json({
      success: true,
      message: 'Booking enquiry submitted successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error submitting booking enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, failed to submit booking enquiry.'
    });
  }
};

/**
 * @desc    Get all tour booking enquiries (useful for admin panels)
 * @route   GET /api/enquiries
 * @access  Private/Admin (Currently public for demo/pgAdmin validation)
 */
const getEnquiries = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM enquiries ORDER BY created_at DESC');
    return res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows
    });
  } catch (error) {
    console.error('Error retrieving booking enquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, failed to retrieve booking enquiries.'
    });
  }
};

module.exports = {
  submitEnquiry,
  getEnquiries
};
