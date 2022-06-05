import { useRouter } from 'next/router';
import { Input, Textarea, Collapse } from '@mantine/core';
import SuggestionButton from './SuggestionButton';
import { useEffect } from 'react';

const WhatComponent = (props) => {
  const { step, error, setError, form } = props;
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
    together: ['ביחד', 'טיול משפחתי', 'אוכל', 'אירוע משפחתי'],
    remote: ['פגישת זום', 'דיסקורד', 'שיחת וידאו', 'שיחה'],
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

  useEffect(() => {
    form.validateField('inputTitle');
    form.validateField('inputDesc');
  }, [form.values.inputTitle, form.values.inputDesc]);

  return (
    <>
      {step === 0 ? (
        <div>
          <Input
            size="lg"
            classNames={{ input: 'font-medium' }}
            placeholder="כותרת"
            {...form.getInputProps('inputTitle')}
            onChange={(e) => {
              form.setFieldValue('inputTitle', e.target.value);
              setError((prev) => {
                return { ...prev, inputTitle: { show: false, msg: null } };
              });
            }}
            invalid={error.inputTitle.show}
          />

          <Collapse className="text-right text-red-600" in={error.inputTitle.show}>
            {form.errors.inputTitle}&nbsp;
          </Collapse>

          <div className="flex flex-wrap">
            {currentSuggestions
              ? currentSuggestions.map((suggestion, i) => {
                  return (
                    <SuggestionButton
                      key={i}
                      label={suggestion}
                      onClick={(e) => {
                        form.setFieldValue('inputTitle', e.target.innerText);
                        setError((prev) => {
                          return { ...prev, inputTitle: { show: false, msg: null } };
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
            {...form.getInputProps('inputDesc')}
            onChange={(e) => {
              form.setFieldValue('inputDesc', e.target.value);
              setError((prev) => {
                return { ...prev, inputDesc: { show: false, msg: null } };
              });
            }}
            error={''}
          />
          <Collapse className="text-right text-red-600" in={error.inputDesc.show}>
            {form.errors.inputDesc}&nbsp;
          </Collapse>
        </div>
      ) : null}
    </>
  );
};

export default WhatComponent;
