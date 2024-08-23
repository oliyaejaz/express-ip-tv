import mongoose from 'mongoose';

const { Schema } = mongoose;

const fileSchema = new Schema({
 streamId : { type: Schema.Types.ObjectId, ref: 'Stream', required: true },
  fileType: { type: String, required: true },
  filePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const File = mongoose.model('File', fileSchema);

export default File;
