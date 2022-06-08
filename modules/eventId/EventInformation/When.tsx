import { parseISO, format } from 'date-fns';
import { he } from 'date-fns/locale';
import { TiCancel, TiMinus, TiTick } from 'react-icons/ti';
import { Progress } from '@mantine/core';

const When = ({ eventData, participantsData }) => {
  const handleStatusIcon = (status) => {
    switch (status) {
      case 0:
        return <TiCancel className="text-red-600 text-2xl" />;
      case 1:
        return <TiTick className="text-green-600 text-2xl" />;
      case 2:
        return <TiMinus className="text-orange-600 text-2xl" />;
    }
  };

  const getProgressValue = (participants, datesIndex) => {
    let currentValue = 0;

    participants.forEach((participant, i) => {
      if (participant.when[datesIndex].availability === 1) {
        currentValue++;
      }
    });
    return (currentValue * 100) / participants.length;
  };

  return (
    <>
      {participantsData.length > 0 && (
        <div className="mb-32">
          <h2 className="text-2xl font-medium text-right">מתי?</h2>
          {eventData.dates.map((date, dateIndex) => {
            const dateFormatted = format(parseISO(date), 'EEEE, dd/MM/yyyy', { locale: he });
            return (
              <div className="mb-5" key={dateIndex}>
                <h2 className="text-lg font-[500]">{dateFormatted}</h2>
                <Progress size="lg" value={getProgressValue(participantsData, dateIndex)} />
                {participantsData.map((participant, participantIndex) => {
                  return (
                    <div className="flex items-center" key={participantIndex}>
                      <span>{handleStatusIcon(participant.when[dateIndex].availability)}</span>
                      <p className="font-[500] text-lg mr-1">{participant.createdBy.name}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default When;
