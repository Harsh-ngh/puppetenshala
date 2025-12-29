import CredentialModel from "../Models/Credentials.model.js";

const addCredentials = async (req, res) => {
    try {
        const { college, degree, stream, percentage, training, organisation,link, rating, hiringreason, availability } = req.body;
        const credentialModel = new CredentialModel({ college, degree, stream, percentage, training, organisation, link, rating, hiringreason, availability });
        await credentialModel.save();
        res.status(201)
            .json({
                message: "Credentials added successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: err.message,
                success: false
            })
    }
}

export default addCredentials;