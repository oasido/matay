import DateRow from './DateRows';
import Header from './Header';

const SpecifyAvailability = ({ eventData }) => {
  return (
    <>
      <Header eventData={eventData} />
      <DateRow event={eventData} />
    </>
  );
};

export default SpecifyAvailability;
