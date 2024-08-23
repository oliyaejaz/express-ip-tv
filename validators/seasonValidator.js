import Joi from 'joi';

const seasonValidator = Joi.object({
    seriesId: Joi.string().hex().length(24).required(), // Assuming MongoDB ObjectId
    seasonNumber: Joi.number().integer().min(1).required(),
});

export default seasonValidator;
