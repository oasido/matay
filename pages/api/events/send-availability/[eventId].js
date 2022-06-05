import dbConnect from '../../../../lib/dbConnect';
import Event from '../../../../models/Event';
import Participant from '../../../../models/Participant';

const registerParticipant = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }

    dbConnect();

    const { eventId } = req.query;
    const { availability, name, email } = req.body;

    const event = await Event.findById(eventId);
    event === null && res.send('Event not found.');

    const combineAvailability = (dates) => {
      try {
        const combined = [];
        dates.forEach((date, i) => {
          combined.push({ availability: availability[i], date: date, time: '10:10' });
        });
        return combined;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const when = combineAvailability(event.dates);

    const participant = await Participant.create({
      eventId,
      when,
      createdBy: {
        name,
        email,
      },
    });

    res.status(200).send({ success: true, msg: 'Participant registered successfully.' });
  } catch (error) {
    res.status(500).send({ success: false, msg: 'An error has occurred.' });
  }
};

export default registerParticipant;
