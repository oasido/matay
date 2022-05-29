import { MdSchedule } from 'react-icons/md';

const Heading = () => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center font-bold text-xl select-none hover:cursor-pointer">
        <MdSchedule />
        <span className="mr-1">matay</span>
      </div>
    </div>
  );
};

export default Heading;
