import express from 'express';

import {
  createSeries,
  getSeries,
  getSeriesById,
  updateSeries,
  deleteSeries
} from '../controllers/seriesController.js';

const router = express.Router();

router.post('/', createSeries);
router.get('/', getSeries);
router.get('/:id', getSeriesById);
router.put('/:id', updateSeries);
router.delete('/:id', deleteSeries);

export default router;
