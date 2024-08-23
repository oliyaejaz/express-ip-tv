import express from 'express';

import {
  createStream,
  getStreams,
  getStreamById,
  updateStream,
  deleteStream
} from '../controllers/streamController.js';

const router = express.Router();

router.post('/', createStream);
router.get('/', getStreams);
router.get('/:id', getStreamById);
router.put('/:id', updateStream);
router.delete('/:id', deleteStream);

export default router;
