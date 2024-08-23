import express from 'express';


import {
  createGenresSeries,
  getGenresSeries,
  getGenresSeriesById,
  updateGenresSeries,
  deleteGenresSeries
} from '../controllers/genresSeriesController.js';

const router = express.Router();

router.post('/', createGenresSeries);
router.get('/', getGenresSeries);
router.get('/:id', getGenresSeriesById);
router.put('/:id', updateGenresSeries);
router.delete('/:id', deleteGenresSeries);

export default router;
