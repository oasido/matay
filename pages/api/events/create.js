import dbConnect from '../../../lib/dbConnect';
const createEventHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }

    dbConnect();
    
  } catch (error) {
    console.error(error);
  }
};

export default createEventHandler;
