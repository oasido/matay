import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Heading from './../../modules/Heading';
import StepsButton from '../../modules/StepsButton';
import ProgressBar from './../../modules/ProgressBar';
import WhatComponent from './../../modules/WhatComponent';
import WhenComponent from './../../modules/WhenComponent';
import WhereComponent from './../../modules/WhereComponent';
import WhoComponent from '../../modules/WhoComponent';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { Button } from '@mantine/core';

const eventSchema = z.object({
  inputTitle: z
    .string()
    .trim()
    .min(1, { message: 'כותרת אינה יכולה להיות ריקה' })
    .max(50, { message: 'כותרת אינה יכולה להיות יותר מ-50 תווים' }),
  inputDesc: z
    .string()
    .min(0)
    .max(280, { message: 'נשמע סיפור מעניין! אם אפשר לקצר ל-280 תווים זה יהיה נפלא.' })
    .trim(),
  dates: z.array(z.date()).nonempty({ message: 'יש לבחור לפחות תאריך אחד' }),
  location: z.string().min(0).max(50, { message: 'מקסימום 50 תווים' }).trim().nullable(),
  name: z
    .string()
    .trim()
    .min(1, { message: 'שם אינו יכול להיות ריק' })
    .max(50, { message: 'השם שלך ארוך מהרגיל!' }),
  email: z.string().email({ message: 'כתובת אימייל לא תקינה' }).trim(),
});

const CreateEvent = () => {
  const form = useForm({
    schema: zodResolver(eventSchema),
    initialValues: {
      inputTitle: '',
      inputDesc: '',
      dates: [],
      location: '',
      name: '',
      email: '',
    },
  });

  const [pageTitle, setPageTitle] = useState({
    title: 'מה תרצו לקבוע?',
    desc: 'נא לבחור את הפעילות שתרצו לקבוע',
  });
  const router = useRouter();
  const type = router.query.type;

  const [step, setStep] = useState(0);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [required, setRequired] = useState({
    title: false,
    dates: false,
  });
  const [dates, setDates] = useState<Date[]>([]);
  const [location, setLocation] = useState('');

  const handleStep = (e, type) => {
    switch (type) {
      case 'next':
        step === 0 && inputTitle && setStep(step + 1);
        inputTitle === ''
          ? setRequired((prev) => {
              return { ...prev, title: true };
            })
          : setRequired((prev) => {
              return { ...prev, title: false };
            });

        step === 1 && dates.length > 0 && setStep(step + 1);
        step === 1 &&
          dates.length === 0 &&
          setRequired((prev) => {
            return { ...prev, dates: true };
          });

        break;
      case 'back':
        step > 0 && setStep(step - 1);
      default:
        break;
    }
  };

  const props = {
    step,
    setStep,
    handleStep,
    error,
    setError,
    setPageTitle,
    type,
    form,
  };

  const showComponentBasedOnStep = () => {
    switch (step) {
      case 0:
        return <WhatComponent {...props} />;
      case 1:
        return <WhenComponent {...props} />;
      case 2:
        return <WhereComponent {...props} />;
      case 3:
        return <WhoComponent {...props} />;
      default:
        break;
    }
  };

  useEffect(() => {
    step === 0 && setPageTitle('מה תרצו לקבוע?');
    step === 1 && setPageTitle('על איזה תאריכים חשבתם?');
    step === 2 && setPageTitle('איפה?');
  }, [step]);

  return (
    <>
      <div className="my-10">
        <h1 className="text-center font-bold text-xl">matay</h1>
      </div>
      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl my-5">{pageTitle}</h1>

        <div className="mx-auto w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
          {showComponentBasedOnStep()}
        </div>

        <StepsButton label="הבא" color="default" onClick={(e) => handleStep(e, 'next')} />
        {step > 0 ? (
          <StepsButton label="חזור" color="gray" onClick={(e) => handleStep(e, 'back')} />
        ) : null}
      </div>
    </>
  );
};

export default CreateEvent;
