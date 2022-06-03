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

const whoRespondedSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'שם אינו יכול להיות ריק' })
    .max(50, { message: 'השם שלך ארוך מהרגיל!' }),
  email: z.string().email({ message: 'כתובת אימייל לא תקינה' }).trim(),
});

const EventDetails = ({ event }) => {
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


  return (
    <>
      <Logo />

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

  return {
    props: {
      event: eventData,
    },
  };
};

export default EventDetails;
