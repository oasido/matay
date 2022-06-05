import useLocalStorage from '../../../hooks/useLocalStorage';

  const [submitStatus, setSubmitStatus] = useLocalStorage('submitStatus', null);
  const [eventId, setEventId] = useLocalStorage('eventId', null);

  const handleSubmit = async () => {
    const { values } = form;
    const response = await axios.post('/api/events/create', { type, values });
    if (response.status === 200) {
      setSubmitStatus(200);
      setEventId(response.data.eventId);
      router.push('/event/create/success');
    } else {
      setSubmitStatus(response.status);
      router.push('/event/create/fail');
    }
  };
        <StepsButton
          label={step >= 0 && step < 3 ? 'הבא' : 'סיום'}
          color="default"
          onClick={(e) => handleStep(e, 'next')}
        />

export const getServerSideProps = ({ query, res }) => {
  const { type } = query;

  if (!type.match(/^(food|business|activity|together|remote|party|other)$/)) {
    res.statusCode = 301;
    res.setHeader('location', '/');
    res.end();
    return { props: { data: null } };
  }

  return { props: { data: null } };
};

export default CreateEvent;
