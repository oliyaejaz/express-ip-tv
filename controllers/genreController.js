import Genre from '../models/GenreModel.js';

// Create a new genre
export const createGenre = async (req, res) => {
  try {
    const newGenre = new Genre(req.body);
    await newGenre.save();
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all genres
export const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single genre by ID
export const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a genre by ID
export const updateGenre = async (req, res) => {
  try {
    const updatedGenre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGenre) return res.status(404).json({ message: 'Genre not found' });
    res.status(200).json(updatedGenre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a genre by ID
export const deleteGenre = async (req, res) => {
  try {
    const deletedGenre = await Genre.findByIdAndDelete(req.params.id);
    if (!deletedGenre) return res.status(404).json({ message: 'Genre not found' });
    res.status(200).json({ message: 'Genre deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
