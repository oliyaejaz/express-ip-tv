import Season from '../models/SeasonModel.js';

// Create a new season
export const createSeason = async (req, res) => {
  try {
    const newSeason = new Season(req.body);
    await newSeason.save();
    res.status(201).json(newSeason);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all seasons
export const getSeasons = async (req, res) => {
  try {
    const seasons = await Season.find().populate('seriesId');
    res.status(200).json(seasons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single season by ID
export const getSeasonById = async (req, res) => {
  try {
    const season = await Season.findById(req.params.id).populate('seriesId');
    if (!season) return res.status(404).json({ message: 'Season not found' });
    res.status(200).json(season);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a season by ID
export const updateSeason = async (req, res) => {
  try {
    const updatedSeason = await Season.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSeason) return res.status(404).json({ message: 'Season not found' });
    res.status(200).json(updatedSeason);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a season by ID
export const deleteSeason = async (req, res) => {
  try {
    const deletedSeason = await Season.findByIdAndDelete(req.params.id);
    if (!deletedSeason) return res.status(404).json({ message: 'Season not found' });
    res.status(200).json({ message: 'Season deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
