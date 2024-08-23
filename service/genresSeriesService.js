import GenresSeries from '../models/GenresSeries.js';

// Create a new GenresSeries relationship
export const createGenresSeries = async (genresSeriesData) => {
  try {
    const newGenresSeries = new GenresSeries(genresSeriesData);
    return await newGenresSeries.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all GenresSeries relationships
export const getGenresSeries = async () => {
  try {
    return await GenresSeries.find().populate('genreId seriesId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single GenresSeries relationship by ID
export const getGenresSeriesById = async (id) => {
  try {
    return await GenresSeries.findById(id).populate('genreId seriesId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a GenresSeries relationship by ID
export const updateGenresSeries = async (id, genresSeriesData) => {
  try {
    return await GenresSeries.findByIdAndUpdate(id, genresSeriesData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a GenresSeries relationship by ID
export const deleteGenresSeries = async (id) => {
  try {
    return await GenresSeries.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
