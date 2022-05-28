import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import StepsButton from '../../modules/StepsButton';
import WhatComponent from './../../modules/WhatComponent';
import WhenComponent from './../../modules/WhenComponent';
import WhereComponent from './../../modules/WhereComponent';

const CreateEvent = () => {
  const [pageTitle, setPageTitle] = useState('מה תרצו לקבוע?');
  const router = useRouter();
  const type = router.query.type;

  const [step, setStep] = useState(0);
  const [pageTitle, setPageTitle] = useState('מה תרצו לקבוע?');
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');

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

  // TODO: Implement different suggestions based on the type (from useRouter())
  const suggestions = [
    'ארוחה',
    'ארוחת בוקר',
    'ארוחת צהריים',
    'ארוחת ערב',
    'סושי',
    'פיצה',
    'המבורגר',
    'על האש',
    'תה',
    'קפה',
    'סלט',
  ];

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
        return <WhatComponent {...props} />;
      // case 1:
      //   return <WhenComponent {...props} />;
      default:
        break;
    }
  };

  return (
    <>
      <div className="my-10">
        <h1 className="text-center font-bold text-xl">matay</h1>
      </div>
      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl my-5">{pageTitle}</h1>

        <div className="mx-auto w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
          {showComponentBasedOnStep()}
          {/* {step === 0 ? (
            <div>
              <Input
                size="lg"
                classNames={{ input: 'font-medium' }}
                placeholder="כותרת"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
              <div className="flex flex-wrap">
                {suggestions.map((suggestion, i) => {
                  return (
                    <SuggestionButton
                      key={i}
                      label={suggestion}
                      onClick={(e) => setInputTitle(e.target.innerText)}
                    />
                  );
                })}
              </div>
              <Textarea
                size="lg"
                className="mt-5"
                classNames={{ input: 'font-medium' }}
                placeholder="פירוט"
                value={inputDesc}
                onChange={(e) => setInputDesc(e.target.value)}
              />
            </div>
          ) : null} */}
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
