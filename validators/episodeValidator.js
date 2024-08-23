import Joi from 'joi';

const episodeValidator = Joi.object({
    seasonId: Joi.string().hex().length(24).required(), // Assuming MongoDB ObjectId
    title: Joi.string().min(3).max(50).required(),
    episodeNumber: Joi.number().integer().min(1).required(),
});

export default episodeValidator;
