import { TiCancel, TiMinus, TiTick } from 'react-icons/ti';

const DateRow = ({ event }) => {
  const [availability, setAvailabilty] = useState(0);

  const handleAvailabilityClick = (clickedOn) => {
    setAvailabilty(clickedOn);
  };

  return (
    <div className="flex items-center my-5 group">
      <div className="flex-1">
        <h3 className="font-medium">יום ראשון, 25 יוני</h3>
      </div>

      <div
        className={`w-11 h-11 rounded-md ml-2 flex justify-center items-center text-3xl text-white hover:cursor-pointer ${
          availability === 1 ? 'bg-green-500' : 'bg-slate-400'
        }`}
        onClick={() => handleAvailabilityClick(1)}
      >
        <TiTick />
      </div>

      <div
        className={`w-11 h-11 rounded-md ml-2 flex justify-center items-center text-3xl text-white hover:cursor-pointer ${
          availability === 2 ? 'bg-orange-500' : 'bg-slate-400'
        }`}
        onClick={() => handleAvailabilityClick(2)}
      >
        <TiMinus />
      </div>

      <div
        className={`w-11 h-11 rounded-md ml-2 flex justify-center items-center text-3xl text-white hover:cursor-pointer ${
          availability === 0 ? 'bg-red-500' : 'bg-slate-400'
        }`}
        onClick={() => handleAvailabilityClick(0)}
      >
        <TiCancel />
      </div>
    </div>
  );
};

export default DateRow;
