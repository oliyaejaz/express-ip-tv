import mongoose from 'mongoose';

const { Schema } = mongoose;

const genreSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Genre = mongoose.model('Genre', genreSchema);

export default Genre;
