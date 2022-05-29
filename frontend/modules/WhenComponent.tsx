import { Center, Collapse } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useViewportSize } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import 'dayjs/locale/he';

const WhenComponent = (props) => {
  const { error, setError, form } = props;
  const { width } = useViewportSize();

  const handleCalendarSelection = (e) => {
    form.setFieldValue('dates', e);
    setError((prev) => {
      return { ...prev, dates: false };
    });
  };

  useEffect(() => {
    form.validateField('dates');
  }, [form.values.dates]);

  return (
    <>
      <Center>
        <Calendar
          multiple
          value={dates}
          amountOfMonths={width > 665 ? 2 : 1}
          onChange={(e) => handleCalendarSelection(e)}
          locale="he"
        />
      </Center>
      <Center>
        <Collapse className="text-right text-red-600" in={error.dates.show}>
          {form.errors.dates}&nbsp;
        </Collapse>
      </Center>
    </>
  );
};

export default WhenComponent;
