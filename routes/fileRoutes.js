import express from 'express';

import {
  createFile,
  getFiles,
  getFileById,
  updateFile,
  deleteFile
} from '../controllers/fileController.js';

const router = express.Router();

router.post('/', createFile);
router.get('/', getFiles);
router.get('/:id', getFileById);
router.put('/:id', updateFile);
router.delete('/:id', deleteFile);

export default router;
