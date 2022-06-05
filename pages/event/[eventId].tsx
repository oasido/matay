import dbConnect from '../../lib/dbConnect';
import Event from '../../models/Event';
import Participant from '../../models/Participant';
import Logo from '../../modules/Logo';
import BottomMenu from '../../modules/eventId/BottomMenu';
import Header from '../../modules/eventId/EventInformation/Header';
import SpecifyAvailability from '../../modules/eventId/SpecifyAvailability';
import WhoResponded from '../../modules/eventId/SpecifyAvailability/WhoResponded';
import EventInformation from '../../modules/eventId/EventInformation';
import { useState } from 'react';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import SuccessOrFail from '../../modules/eventId/SpecifyAvailability/SuccessOrFail';

const whoRespondedSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'שם אינו יכול להיות ריק' })
    .max(50, { message: 'השם שלך ארוך מהרגיל!' }),
  email: z.string().email({ message: 'כתובת אימייל לא תקינה' }).trim(),
});

const EventDetails = ({ event, participants }) => {
  const form = useForm({
    schema: zodResolver(whoRespondedSchema),
    initialValues: {
      name: '',
      email: '',
    },
  });

  const [error, setError] = useState({
    name: { show: false, msg: form.errors.name },
    email: { show: false, msg: form.errors.email },
  });

  const [specifyStep, setSpecifyStep] = useState(0);
  const [serverResponse, setServerResponse] = useState(200);

  const parseModel = (model: string) => {
    try {
      return JSON.parse(model);
    } catch (error) {
      return null;
    }
  };

  const eventData = parseModel(event);

  const [availability, setAvailability] = useState(() => {
    const initialArray = [];
    dates.forEach((date) => {
      initialArray.push(0);
    });

    return initialArray;
  });

  const handleFieldSetError = (field: string) => {
    form.errors[field]
      ? setError((prev) => {
          return { ...prev, [field]: { show: true, msg: form.errors[field] } };
        })
      : setError((prev) => {
          return { ...prev, [field]: { show: false, msg: null } };
        });
  };

  const participantsData = parseModel(participants);

  const props = {
    eventData,
    form,
    error,
    setError,
    specifyStep,
    setSpecifyStep,
    availability,
    setAvailability,
    handleFieldSetError,
    serverResponse,
    setServerResponse,
    participantsData,
  };

  return (
    <>
      <Logo />

      <div className="site-width mx-auto">
        <div className="border-2 mt-4 min-h-[100vh]">
          <Header {...props} />
          <div className="mx-10">
            {specifyStep === 0 && <EventInformation {...props} />}
            {specifyStep === 1 && <SpecifyAvailability {...props} />}
            {specifyStep === 2 && <WhoResponded {...props} />}
            {specifyStep === 3 && <SuccessOrFail {...props} />}
            <BottomMenu {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query, res }) => {
  await dbConnect();

  // const eventAA = await Event.create({
  //   type: 'event',
  //   title: 'Event title',
  //   description: 'Event description',
  //   dates: [new Date(), new Date(), new Date()],
  //   location: 'amsterdam',
  //   createdBy: {
  //     name: 'ofek',
  //     email: 'ofek@gmail.com',
  //   },
  // });

  // const participant = await Participant.create({
  //   eventId: query.eventId,
  //   when: [
  //     { availability: 1, date: new Date(), time: '12:00' },
  //     { availability: 1, date: new Date(), time: '14:00' },
  //   ],
  //   createdBy: {
  //     name: 'Guus Meeuwis',
  //     email: 'guus@gmail.com',
  //   },
  // });

  const event = await Event.findById(query.eventId);

  const stringifyModel = (model: object | null) => {
    if (model) {
      return JSON.stringify(model);
    } else {
      return 'NotFound';
    }
  };

  const eventData = stringifyModel(event);

  if (eventData === 'NotFound') {
    res.statusCode = 301;
    res.setHeader('location', '/');
    res.end();
    return { props: { event: eventData } };
  }

  // get all participants

  const participants = await Participant.find({ eventId: query.eventId });

  const participantsData = stringifyModel(participants);

  return {
    props: {
      event: eventData,
      participants: participantsData,
    },
  };
};

export default EventDetails;
