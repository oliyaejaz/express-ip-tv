import express from 'express';
import connectDB from './config/db.js';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';
import streamRoutes from './routes/streamRoutes.js';
import seriesRoutes from './routes/seriesRoutes.js';
import seasonRoutes from './routes/seasonRoutes.js';
import genresSeriesRoutes from './routes/genresSeriesRoutes.js';
import genresRoutes from './routes/genreRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import episodeRoutes from './routes/episodeRoutes.js';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/stream', streamRoutes);
app.use('/api/series', seriesRoutes);
app.use('/api/season', seasonRoutes);
app.use('/api/genresSeries', genresSeriesRoutes);
app.use('/api/genres', genresRoutes);
app.use('/api/file', fileRoutes);
app.use('/api/episode', episodeRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
