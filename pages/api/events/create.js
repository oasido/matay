import dbConnect from '../../../lib/dbConnect';
import Event from '../../../models/Event';

const createEventHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }

    dbConnect();

    const { type } = req.body;
    const { inputTitle, inputDesc, dates, location, name, email } = req.body.values;

    const event = await Event.create({
      type,
      title: inputTitle,
      description: inputDesc,
      dates,
      location,
      createdBy: { name, email },
    });
    event.save();

    res.status(200).send({ success: true, msg: 'Event created successfully.', eventId: event._id });
  } catch (error) {
    res.status(500).send({ success: false, msg: 'An error has occurred.' });
  }
};

export default createEventHandler;
