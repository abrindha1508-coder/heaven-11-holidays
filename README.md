# Heaven11 Holidays - Premium Customized Travel & Tourism Agency

Welcome to the official repository for **Heaven11 Holidays**, a premium travel agency designed to help clients experience the world in comfort and luxury. We offer hand-curated domestic and international tour packages, premium resort stays, flight tickets, and expedited visa services.

---

## 🌟 Features & Offerings

### 1. Tour Packages
*   **Domestic Delights:** Beautiful tours across India including Kashmir, Kerala, Ooty, Kodaikanal, Goa, Andaman & Nicobar, Rajasthan, Himachal Pradesh, Leh Ladakh, Manali, Munnar, Coorg, Wayanad, and more.
*   **International Escapes:** Extravagant tours to Dubai, Thailand, Singapore, Malaysia, Bali, Maldives, Vietnam, Sri Lanka, Switzerland, Turkey, and full Europe highlights.

### 2. Full-Service Bookings
*   ✈️ Worldwide Flight Ticketing (Domestic & International)
*   🏨 Premium Resorts & Luxury Hotel Bookings
*   🛂 Expedited Visa processing assistance for major tourist destinations

---

## 📈 SEO Optimization & Keywords

To ensure the website ranks highly on Google Search Console, Google Search, and other platforms, we have compiled and implemented a curated list of SEO keywords across the codebase.

### Core Brand & General Keywords
*   `Heaven11 Holidays`, `Heaven11`, `Heaven 11`, `Heaven11 Holidays Private Limited`
*   `premium customized travel agency`, `best travel agency for international tours`, `luxury holiday planners`, `customized tour operators`
*   `visa processing services`, `flight ticket booking online`, `luxury resort booking`, `family tour packages`

### Domestic Tour Keywords
*   `Kashmir tour package`, `Dal Lake Shikara ride tour`, `Gulmarg Gondola package`
*   `Kerala tour package`, `Alleppey houseboat stay booking`, `Munnar tea garden tour`
*   `Ooty trip package`, `Kodaikanal holiday package`, `Goa tour package with water sports`
*   `Andaman tour package Havelock`, `Rajasthan heritage tour package`, `Himachal tour package`
*   `Leh Ladakh road trip package`, `Manali Solang Valley tour`, `Coorg tea estate tour`
*   `Pondicherry French colony tour`, `Wayanad cave exploration package`, `Yercaud lake trip`

### International Tour Keywords
*   `Dubai tour package Burj Khalifa`, `Desert Safari tour package`
*   `Thailand tour package Pattaya Bangkok`, `Singapore Universal Studios package`
*   `Malaysia Petronas Towers tour`, `Bali tour package Kelingking Beach`
*   `Maldives luxury water villa package`, `Vietnam Halong Bay cruise package`
*   `Europe scenic tour package`, `Switzerland alpine train package`, `Turkey Cappadocia balloon tour`

---

## 🛠️ Tech Stack

*   **Frontend:** React.js, TypeScript, Vite, TailwindCSS (Vanilla utility classes), Framer Motion, Lucide icons.
*   **Backend:** Node.js, Express.js, PostgreSQL (Database persistence), CORS security middleware.
*   **Database:** PostgreSQL (with `pg` Pool helper).

---

## 🚀 Quick Start & Installation

### Step 1: Clone and Set Up Database
Please refer to the [Backend Setup Guide](file:///d:/desktop/heaven%2011/backend/README.md) for detailed PostgreSQL instructions to configure the database schema using pgAdmin 4.

### Step 2: Configure Environment Variables
1.  **Backend Environment:** In the `backend` directory, create a `.env` file from the template:
    ```env
    PORT=5000
    NODE_ENV=production
    FRONTEND_URL=https://heaven11holidays.in
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_postgres_username
    DB_PASSWORD=your_postgres_password
    DB_NAME=haven11_holidays
    ADMIN_SECRET_KEY=your_admin_secret_key
    ```

### Step 3: Run the Application Locally

#### Backend Setup:
```bash
cd backend
npm install
npm run dev
```

#### Frontend Setup:
```bash
cd frontend
npm install
npm run dev
```

### Step 4: Build for Production
To bundle the frontend resources for hosting deployment:
```bash
cd frontend
npm run build
```
This generates optimized HTML, JS, and CSS static files inside the `dist/` directory, ready to be hosted on your production server.

---

## 🔒 Verification & Security
*   **CORS Security:** Enabled for `https://heaven11holidays.in` and `https://www.heaven11holidays.in` to block unauthorized request origins.
*   **Admin Panel:** Protected via encrypted/environment secret key validation for exporting subscriber list formats.
*   **Secure Favicon:** Embedded the official [heaven11logo.png](file:///d:/desktop/heaven%2011/frontend/public/heaven11logo.png) directly in the browser tab and address bar.
