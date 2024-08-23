import mongoose from 'mongoose';

const { Schema } = mongoose;

const seasonSchema = new Schema({
  seriesId: { type:String, required: true },
  seasonNumber: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Season = mongoose.model('Season', seasonSchema);

export default Season;
