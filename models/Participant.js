import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const { Schema } = mongoose;

const Participant = new Schema({
  _id: {
    type: String,
    default: () => nanoid(15),
  },

  dates: [
    {
      availability: { type: String, required: [true, 'Missing OK/NO/MAYBE'] },
      date: { type: Date, required: [true, 'Please provide at least 1 date'] },
    },
  ],

  createdBy: {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxlength: [50, 'Name cannot be more than 50 characters'],
      minlength: [1, 'Name cannot be empty'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
    },
  },
});

export default mongoose.models.Participant || mongoose.model('Participant', Participant);
