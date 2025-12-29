import Joi from "joi";

export const credentialValidation = (req, res, next) => {
    const schema = Joi.object({
        college: Joi.string().min(10).max(100).required(),
        degree: Joi.string().min(3).max(100).required(),
        stream: Joi.string().min(3).max(100).required(),
        percentage: Joi.number().min(0).max(100).required(),
        training: Joi.array().items(Joi.string().min(3).max(100)).required(),
        organisation: Joi.string().min(0).max(100).required(),
        // description: Joi.string().min(3).max(1000).required(),
        link: Joi.string().min(3).max(100).required(),
        rating: Joi.number().min(0).max(5).required(),
        hiringreason: Joi.string().min(0).max(2000).required(),
        availability: Joi.string().min(0).max(1000).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}
