import What from './What';
import Who from './Who';
import Hr from '../Hr';

const EventInformation = (props) => {
  const { eventData } = props;

  return (
    <>
      <What eventData={eventData} />
      <Hr />
      <Who participants={[1, 1, 1, 1]} />
      <Hr />
    </>
  );
};

export default EventInformation;
