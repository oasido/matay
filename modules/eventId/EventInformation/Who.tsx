import { SimpleGrid } from '@mantine/core';
import { TiTick } from 'react-icons/ti';

const Who = ({ participantsData }) => {
  return (
    <>
      <h2 className="text-2xl font-medium text-right">מי?</h2>
      {participantsData.length > 0 ? (
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 660, cols: 1 }]}>
          {participantsData.map((participant, i) => {
            return (
              <div className="flex items-center my-1" key={i}>
                <div className="w-11 h-11 rounded-md bg-green-500 ml-2 flex justify-center items-center text-3xl text-white">
                  <TiTick />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{participant.createdBy.name}</h3>
                  <p>נרשמ/ה</p>
                </div>
              </div>
            );
          })}
        </SimpleGrid>
      ) : (
        <p className="text-gray-500 text-right mb-5">אף אחד לא נרשם, בנתיים.</p>
      )}
    </>
  );
};

export default Who;
