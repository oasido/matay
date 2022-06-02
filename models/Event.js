import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const { Schema } = mongoose;

const Event = new Schema({
  _id: {
    type: String,
    default: () => nanoid(15),
  },
  type: { type: String, required: true },
  title: {
    type: String,
    required: [true, 'Please provide a title.'],
    maxlength: [50, 'Title cannot be more than 50 characters'],
    minlength: [1, 'Title cannot be empty'],
  },
  description: {
    type: String,
    required: false,
    maxlength: [280, 'Description cannot be more than 50 characters'],
  },
  dates: [
    {
      type: Date,
      required: [true, 'Please provide at least 1 date'],
    },
  ],
  location: {
    type: String,
    required: false,
    maxlength: [50, 'Location be more than 50 characters'],
  },
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

export default mongoose.models.Event || mongoose.model('Event', Event);
