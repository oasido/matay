import What from './What';
import Who from './Who';
import When from './When';
import Hr from '../Hr';

const EventInformation = (props) => {
  const { eventData, participantsData } = props;

  return (
    <>
      <What eventData={eventData} />
      <Hr />
      <Who participantsData={participantsData} />
      <Hr />
      <When eventData={eventData} participantsData={participantsData} />
      {/* <Hr /> */}
    </>
  );
};

export default EventInformation;
