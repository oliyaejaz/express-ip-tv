import GenresSeries from '../models/GenresSeriesModel.js';

// Create a new GenresSeries relationship
export const createGenresSeries = async (req, res) => {
  try {
    const newGenresSeries = new GenresSeries(req.body);
    await newGenresSeries.save();
    res.status(201).json(newGenresSeries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all GenresSeries relationships
export const getGenresSeries = async (req, res) => {
  try {
    const genresSeries = await GenresSeries.find().populate('genreId seriesId');
    res.status(200).json(genresSeries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single GenresSeries relationship by ID
export const getGenresSeriesById = async (req, res) => {
  try {
    const genresSeries = await GenresSeries.findById(req.params.id).populate('genreId seriesId');
    if (!genresSeries) return res.status(404).json({ message: 'GenresSeries relationship not found' });
    res.status(200).json(genresSeries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a GenresSeries relationship by ID
export const updateGenresSeries = async (req, res) => {
  try {
    const updatedGenresSeries = await GenresSeries.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGenresSeries) return res.status(404).json({ message: 'GenresSeries relationship not found' });
    res.status(200).json(updatedGenresSeries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a GenresSeries relationship by ID
export const deleteGenresSeries = async (req, res) => {
  try {
    const deletedGenresSeries = await GenresSeries.findByIdAndDelete(req.params.id);
    if (!deletedGenresSeries) return res.status(404).json({ message: 'GenresSeries relationship not found' });
    res.status(200).json({ message: 'GenresSeries relationship deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
