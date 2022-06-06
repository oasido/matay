import Logo from '../modules/Logo';
import { useState, useEffect } from 'react';
import { Table } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Scheduled = () => {
  const router = useRouter();

  const [eventId, setEventId] = useState(null);

  useEffect(() => {
    setEventId(JSON.parse(JSON.parse(localStorage.getItem('eventId'))));
  }, []);

  return (
    <>
      <Logo />
      <h1 className="font-medium text-2xl text-center my-5">פגישות שקבעתי</h1>

      <div className="w-96 mx-auto">
        {eventId !== null && eventId.length > 0 ? (
          <Table highlightOnHover fontSize="lg">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody className="font-[600]">
              {eventId.reverse().map((event, i) => {
                return (
                  <tr key={i}>
                    <td>{eventId.length - i}</td>
                    <td>
                      <Link href={`/event/${event}`} passHref>
                        <span className="underline cursor-pointer">{event}</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 text-lg">לא נמצאו פגישות</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Scheduled;
