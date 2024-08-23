import Joi from 'joi';

const genreValidator = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().max(255).optional(),
});

export default genreValidator;
