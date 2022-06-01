import { SimpleGrid } from '@mantine/core';
import { AiOutlineMinus } from 'react-icons/ai';

const Who = ({ participants }) => {
  return (
    <>
      <h2 className="text-2xl font-medium text-right">מי?</h2>
      {participants ? (
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 660, cols: 1 }]}>
          <AiOutlineMinus className="text-5xl" />
          <AiOutlineMinus className="text-5xl" />
          <AiOutlineMinus className="text-5xl" />
          <AiOutlineMinus className="text-5xl" />
        </SimpleGrid>
      ) : (
        <p className="text-gray-500 text-right">אף אחד לא נרשם, בנתיים.</p>
      )}
    </>
  );
};

export default Who;
