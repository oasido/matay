import dbConnect from '../../../lib/dbConnect';
  try {
    dbConnect();
    
  } catch (error) {
    console.error(error);
  }
};

export default createEventHandler;
