import DateRow from './DateRows';
import Header from './Header';

const SpecifyAvailability = (props) => {
  const { eventData, availability, setAvailability } = props;

  return (
    <>
      <Header eventData={eventData} />
      {eventData.dates.map((date, i) => {
        return (
          <DateRow
            date={date}
            availability={availability}
            setAvailability={setAvailability}
            i={i}
            key={i}
          />
        );
      })}
    </>
  );
};

export default SpecifyAvailability;
