import ScheduleItem from './../modules/ScheduleItem';
import ProgressBar from './../modules/ProgressBar';
import Logo from '../modules/Logo';
import { Alert } from '@mantine/core';
import { AiFillInfoCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [eventId, setEventId] = useState(null);

  useEffect(() => {
    setEventId(JSON.parse(JSON.parse(localStorage.getItem('eventId'))));
  }, []);

  return (
    <>
      <ProgressBar step={-1} type={'start'} />
      <Logo />

      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl my-5">מה תרצו לקבוע?</h1>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <ScheduleItem type="food" label="לאכול" icon="GiKnifeFork" />
          <ScheduleItem type="business" label="פגישה" icon="FcBusiness" />
          <ScheduleItem type="activity" label="פעילות" icon="GiBowlingStrike" />
          <ScheduleItem type="together" label="ביחד" icon="MdOutlineGroups" />
          <ScheduleItem type="remote" label="מרוחק" icon="GiLaptop" />
          <ScheduleItem type="party" label="מסיבה" icon="GiPartyPopper" />
          <ScheduleItem type="other" label="אחר" icon="GoCalendar" />
        </div>
      </div>
      {eventId !== null && eventId.length > 0 && (
        <div className="flex flex-wrap justify-center mt-7">
          <Alert
            className="w-96"
            icon={<AiFillInfoCircle />}
            title="פגישות נוספות"
            color="blue"
            radius="md"
          >
            שמנו לב שכבר הכנת פגישה אחת או יותר -{' '}
            <Link href="/scheduled">
              <span className="font-bold hover:underline cursor-pointer">לצפייה</span>
            </Link>
          </Alert>
        </div>
      )}
    </>
  );
};

export default Home;
