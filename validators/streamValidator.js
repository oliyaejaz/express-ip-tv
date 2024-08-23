import Joi from 'joi';

const streamValidator = Joi.object({
    episodeId: Joi.string().hex().length(24).required(), // Assuming MongoDB ObjectId
    streamUrl: Joi.string().uri().required(),
    filePath: Joi.string().min(3).max(255).required(),
});

export default streamValidator;
