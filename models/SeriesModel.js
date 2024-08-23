import mongoose from 'mongoose';

const { Schema } = mongoose;

const seriesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Series = mongoose.model('Series', seriesSchema);

export default Series;
