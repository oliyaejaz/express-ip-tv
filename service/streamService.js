import Stream from '../models/Stream.js';

// Create a new stream
export const createStream = async (streamData) => {
  try {
    const newStream = new Stream(streamData);
    return await newStream.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all streams
export const getStreams = async () => {
  try {
    return await Stream.find().populate('episodeId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single stream by ID
export const getStreamById = async (id) => {
  try {
    return await Stream.findById(id).populate('episodeId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a stream by ID
export const updateStream = async (id, streamData) => {
  try {
    return await Stream.findByIdAndUpdate(id, streamData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a stream by ID
export const deleteStream = async (id) => {
  try {
    return await Stream.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
