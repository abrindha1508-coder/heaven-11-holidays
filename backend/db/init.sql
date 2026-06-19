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
    total_travelers INT,
    package_id VARCHAR(100),
    package_title VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure existing database tables are updated with new columns and clean up redundant ones
ALTER TABLE enquiries DROP COLUMN IF EXISTS travelers;
ALTER TABLE enquiries DROP COLUMN IF EXISTS adults;
ALTER TABLE enquiries DROP COLUMN IF EXISTS children;
ALTER TABLE enquiries DROP COLUMN IF EXISTS infants;
ALTER TABLE enquiries DROP COLUMN IF EXISTS seniors;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS total_travelers INT;

ALTER TABLE contacts DROP COLUMN IF EXISTS adults;
ALTER TABLE contacts DROP COLUMN IF EXISTS children;
ALTER TABLE contacts DROP COLUMN IF EXISTS infants;
ALTER TABLE contacts DROP COLUMN IF EXISTS seniors;

-- Rename detailed_travel_query to message if it exists
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contacts' AND column_name='detailed_travel_query') THEN
    ALTER TABLE contacts RENAME COLUMN detailed_travel_query TO message;
  END IF;
END $$;





