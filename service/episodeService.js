import Episode from '../models/Episode.js';

// Create a new episode
export const createEpisode = async (episodeData) => {
  try {
    const newEpisode = new Episode(episodeData);
    return await newEpisode.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all episodes
export const getEpisodes = async () => {
  try {
    return await Episode.find().populate('seasonId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single episode by ID
export const getEpisodeById = async (id) => {
  try {
    return await Episode.findById(id).populate('seasonId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update an episode by ID
export const updateEpisode = async (id, episodeData) => {
  try {
    return await Episode.findByIdAndUpdate(id, episodeData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete an episode by ID
export const deleteEpisode = async (id) => {
  try {
    return await Episode.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
