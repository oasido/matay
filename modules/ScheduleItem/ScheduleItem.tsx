import Link from 'next/link';
import { GiKnifeFork } from 'react-icons/gi';
import { FcBusiness } from 'react-icons/fc';
import { GiBowlingStrike } from 'react-icons/gi';
import { MdOutlineGroups } from 'react-icons/md';
import { GiLaptop } from 'react-icons/gi';
import { GiPartyPopper } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';

interface ScheduleItemProps {
  type: string;
  label: string;
  icon: string;
}

const ScheduleItem = (item: ScheduleItemProps) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GiKnifeFork':
        return <GiKnifeFork />;
      case 'FcBusiness':
        return <FcBusiness />;
      case 'GiBowlingStrike':
        return <GiBowlingStrike />;
      case 'MdOutlineGroups':
        return <MdOutlineGroups />;
      case 'GiLaptop':
        return <GiLaptop />;
      case 'GiPartyPopper':
        return <GiPartyPopper />;
      case 'GoCalendar':
        return <GoCalendar />;
      default:
        break;
    }
  };

  return (
    <>
      <Link href={{ pathname: `/event/create`, query: { type: item.type } }}>
        <div className="grid group hover:cursor-pointer">
          <span className="text-5xl mx-auto border-2 rounded-lg p-6 group-hover:bg-green-500 group-hover:text-white transition">
            {getIcon(item.icon)}
          </span>
          <h3 className="font-medium text-xl mt-1 select-none">{item.label}</h3>
        </div>
      </Link>
    </>
  );
};

export default ScheduleItem;
