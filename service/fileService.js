import File from '../models/File.js';

// Create a new file
export const createFile = async (fileData) => {
  try {
    const newFile = new File(fileData);
    return await newFile.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all files
export const getFiles = async () => {
  try {
    return await File.find().populate('streamId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single file by ID
export const getFileById = async (id) => {
  try {
    return await File.findById(id).populate('streamId');
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a file by ID
export const updateFile = async (id, fileData) => {
  try {
    return await File.findByIdAndUpdate(id, fileData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a file by ID
export const deleteFile = async (id) => {
  try {
    return await File.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
