import { Title, Box } from '@mantine/core';
import { GoLocation } from 'react-icons/go';

const Header = (props) => {
  const { eventData } = props;

  return (
    <>
      <div className="bg-gray-700 rounded-md mx-2 my-2 pt-20 pb-4 text-center text-white">
        <h1 className="text-3xl font-bold overflow-hidden">{eventData.title}</h1>
        <h1 className="text-lg font-bold overflow-hidden">
          אורגן על ידי {eventData.createdBy.name}
        </h1>
        {eventData.location && (
          <div className="flex justify-center items-center text-sm">
            <GoLocation />
            <span className="mr-1 overflow-hidden">{eventData.location}</span>
          </div>
        )}
      </div>
      {/* <div className="mx-10 mt-10">
        <Box className="bg-sky-500 p-4 rounded-md text-center text-white">
          <h3 className="text-2xl font-medium mb-5">הזמנה</h3>
          <p className="font-medium">
            נא ספק את הזמן המועדף עליך, כדי שהמארגן יוכל לבחור תאריך מתאים בהקדם האפשרי.
          </p>
        </Box>
      </div> */}
    </>
  );
};

export default Header;
