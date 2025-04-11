import cloudinary from "./utils/cloudinary.js"; // Adjust path if needed

const testUpload = async () => {
    try {
        console.log("Starting Cloudinary Upload...");
        const response = await cloudinary.uploader.upload("photo.jpg", {
            folder: "test",
        });
        console.log("Upload Success:", response.secure_url);
    } catch (error) {
        console.error("Upload Error:", error);
    }
};

testUpload();
