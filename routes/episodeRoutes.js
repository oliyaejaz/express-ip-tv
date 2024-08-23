import express from 'express';

import {
  createEpisode,
  getEpisodes,
  getEpisodeById,
  updateEpisode,
  deleteEpisode
} from '../controllers/episodeController.js';

const router = express.Router();

router.post('/', createEpisode);
router.get('/', getEpisodes);
router.get('/:id', getEpisodeById);
router.put('/:id', updateEpisode);
router.delete('/:id', deleteEpisode);

export default router;
