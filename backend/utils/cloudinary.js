import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Debugging: Print environment variables to check if they are loaded correctly
console.log("Cloudinary Config:", {
    cloud_name: process.env.CLOUD_NAME || "Missing",
    api_key: process.env.API_KEY || "Missing",
    api_secret: process.env.SECRET_KEY ? "Loaded" : "Missing",
});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
    timeout: 120000,  // Increased timeout to 120 seconds
});

// Test Cloudinary connection (Optional)
cloudinary.api.ping()
    .then(() => console.log("✅ Cloudinary connected successfully."))
    .catch((err) => console.error("❌ Cloudinary connection error:", err));

export default cloudinary;
