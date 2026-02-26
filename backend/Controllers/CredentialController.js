import CredentialModel from "../Models/Credentials.model.js";
import  uploadToCloudinary  from "../Services/cloudinaryService.js";

const addCredentials = async (req, res) => {
  try {
    const {
      college,
      degree,
      stream,
      percentage,
      training,
      organisation,
      link,
      rating,
      hiringreason,
      availability,
    } = req.body;

    // resume file check
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    // upload to cloudinary
    const cloudinaryResult = await uploadToCloudinary(req.file.path);

    const credentialModel = new CredentialModel({
      college,
      degree,
      stream,
      percentage,
      training,
      organisation,
      link,
      rating,
      hiringreason,
      availability,
      resume: cloudinaryResult.url, 
    });

    await credentialModel.save();

    res.status(201).json({
      message: "Credentials added successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

export default addCredentials;