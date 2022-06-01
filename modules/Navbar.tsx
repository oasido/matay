import Link from 'next/link';
import { MdSchedule } from 'react-icons/md';

const Navbar = () => {
  return (
    <Link href="/">
      <div className="bg-white p-2 drop-shadow-md text-right">
        <div className="inline-flex items-center font-medium text-xl select-none hover:cursor-pointer">
          <MdSchedule />
          <span className="mr-1">matay</span>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
