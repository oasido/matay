import { Input, Button } from '@mantine/core';
import Logo from '../../../modules/Logo';
import { useClipboard } from '@mantine/hooks';
import { useEffect, useState } from 'react';

const Success = () => {
  const URL = process.env.NEXT_PUBLIC_URL;

  const [eventId, setEventId] = useState(null);

  useEffect(() => {
    setEventId(JSON.parse(JSON.parse(localStorage.getItem('eventId'))));
  }, []);

  const clipboard = useClipboard({ timeout: 500 });

  return (
    <>
      <Logo />
      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl mt-5 mb-2">האירוע נוצר בהצלחה!</h1>
        <h3 className="font-medium text-lg mb-5 text-gray-500">העתיקו את הקישור למטה.</h3>

        <div className="mx-auto w-10/12 md:w-9/12 lg:w7/12 xl:w-6/12">
          {eventId !== null ? (
            <>
              <Input
                size="lg"
                classNames={{ input: 'font-medium' }}
                value={`${URL}/event/${eventId.at(-1)}`}
                readOnly
              />
              <Button
                color={clipboard.copied ? 'teal' : 'blue'}
                onClick={() => clipboard.copy(`${URL}/event/${eventId.at(-1)}`)}
                size="lg"
                className="mt-5"
              >
                {clipboard.copied ? 'הועתק' : 'העתק'}
              </Button>
            </>
          ) : (
            <h4 className="font-medium text-lg">
              משום מה אין לנו אפשרות להציג את הקישור שנוצר, האם אתם במצב incognito?
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Success;
