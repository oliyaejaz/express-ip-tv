import mongoose from 'mongoose';

const { Schema } = mongoose;

const episodeSchema = new Schema({
  seasonId: { type: Schema.Types.ObjectId, ref: 'Season', required: true },
  episodeNumber: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Episode = mongoose.model('Episode', episodeSchema);

export default Episode;
