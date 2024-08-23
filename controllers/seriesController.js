import Series from '../models/SeriesModel.js';

// Create a new series
export const createSeries = async (req, res) => {
  try {
    const newSeries = new Series(req.body);
    await newSeries.save();
    res.status(201).json(newSeries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all series
export const getSeries = async (req, res) => {
  try {
    const series = await Series.find();
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single series by ID
export const getSeriesById = async (req, res) => {
  try {
    const series = await Series.findById(req.params.id);
    if (!series) return res.status(404).json({ message: 'Series not found' });
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a series by ID
export const updateSeries = async (req, res) => {
  try {
    const updatedSeries = await Series.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSeries) return res.status(404).json({ message: 'Series not found' });
    res.status(200).json(updatedSeries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a series by ID
export const deleteSeries = async (req, res) => {
  try {
    const deletedSeries = await Series.findByIdAndDelete(req.params.id);
    if (!deletedSeries) return res.status(404).json({ message: 'Series not found' });
    res.status(200).json({ message: 'Series deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
