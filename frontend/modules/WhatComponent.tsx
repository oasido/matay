import { useRouter } from 'next/router';
import { Input, Textarea, Collapse } from '@mantine/core';
import SuggestionButton from './SuggestionButton';
import { useEffect } from 'react';

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
  const router = useRouter();
  const type = router.query.type;

  const suggestions = {
    food: [
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
    ],
    business: ['פגישה', 'התייעצות', 'אסיפה', 'פגישת צוות', 'הערכה', 'פרויקט'],
    activity: ['פעילות', 'סרט', 'הופעה', 'ספורט', 'באולינג', 'אסקייפרום', 'קונצרט'],
    together: ['ביחד', 'טיול משפחתי', 'אוכל', 'אירוע משפחתי', 'דייט'],
    remote: ['פגישת זום', 'דיסקורד', 'שיחת וידאו', 'שיחת פלאפון'],
    party: ['מסיבה', 'יום הולדת', 'מסיבת הפתעה'],
    other: ['אחר', 'מפגש'],
  };

  const getSuggestions = (type) => {
    switch (type) {
      case 'food':
        return suggestions.food;
      case 'business':
        return suggestions.business;
      case 'activity':
        return suggestions.activity;
      case 'together':
        return suggestions.together;
      case 'remote':
        return suggestions.remote;
      case 'party':
        return suggestions.party;
      case 'other':
        return suggestions.other;
      default:
        return [];
    }
  };
  const currentSuggestions = getSuggestions(type);

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
