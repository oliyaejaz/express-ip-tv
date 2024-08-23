import Joi from 'joi';

const seriesValidator = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().max(500).optional(),
});

export default seriesValidator;
