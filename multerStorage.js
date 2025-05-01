import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    if (file.mimetype === "application/pdf") {
      return {
        folder: "home/school-website/governing-body",
        resource_type: "raw",
        format: "pdf",
      };
    } else {
      return {
        folder: "home/school-website/governing-body",
        allowed_formats: ["jpg", "jpeg", "png", "gif", "webp"],
        transformation: [
          { width: 800, height: 800, crop: "limit", quality: "auto" },
        ],
      };
    }
  },
});

// File filter for images only
const imageFilter = (req, file, cb) => {
  const allowedTypesImage = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  if (allowedTypesImage.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPG, PNG, GIF, and WEBP are allowed."),
      false
    );
  }
};

// File filter for both images and PDFs
const imageAndPdfFilter = (req, file, cb) => {
  const allowedTypesImage = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  const allowedTypeFile = ["application/pdf"];

  if (
    allowedTypesImage.includes(file.mimetype) ||
    allowedTypeFile.includes(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only JPG, PNG, GIF, WEBP, and PDF are allowed."
      ),
      false
    );
  }
};

// Multer instance for images only
const uploadImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: imageFilter,
});

// Multer instance for both images and PDFs
const uploadImageAndPdf = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: imageAndPdfFilter,
});

export { uploadImage, uploadImageAndPdf };
