const { Pool } = require('pg');
require('dotenv').config();

// Create connection pool configured using environment variables
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'haven11_holidays',
  port: process.env.DB_PORT || 5432,
  // Recommended settings for production/resilience
  max: 20, // Max number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error if connection takes longer than 2 seconds
});

const fs = require('fs');
const path = require('path');

// Test the connection and initialize tables on startup
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Database connection error:', err.message);
  } else {
    console.log('✅ Database connected successfully at:', res.rows[0].now);
    
    // Read and run init.sql to ensure tables exist
    try {
      const sqlPath = path.join(__dirname, '../db/init.sql');
      const initSql = fs.readFileSync(sqlPath, 'utf8');
      pool.query(initSql, (sqlErr) => {
        if (sqlErr) {
          console.error('❌ Failed to initialize database tables:', sqlErr.message);
        } else {
          console.log('✅ Database tables initialized successfully.');
        }
      });
    } catch (fsErr) {
      console.error('❌ Failed to read initialization SQL script:', fsErr.message);
    }
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
