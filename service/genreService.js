import Genre from '../models/Genre.js';

// Create a new genre
export const createGenre = async (genreData) => {
  try {
    const newGenre = new Genre(genreData);
    return await newGenre.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all genres
export const getGenres = async () => {
  try {
    return await Genre.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single genre by ID
export const getGenreById = async (id) => {
  try {
    return await Genre.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a genre by ID
export const updateGenre = async (id, genreData) => {
  try {
    return await Genre.findByIdAndUpdate(id, genreData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a genre by ID
export const deleteGenre = async (id) => {
  try {
    return await Genre.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
