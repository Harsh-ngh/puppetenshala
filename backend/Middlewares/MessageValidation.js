import Joi from 'joi';

export const messageValidation = (req, res, next) => {  
    const schema = Joi.object({
        message: Joi.string().min(3).max(1000).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}