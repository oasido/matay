import { Center, Collapse } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useViewportSize } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import 'dayjs/locale/he';

const WhenComponent = (props) => {
  const { dates, setDates, required, setRequired } = props;
  const { width } = useViewportSize();

  const handleCalendarSelection = (e) => {
    setDates(e);
    setRequired((prev) => {
      return { ...prev, dates: false };
    });
  };

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
        <Collapse className="text-right text-red-600" in={required.dates}>
          יש לבחור לפחות תאריך אחד
        </Collapse>
      </Center>
    </>
  );
};

export default WhenComponent;
