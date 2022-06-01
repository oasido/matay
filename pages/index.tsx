import Link from 'next/link';
import ScheduleItem from './../modules/ScheduleItem';
import ProgressBar from './../modules/ProgressBar';
import Navbar from '../modules/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <ProgressBar step={-1} type={'start'} />
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
    </>
  );
};

export default Home;
