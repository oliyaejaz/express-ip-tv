import Stream from '../models/StreamModel.js';

// Create a new stream
export const createStream = async (req, res) => {
  try {
    const newStream = new Stream(req.body);
    await newStream.save();
    res.status(201).json(newStream);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all streams
export const getStreams = async (req, res) => {
  try {
    const streams = await Stream.find().populate('episodeId');
    res.status(200).json(streams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single stream by ID
export const getStreamById = async (req, res) => {
  try {
    const stream = await Stream.findById(req.params.id).populate('episodeId');
    if (!stream) return res.status(404).json({ message: 'Stream not found' });
    res.status(200).json(stream);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a stream by ID
export const updateStream = async (req, res) => {
  try {
    const updatedStream = await Stream.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStream) return res.status(404).json({ message: 'Stream not found' });
    res.status(200).json(updatedStream);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a stream by ID
export const deleteStream = async (req, res) => {
  try {
    const deletedStream = await Stream.findByIdAndDelete(req.params.id);
    if (!deletedStream) return res.status(404).json({ message: 'Stream not found' });
    res.status(200).json({ message: 'Stream deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
