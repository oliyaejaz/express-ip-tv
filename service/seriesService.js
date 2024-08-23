import Series from '../models/Series.js';

// Create a new series
export const createSeries = async (seriesData) => {
  try {
    const newSeries = new Series(seriesData);
    return await newSeries.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all series
export const getSeries = async () => {
  try {
    return await Series.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single series by ID
export const getSeriesById = async (id) => {
  try {
    return await Series.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a series by ID
export const updateSeries = async (id, seriesData) => {
  try {
    return await Series.findByIdAndUpdate(id, seriesData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a series by ID
export const deleteSeries = async (id) => {
  try {
    return await Series.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
