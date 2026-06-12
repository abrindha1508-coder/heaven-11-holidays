-- SQL queries to initialize the Haven11 Holidays database schema

-- 1. Create Contacts Table
-- Stores general contact requests and custom quote requests
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    destination VARCHAR(255), -- Nullable, used for custom quote contact forms
    message TEXT NOT NULL,
    travel_date DATE,          -- Nullable for general contact forms, filled by custom quotes
    adults INT,
    children INT,
    infants INT,
    seniors INT,
    total_travelers INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create Enquiries Table
-- Stores tour booking queries/enquiries
CREATE TABLE IF NOT EXISTS enquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    travel_date DATE NOT NULL,
    travelers VARCHAR(255), -- Keep for backward compatibility/reference
    adults INT,
    children INT,
    infants INT,
    seniors INT,
    total_travelers INT,
    package_id VARCHAR(100),
    package_title VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure existing database tables are updated with new columns
ALTER TABLE enquiries ALTER COLUMN travelers TYPE VARCHAR(255);
ALTER TABLE enquiries ALTER COLUMN travelers DROP NOT NULL;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS adults INT;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS children INT;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS infants INT;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS seniors INT;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS total_travelers INT;


