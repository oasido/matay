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
