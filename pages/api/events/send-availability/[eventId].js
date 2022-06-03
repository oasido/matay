import Event from '../../../../models/Event';
import Participant from '../../../../models/Participant';

const registerParticipant = async (req, res) => {
  try {
    const { eventId } = req.query;
    const { availability, name, email } = req.body;
    const event = await Event.findById(eventId);
    event === null && res.send('Event not found.');
  } catch (error) {
    console.error(error);
    res.send(error.msg);
  }
};

export default registerParticipant;
