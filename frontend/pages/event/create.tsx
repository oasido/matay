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


const CreateEvent = () => {
  const [pageTitle, setPageTitle] = useState('מה תרצו לקבוע?');
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
    inputTitle,
    setInputTitle,
    inputDesc,
    setInputDesc,
    handleStep,
    required,
    setRequired,
    dates,
    setDates,
    setPageTitle,
    location,
    setLocation,
  };

  const showComponentBasedOnStep = () => {
    switch (step) {
      case 0:
        console.log(step);
        return <WhatComponent {...props} />;
      case 1:
        console.log(step);
        return <WhenComponent {...props} />;
      case 2:
        console.log(step);
        return <WhereComponent {...props} />;
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
