import { TiCancel, TiMinus, TiTick } from 'react-icons/ti';

const DateRow = ({ date, availability, setAvailability, i }) => {
  const handleAvailabilityClick = (i, clickedOn) => {
    setAvailability((prev) => {
      const newArray = [...prev];
      newArray[i] = clickedOn;
      return newArray;
    });
  };

  return (
    <div className="flex items-center my-5 group">
      <div className="flex-1">
        <h3 className="font-medium">יום ראשון, 25 יוני</h3>
      </div>

      <div
        className={`w-11 h-11 rounded-md ml-2 flex justify-center items-center text-3xl text-white hover:cursor-pointer ${
          availability[i] === 1 ? 'bg-green-500' : 'bg-slate-400'
        }`}
        onClick={() => handleAvailabilityClick(i, 1)}
      >
        <TiTick />
      </div>

      <div
        className={`w-11 h-11 rounded-md ml-2 flex justify-center items-center text-3xl text-white hover:cursor-pointer ${
          availability[i] === 2 ? 'bg-orange-500' : 'bg-slate-400'
        }`}
        onClick={() => handleAvailabilityClick(i, 2)}
      >
        <TiMinus />
      </div>

      <div
        className={`w-11 h-11 rounded-md ml-2 flex justify-center items-center text-3xl text-white hover:cursor-pointer ${
          availability[i] === 0 ? 'bg-red-500' : 'bg-slate-400'
        }`}
        onClick={() => handleAvailabilityClick(i, 0)}
      >
        <TiCancel />
      </div>
    </div>
  );
};

export default DateRow;
