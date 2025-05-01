// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";
// import User from "././entities/User.js";

// dotenv.config();

// async function createAdmin() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB");

//     const password = "45.86.86.86";
//     const hashedPassword = bcrypt.hashSync(password, 10);

//     const admin = new User({
//       name: "Admin Imran",
//       email: "emrankhanniloy@gmail.com",
//       passwordHash: hashedPassword,
//       role: "admin",
//     });

//     await admin.save();
//     console.log("✅ Admin user created successfully!");
//   } catch (error) {
//     console.error("Error creating admin:", error);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// createAdmin();
