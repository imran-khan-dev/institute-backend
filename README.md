# 🧩 Backend – Scalable & Dynamic Institute Website (MERN Stack)

This is the **backend** for the [Scalable & Dynamic Institute Website](https://github.com/imran-khan-dev/institute-frontend), built using **Node.js**, **Express.js**, and **MongoDB**, following a **clean, modular architecture**.

---

## 📌 Purpose

This backend powers a dynamic, admin-controlled educational website that enables institutions to manage content like notices, media, director's sayings, and more — all from an intuitive admin panel.

It’s part of a complete MERN stack solution designed for:

- Schools & colleges seeking full control over their website
- Avoiding slow, plugin-heavy, or static WordPress setups
- Admins who aren’t tech-savvy but need a simple manageable system

---

## 🚀 Core Features

✅ JWT-based admin authentication  
✅ Protected admin-only routes  
✅ Modular clean architecture (Controller → Use Case → Repository)  
✅ MongoDB-based dynamic content storage  
✅ REST APIs for:

- Headline & Institute Code
- Slideshow/Banner Images
- About Section
- Governing Body Sayings
- Notices (CRUD + detail support)
- Important Links
- Media Gallery (image upload & management)

---

## 🧠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **Architecture:** Layered Clean Architecture
- **File Uploads:** Multer + Cloud Storage (e.g., Cloudinary)

---

## 🔐 Authentication Details

- Admin credentials are **manually created in the DB** (no public registration).
- Admin login returns a **JWT** for protected route access.
- All admin operations require token-based authentication.

---

## 🗂 Folder Structure

src/
├── controllers/ # Handle request/response
├── use-cases/ # Core business logic
├── entities/ # Mongoose schemas
├── routes/ # Route definitions
└── config/ # DB config

## 🔗 Important Links

- 🔴 **Live Site:** [Frontend on Vercel](https://institute-frontend.vercel.app)
- 🌐 **Frontend Repo:** [GitHub – institute-frontend](https://github.com/imran-khan-dev/institute-frontend)
- 🧩 **Backend Repo (this):** [GitHub – institute-backend](https://github.com/imran-khan-dev/institute-backend)

---

## 🌱 Environment Variables

Make sure to create a `.env` file with the following variables:

MONGO_URI=your_mongo_db_connection
PORT=5000
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_ORIGIN=your_local_host_url

---

## 📌 Future Enhancements

- Admin password reset
- Multi-admin support (role-based access)
- Full-featured Event & Admission systems
- Logging, rate limiting, and more security layers

---

## 📄 License

This backend is open-source and released under the MIT License.

## 🙋‍♂️ Author & Project Vision

This backend was built as part of my first full-stack MERN project with real-world goals:

- Learn full-stack in depth
- Solve a niche local problem
- Create a scalable base for client-ready educational websites

You’re welcome to fork, build on, or reach out for collaboration.
