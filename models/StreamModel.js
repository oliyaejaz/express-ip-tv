import mongoose from 'mongoose';

const { Schema } = mongoose;

const streamSchema = new Schema({
  episodeId: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Stream = mongoose.model('Stream', streamSchema);

export default Stream;
