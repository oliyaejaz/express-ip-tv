import Season from '../models/Season.js';

// Create a new season
export const createSeason = async (seasonData) => {
  try {
    const newSeason = new Season(seasonData);
    return await newSeason.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all seasons
export const getSeasons = async () => {
  try {
    return await Season.find().populate('seriesId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single season by ID
export const getSeasonById = async (id) => {
  try {
    return await Season.findById(id).populate('seriesId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a season by ID
export const updateSeason = async (id, seasonData) => {
  try {
    return await Season.findByIdAndUpdate(id, seasonData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a season by ID
export const deleteSeason = async (id) => {
  try {
    return await Season.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
