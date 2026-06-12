const db = require('../config/db');

/**
 * @desc    Submit a new contact or custom quote inquiry
 * @route   POST /api/contacts
 * @access  Public
 */
const submitContact = async (req, res) => {
  try {
    const { name, phone, email, destination, message, travel_date, adults, children, infants, seniors } = req.body;

    // Basic Input Validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, phone, email, and message.'
      });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Calculate total travelers if any traveler category is filled
    let total_travelers = null;
    if (adults !== undefined || children !== undefined || infants !== undefined || seniors !== undefined) {
      total_travelers = (adults ? parseInt(adults, 10) : 0) + 
                        (children ? parseInt(children, 10) : 0) + 
                        (infants ? parseInt(infants, 10) : 0) + 
                        (seniors ? parseInt(seniors, 10) : 0);
    }

    // Insert into PostgreSQL database
    const queryText = `
      INSERT INTO contacts (name, phone, email, destination, message, travel_date, adults, children, infants, seniors, total_travelers)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `;
    const values = [
      name.trim(),
      phone.trim(),
      email.toLowerCase().trim(),
      destination ? destination.trim() : null,
      message.trim(),
      travel_date || null,
      adults ? parseInt(adults, 10) : null,
      children ? parseInt(children, 10) : null,
      infants ? parseInt(infants, 10) : null,
      seniors ? parseInt(seniors, 10) : null,
      total_travelers
    ];

    const result = await db.query(queryText, values);

    return res.status(201).json({
      success: true,
      message: 'Contact inquiry submitted successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, failed to submit contact inquiry.'
    });
  }
};

/**
 * @desc    Get all contact inquiries (useful for admin panels)
 * @route   GET /api/contacts
 * @access  Private/Admin (Currently public for demo/pgAdmin validation)
 */
const getContacts = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows
    });
  } catch (error) {
    console.error('Error retrieving contact inquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, failed to retrieve contact inquiries.'
    });
  }
};

module.exports = {
  submitContact,
  getContacts
};
