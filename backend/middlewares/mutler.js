// import multer from "multer";

// const storage = multer.memoryStorage();
// export const singleUpload = multer({storage}).single("file");

import multer from "multer";

const storage = multer.memoryStorage();

export const singleUpload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit to 5MB
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith("image/") && file.mimetype !== "application/pdf") {
            return cb(new Error("Only images and PDFs are allowed!"), false);
        }
        cb(null, true);
    }
}).single("file");
