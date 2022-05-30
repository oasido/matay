const eventIdHandler = async (req, res) => {
  try {
    const { eventId } = req.query;

    // find event id in database
    // if found, return event details
    // if not found, return 404

    res.send(eventId);
  } catch (error) {
    console.error(error);
  }
};

export default eventIdHandler;
