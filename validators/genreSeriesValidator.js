import Joi from 'joi';

const genreSeriesValidator = Joi.object({
    genreId: Joi.string().hex().length(24).required(),  // Assuming MongoDB ObjectId
    seriesId: Joi.string().hex().length(24).required(), // Assuming MongoDB ObjectId
});

export default genreSeriesValidator;
