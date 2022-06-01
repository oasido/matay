import { SimpleGrid } from '@mantine/core';

const What = ({ eventData }) => {
  return (
    <>
      <div className="mt-10 mb-5">
        <h2 className="text-2xl font-medium text-right">מה?</h2>
        {eventData.description === '' ? (
          <p className="text-gray-500 text-right">ללא תיאור.</p>
        ) : (
          <p className="text-gray-500 text-right">{eventData.description}</p>
        )}
      </div>
    </>
  );
};

export default What;
