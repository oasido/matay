import Link from 'next/link';
import ScheduleItem from '../modules/ScheduleItem';

const Home = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-center font-bold text-xl">matay</h1>
      </div>
      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl my-5">מה תרצו לקבוע?</h1>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <ScheduleItem label="לאכול" icon="GiKnifeFork" />
          <ScheduleItem label="פגישה" icon="FcBusiness" />
          <ScheduleItem label="פעילות" icon="GiBowlingStrike" />
          <ScheduleItem label="ביחד" icon="MdOutlineGroups" />
          <ScheduleItem label="מרוחק" icon="GiLaptop" />
          <ScheduleItem label="מסיבה" icon="GiPartyPopper" />
          <ScheduleItem label="אחר" icon="GoCalendar" />
        </div>
      </div>
    </>
  );
};

export default Home;
