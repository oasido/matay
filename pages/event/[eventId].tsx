import { useRouter } from 'next/router';
import dbConnect from './../../lib/dbConnect';
import Event from './../../models/Event';
import Participant from './../../models/Participant';
import Navbar from '../../modules/Navbar';
import BottomMenu from './../../modules/eventId/BottomMenu';
import Hr from './../../modules/eventId/Hr';
import EventHeader from './../../modules/eventId/EventInformation/EventHeader';
import What from './../../modules/eventId/EventInformation/What';
import Who from './../../modules/eventId/EventInformation/Who';

const EventDetails = ({ event }) => {
  const [specifyStep, setSpecifyStep] = useState(0);

  const parseEvent = (event) => {
    try {
      return JSON.parse(event);
    } catch (error) {
      return null;
    }
  };

  const eventData = parseEvent(event);
  console.log(eventData);

  return (
    <>
      <Navbar />

      <div className="site-width mx-auto">
        <div className="border-2 mt-4 min-h-[100vh]">
          <Header eventData={eventData} />
          <div className="mx-10">
            {specifyStep === 0 && <EventInformation eventData={eventData} />}
            {specifyStep === 1 && <SpecifyAvailability eventData={eventData} />}
            <BottomMenu specifyStep={specifyStep} setSpecifyStep={setSpecifyStep} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query, res }) => {
  await dbConnect();

  // Working CREATE
  // const event = await Event.create({
  //   title: 'Event title',
  //   description: 'Event description',
  //   dates: [new Date()],
  //   location: '',
  //   createdBy: {
  //     name: 'ofek',
  //     email: 'ofek@gmail.com',
  //   },
  // });


  const event = await Event.findById(query.eventId);

  const stringifyEvent = (event) => {
    if (event) {
      return JSON.stringify(event);
    } else {
      return 'EventNotFound';
    }
  };

  const eventData = stringifyEvent(event);

  if (eventData === 'EventNotFound') {
    res.statusCode = 301;
    res.setHeader('location', '/');
    res.end();
    return { props: { event: eventData } };
  }

  return {
    props: {
      event: eventData,
    },
  };
};

export default EventDetails;
