import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

// Import Routes for Governingbody Management
import uploadGoverningBodyImg from "./routes/admin/governingBody/addGB.route.js";
import governingBodyDelete from "./routes/admin/governingBody/deleteGB.route.js";
import governingBodyRoutes from "./routes/admin/governingBody/getAllGB.route.js";
import updateGoverningBodyImg from "./routes/admin/governingBody/updateGB.route.js";

// Import Routes for Sliders
import uploadSlider from "./routes/admin/slider/addSlider.route.js";
import deleteSlider from "./routes/admin/slider/deleteSlider.route.js";
import getAllSlides from "./routes/admin/slider/getAllSliders.route.js";
import updateSlider from "./routes/admin/slider/updateSlider.route.js";

// Import Routes for Notice
import addNotice from "./routes/admin/notice/addNotice.route.js";
import deleteMarkNotices from "./routes/admin/notice/deleteMarkNotices.route.js";
import deleteNotice from "./routes/admin/notice/deleteNotice.route.js";
import getAllNotices from "./routes/admin/notice/getAllNotices.route.js";
import getSingleNotice from "./routes/admin/notice/getSingleNotice.route.js";
import updateNotice from "./routes/admin/notice/updateNotice.route.js";

// Import Routes for Headline
import updateHeadline from "./routes/admin/updateHeadline/addUpdateHeadline.route.js";
import deleteAllHeadlines from "./routes/admin/updateHeadline/allHeadlinesDelete.route.js";
import getAllHeadlines from "./routes/admin/updateHeadline/getAllHeadlines.route.js";

// Import Routes for Link Manager
import addLink from "./routes/admin/linkManager/addLink.route.js";
import deleteLink from "./routes/admin/linkManager/deleteLink.route.js";
import getAllLinks from "./routes/admin/linkManager/getAllLinks.route.js";

// Import Routes for "About Institute"
import aboutInstitute from "./routes/admin/aboutInstitute/addAboutInstitute.route.js";
import deleteAboutInstitute from "./routes/admin/aboutInstitute/deleteAboutInstitute.route.js";
import getAboutInstitute from "./routes/admin/aboutInstitute/getAboutInstitute.route.js";

// Import Routes for Institute Code
import instituteCodeDetails from "./routes/admin/instituteCode/addInstituteCode.route.js";
import deleteInstituteCode from "./routes/admin/instituteCode/deleteInstituteCode.route.js";
import getInstituteCodeDetails from "./routes/admin/instituteCode/getInstituteCode.route.js";

// Import Routes for Gallery Photos
import addImage from "./routes/admin/mediaGallery/addImage.route.js";
import deleteImage from "./routes/admin/mediaGallery/deleteImage.route.js";
import deleteMarkImages from "./routes/admin/mediaGallery/deleteMarkImages.route.js";
import getAllImages from "./routes/admin/mediaGallery/getAllImages.route.js";
import updateImageMeta from "./routes/admin/mediaGallery/updateImage.route.js";

// Registration and Login
import login from "./routes/admin/authentication/login.route.js";

dotenv.config();
connectDB();

const app = express();

const allowedOrigin = (
  process.env.CLIENT_ORIGIN || "http://localhost:5173"
).replace(/\/$/, "");
app.use(cors({ origin: allowedOrigin }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Institute Website API is Running...");
});

// API Routes for Governing Bodies:
app.use("/api/governing-body-all", governingBodyRoutes);
app.use("/api/upload-governing-body", uploadGoverningBodyImg);
app.use("/api/governing-body-update/", updateGoverningBodyImg);
app.use("/api/governing-body-delete/", governingBodyDelete);

// API Routes for Slider
app.use("/api/slider-images", getAllSlides);
app.use("/api/slider-upload", uploadSlider);
app.use("/api/slider-delete/", deleteSlider);
app.use("/api/slider-update/", updateSlider);

// API Routes for Notice
app.use("/api/notice-add", addNotice);
app.use("/api/notices", getAllNotices);
app.use("/api/notice", getSingleNotice);
app.use("/api/delete-notice", deleteNotice);
app.use("/api/delete-notice-mark", deleteMarkNotices);
app.use("/api/update-notice/", updateNotice);
app.use("/api/update-headline", updateHeadline);

// API Routes for Headline
app.use("/api/all-headlines-delete", deleteAllHeadlines);
app.use("/api/all-headlines", getAllHeadlines);

// API Routes for Link Manager
app.use("/api/add-link", addLink);
app.use("/api/delete-link", deleteLink);
app.use("/api/get-links", getAllLinks);

// API Routes for "About Institute"
app.use("/api/add-about-institute", aboutInstitute);
app.use("/api/delete-about", deleteAboutInstitute);
app.use("/api/get-about-institute", getAboutInstitute);

// API Routes for Institute Code
app.use("/api/institute-code-delete", deleteInstituteCode);
app.use("/api/institute-code", instituteCodeDetails);
app.use("/api/get-institute-code", getInstituteCodeDetails);

// API Routes for Gallery Photos
app.use("/api/all-images", getAllImages);
app.use("/api/add-image", addImage);
app.use("/api/update-image-meta", updateImageMeta);
app.use("/api/delete-image", deleteImage);
app.use("/api/delete-mark-images", deleteMarkImages);

// Registration and Login
app.use("/api/login", login);

// 404 not found hanlde
app.use("/api/*", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
