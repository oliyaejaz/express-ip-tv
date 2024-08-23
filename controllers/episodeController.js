import Episode from '../models/EpisodeModel.js';

// Create a new episode
export const createEpisode = async (req, res) => {
  try {
    const newEpisode = new Episode(req.body);
    await newEpisode.save();
    res.status(201).json(newEpisode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all episodes
export const getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find().populate('seasonId');
    res.status(200).json(episodes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single episode by ID
export const getEpisodeById = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id).populate('seasonId');
    if (!episode) return res.status(404).json({ message: 'Episode not found' });
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an episode by ID
export const updateEpisode = async (req, res) => {
  try {
    const updatedEpisode = await Episode.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEpisode) return res.status(404).json({ message: 'Episode not found' });
    res.status(200).json(updatedEpisode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an episode by ID
export const deleteEpisode = async (req, res) => {
  try {
    const deletedEpisode = await Episode.findByIdAndDelete(req.params.id);
    if (!deletedEpisode) return res.status(404).json({ message: 'Episode not found' });
    res.status(200).json({ message: 'Episode deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
