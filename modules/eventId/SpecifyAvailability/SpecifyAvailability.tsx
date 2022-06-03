import DateRow from './DateRows';
import Header from './Header';

const SpecifyAvailability = (props) => {
  const { eventData, availability, setAvailability, dates } = props;

  return (
    <>
      <Header eventData={eventData} />
      <DateRow event={eventData} />
    </>
  );
};

export default SpecifyAvailability;
