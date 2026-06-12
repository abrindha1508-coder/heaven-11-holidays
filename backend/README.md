# Haven11 Holidays - Backend Setup Guide

This backend is built using Node.js, Express.js, and PostgreSQL. It exposes APIs for the Contact and Enquiry forms and persists the submissions in a PostgreSQL database.

---

## Prerequisites

1. **Node.js** (v14 or higher)
2. **PostgreSQL** (v12 or higher)
3. **pgAdmin 4** (Recommended tool to manage PostgreSQL)

---

## 1. PostgreSQL Database & pgAdmin Setup

### Step 1: Create Database in pgAdmin
1. Open **pgAdmin 4** and log in using your master password.
2. In the left browser tree, expand **Servers** and right-click on your server (e.g., `PostgreSQL 15`).
3. Select **Create** ➔ **Database...**.
4. Set the **Database** name to: `haven11_holidays`.
5. Click **Save**.

### Step 2: Initialize Tables using Query Tool
1. In pgAdmin, select/click the newly created database `haven11_holidays`.
2. Look at the top navigation bar, click on **Tools** ➔ **Query Tool** (or right-click the database and select **Query Tool**).
3. Open the file `backend/db/init.sql` in a text editor, copy its content, and paste it into the pgAdmin Query editor.
4. Click the **Execute/Play** button (or press `F5`) at the top of the editor.
5. You should see a message: *“Query returned successfully”*. The tables `contacts` and `enquiries` are now created under the `public` schema.

---

## 2. Server Configuration

1. In the `backend` directory, find the `.env` file (copied from `.env.example`).
2. Update the database credentials to match your local setup:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   DB_NAME=haven11_holidays
   ```

---

## 3. Running the Server

### Installation
From the root of the project or the `backend` directory:
```bash
cd backend
npm install
```

### Start in Development Mode (Nodemon - Auto reload)
```bash
npm run dev
```

### Start in Production Mode
```bash
npm start
```

The server should output:
```text
✅ Database connected successfully at: 2026-06-11T10:20:00.000Z
🚀 Server is running on port 5000
```

---

## 4. API Documentation

### Contact / Custom Quote Form API
- **Endpoint**: `POST http://localhost:5000/api/contacts`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "phone": "+91 91599 96556",
    "email": "john.doe@example.com",
    "destination": "Bali",          // Optional (from Contact Us page)
    "message": "Custom package quote details..."
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Contact inquiry submitted successfully!",
    "data": { "id": 1, "name": "John Doe", ... }
  }
  ```

### Enquiry / Booking Form API
- **Endpoint**: `POST http://localhost:5000/api/enquiries`
- **Request Body**:
  ```json
  {
    "name": "Jane Smith",
    "phone": "+91 81486 04780",
    "email": "jane@example.com",     // Optional
    "date": "2026-09-15",
    "travelers": "3-5",
    "packageId": "bali-deluxe",      // Optional
    "packageTitle": "Bali Deluxe Getaway"  // Optional
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Booking enquiry submitted successfully!",
    "data": { "id": 1, "name": "Jane Smith", ... }
  }
  ```
