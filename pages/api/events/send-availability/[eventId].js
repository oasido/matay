import Event from '../../../../models/Event';
import Participant from '../../../../models/Participant';

const registerParticipant = async (req, res) => {
  try {
    const { eventId } = req.query;
    const { availability, name, email } = req.body;
  } catch (error) {
    console.error(error);
    res.send(error.msg);
  }
};

export default registerParticipant;
