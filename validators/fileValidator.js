import Joi from 'joi';

const fileValidator = Joi.object({
    streamId: Joi.string().hex().length(24).required(), // Assuming MongoDB ObjectId
    filePath: Joi.string().min(3).max(255).required(),
    fileName: Joi.string().min(1).max(100).required(),
    fileSize: Joi.number().integer().min(1).required(),
    fileType: Joi.string().valid('video/mp4', 'audio/mpeg', 'image/jpeg', 'image/png').required(),
});

export default fileValidator;
