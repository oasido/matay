import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Textarea } from '@mantine/core';
import SuggestionButton from './../../modules/SuggestionButton';
import StepsButton from '../../modules/StepsButton';
import WhatComponent from './../../modules/WhatComponent';

const CreateEvent = () => {
  const router = useRouter();
  const type = router.query.type;

  const [step, setStep] = useState(0);
  const [pageTitle, setPageTitle] = useState('מה תרצו לקבוע?');
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');

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
    pageTitle,
    setPageTitle,
    inputTitle,
    setInputTitle,
    inputDesc,
    setInputDesc,
    handleStep,
    suggestions,
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

          <StepsButton label="הבא" onClick={() => setStep(step + 1)} color="default" />

          {step > 0 ? (
            <StepsButton label="חזור" onClick={() => setStep(step - 1)} color="gray" />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
