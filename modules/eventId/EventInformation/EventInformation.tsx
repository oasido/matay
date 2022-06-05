import What from './What';
import Who from './Who';
import Hr from '../Hr';

const EventInformation = (props) => {
  const { eventData, participantsData } = props;

  return (
    <>
      <What eventData={eventData} />
      <Hr />
      <Who participantsData={participantsData} />
      <Hr />
    </>
  );
};

export default EventInformation;
