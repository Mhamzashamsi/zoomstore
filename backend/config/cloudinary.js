
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

const uploadoncloudinary = async (filepath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        if (!filepath) return null
        
        const uploadresult = await cloudinary.uploader.upload(filepath);
        fs.unlinkSync(filepath)
        
        return uploadresult.secure_url  // ✅ Bas yeh change karo
    }
    catch (error) {
        fs.unlinkSync(filepath)
        console.log(error)
    }
}

export default uploadoncloudinary