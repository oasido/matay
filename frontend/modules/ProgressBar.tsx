import { BsPatchQuestion } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';
import { FcBusiness } from 'react-icons/fc';
import { GiBowlingStrike } from 'react-icons/gi';
import { MdOutlineGroups } from 'react-icons/md';
import { GiLaptop } from 'react-icons/gi';
import { GiPartyPopper } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';

const ProgressBar = (props) => {
  const { step, type, setStep, form } = props;

  const getProgressBarIconBasedOnSelectionType = (type) => {
    switch (type) {
      case 'start':
        return <BsPatchQuestion />;
      case 'food':
        return <GiKnifeFork />;
      case 'business':
        return <FcBusiness />;
      case 'activity':
        return <GiBowlingStrike />;
      case 'together':
        return <MdOutlineGroups />;
      case 'remote':
        return <GiLaptop />;
      case 'party':
        return <GiPartyPopper />;
      case 'other':
        return <GoCalendar />;
      default:
        return [];
    }
  };

  const handleProgressBarClick = (clickedOn) => {
    clickedOn < step && setStep(clickedOn);
  };

  return (
    <div className="w-full flex justify-between select-none bg-[#f7f7f7] text-[#999] border-b-2">
      <div className="w-1/12 p-1.5 sm:p-2 border-l-2 border-gray-400 border-opacity-20 bg-sky-600">
        <div className="flex justify-center">
          <span className="text-2xl sm:text-4xl text-white">
            {getProgressBarIconBasedOnSelectionType(type)}
          </span>
          &nbsp;
          {/* &nbsp; for the padding to not break if there is no icon */}
        </div>
      </div>
      {/* First step */}
      <div
        className={`grow border-l-2 border-gray-400 border-opacity-20 ${
          step >= 0 && 'bg-sky-600 text-white'
        }`}
        onClick={() => handleProgressBarClick(0)}
      >
        <div className="flex h-full justify-center items-center">
          <h2 className="text-xl font-medium">מה</h2>
        </div>
      </div>

      {/* Second step */}
      <div
        className={`grow border-l-2 border-gray-400 border-opacity-20 ${
          step >= 1 && 'bg-sky-600 text-white'
        }`}
        onClick={() => handleProgressBarClick(1)}
      >
        <div className="flex h-full justify-center items-center">
          <h2 className="text-xl font-medium">מתי</h2>
        </div>
      </div>

      {/* Third step */}
      <div
        className={`grow border-l-2 border-gray-400 border-opacity-20 ${
          step >= 2 && 'bg-sky-600 text-white'
        }`}
        onClick={() => handleProgressBarClick(2)}
      >
        <div className="flex h-full justify-center items-center">
          <h2 className="text-xl font-medium">איפה</h2>
        </div>
      </div>

      {/* Fourth step */}
      <div
        className={`grow ${step >= 3 && 'bg-sky-600 text-white'}`}
        onClick={() => handleProgressBarClick(3)}
      >
        <div className="flex h-full justify-center items-center">
          <h2 className="text-xl font-medium">מי</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
