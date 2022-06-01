import { useRouter } from 'next/router';
import dbConnect from './../../lib/dbConnect';
import Event from './../../models/Event';
import Participant from './../../models/Participant';
import Link from 'next/link';
import Heading from './../../modules/Heading';
import BottomMenu from './../../modules/eventId/BottomMenu';
import Hr from './../../modules/eventId/Hr';
import EventHeader from './../../modules/eventId/EventInformation/EventHeader';
import What from './../../modules/eventId/EventInformation/What';
import Who from './../../modules/eventId/EventInformation/Who';

const EventDetails = ({ event }) => {
  const router = useRouter();
  const { eventId } = router.query;

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
      <div className="my-10">
        <Link href="/">
          <div>
            <Heading />
          </div>
        </Link>
      </div>
      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl mt-5">
          {eventData ? eventData.title : 'פגישה לא נמצאה'}
        </h1>
        <h2 className="text-xl mb-5">
          {eventData ? (
            eventData.description
          ) : (
            <p>שגיאה 404, אנחנו לא יודעים על הפגישה הזאת, בנתיים.</p>
          )}
        </h2>

        <div className="mx-auto w-10/12 md:w-9/12 lg:w7/12 xl:w-6/12">
          {/* // add the component here */}
          <p>{eventId}</p>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
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

  const event = await Event.findById(context.query.eventId);

  const stringifyEvent = (event) => {
    if (event) {
      return JSON.stringify(event);
    } else {
      return 'EventNotFound';
    }
  };

  const eventData = stringifyEvent(event);

  return {
    props: {
      event: eventData,
    },
  };
};

export default EventDetails;
