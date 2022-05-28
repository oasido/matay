import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Textarea, Collapse } from '@mantine/core';
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
    required,
    setRequired,
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
            onChange={(e) => {
              setInputTitle(e.target.value);
              setRequired(false);
            }}
            invalid={required.title}
          />
          <Collapse className="text-right text-red-600" in={required.title}>
            נא להזין את כותרת האירוע
          </Collapse>

          <div className="flex flex-wrap">
            {currentSuggestions
              ? currentSuggestions.map((suggestion, i) => {
                  return (
                    <SuggestionButton
                      key={i}
                      label={suggestion}
                      onClick={(e) => {
                        setInputTitle(e.target.innerText);
                        setRequired((prev) => {
                          return { ...prev, title: false };
                        });
                      }}
                    />
                  );
                })
              : null}
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
