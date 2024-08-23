import mongoose from 'mongoose';

const { Schema } = mongoose;

const genresSeriesSchema = new Schema({
  genreId: { type:String, required: true},
  seriesId: { type: Schema.Types.ObjectId, ref: 'Series', required: true},
  createdAt: { type: Date, default: Date.now },
});

const GenresSeries = mongoose.model('GenresSeries', genresSeriesSchema);

export default GenresSeries;
