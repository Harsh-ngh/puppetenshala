const uploadToCloudinary = async (localFilePath, maxRetries = 2) => {
  let attempts = 0;
  let result;

  while (attempts <= maxRetries) {
    try {
      result = await cloudinary.uploader.upload(localFilePath, {
        folder: "resumes",
        resource_type: "raw",
      });
      break;
    } catch (error) {
      attempts++;
      if (attempts > maxRetries) {
        throw error; 
      }
      console.log(`Retry attempt ${attempts} for file ${localFilePath}`);
    }
  }

  
  if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);

  return { url: result.secure_url, publicId: result.public_id };
};