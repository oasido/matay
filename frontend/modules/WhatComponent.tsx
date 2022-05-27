import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Textarea } from '@mantine/core';
import SuggestionButton from './SuggestionButton';
import StepsButton from './StepsButton';

const WhatComponent = (props) => {
  const {
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
  } = props;

  return (
    <>
      {step === 0 ? (
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
      ) : null}
    </>
  );
};

export default WhatComponent;
