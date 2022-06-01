import { Title, Box, Text } from '@mantine/core';
import { BsInfoCircle } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

const EventHeader = ({ eventData }) => {
  return (
    <>
      <div className="bg-sky-500 rounded-md mx-2 my-2 pt-20 pb-4 text-center text-white">
        <Title className="drop-shadow-lg">{eventData.title}</Title>
        <Title className="drop-shadow-lg" order={5}>
          אורגן על ידי {eventData.createdBy.name}
        </Title>
        {eventData.location && (
          <div className="flex justify-center items-center text-sm">
            <GoLocation />
            <span className="mr-1">{eventData.location}</span>
          </div>
        )}
      </div>
      <div className="mx-10 mt-10">
        <Box className="bg-sky-500 p-4 rounded-md text-center text-white">
          <h3 className="text-2xl font-medium mb-5">הזמנה</h3>
          <p className="font-medium">
            נא ספק את הזמן המועדף עליך, כדי שהמארגן יוכל לבחור תאריך מתאים בהקדם האפשרי.
          </p>
        </Box>
      </div>
    </>
  );
};

export default EventHeader;
