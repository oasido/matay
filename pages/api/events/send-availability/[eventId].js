import Event from '../../../../models/Event';
import Participant from '../../../../models/Participant';

const registerParticipant = async (req, res) => {
  try {
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

    res.send(event);
  } catch (error) {
    console.error(error);
    res.send(error.msg);
  }
};

export default registerParticipant;
