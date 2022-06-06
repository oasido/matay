import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../../../modules/Logo';
import StepsButton from '../../../modules/StepsButton';
import ProgressBar from '../../../modules/ProgressBar';
import WhatComponent from '../../../modules/WhatComponent';
import WhenComponent from '../../../modules/WhenComponent';
import WhereComponent from '../../../modules/WhereComponent';
import WhoComponent from '../../../modules/WhoComponent';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import axios from 'axios';
import useLocalStorage from '../../../hooks/useLocalStorage';

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

  const [error, setError] = useState({
    inputTitle: { show: false, msg: form.errors.inputTitle },
    inputDesc: { show: false, msg: form.errors.inputDesc },
    dates: { show: false, msg: form.errors.dates },
    name: { show: false, msg: form.errors.name },
    email: { show: false, msg: form.errors.email },
  });

  const handleFieldSetError = (field: string) => {
    form.errors[field]
      ? setError((prev) => {
          return { ...prev, [field]: { show: true, msg: form.errors[field] } };
        })
      : setError((prev) => {
          return { ...prev, [field]: { show: false, msg: null } };
        });
  };

  const handleStep = (e, action) => {
    switch (action) {
      case 'next':
        // 1st step, "what"
        step === 0 && !form.errors.inputTitle && !form.errors.inputDesc && setStep(step + 1);
        handleFieldSetError('inputTitle');
        handleFieldSetError('inputDesc');

        // 2nd step, "when"
        step === 1 && !form.errors.dates && setStep(step + 1);
        step === 1 && handleFieldSetError('dates');

        // 3rd step, "where"
        step === 2 && setStep(step + 1);

        // 4th step, "who"
        handleFieldSetError('name');
        handleFieldSetError('email');
        step === 3 && Object.keys(form.errors).length === 0 && handleSubmit();

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
    step === 0 &&
      setPageTitle({
        title: 'מה תרצו לקבוע?',
        desc: 'בחרו כותרת שכולם ידעו במה מדובר.',
      });
    step === 1 &&
      setPageTitle({
        title: 'על איזה תאריכים חשבתם?',
        desc: 'יש לבחור לפחות תאריך אחד.',
      });
    step === 2 &&
      setPageTitle({
        title: 'איפה?',
        desc: 'אם רלוונטי, רשמו איפה יהיה המפגש.',
      });
    step === 3 &&
      setPageTitle({
        title: 'מי יזם?',
        desc: 'רצוי לכתוב את השם בעברית, כתובת המייל לא תוצג למשתתפים.',
      });
  }, [step]);

  const [submitStatus, setSubmitStatus] = useLocalStorage('submitStatus', null);
  const [eventId, setEventId] = useLocalStorage('eventId', null);

  // console.log(eventId);

  const handleSubmit = async () => {
    const { values } = form;
    const response = await axios.post('/api/events/create', { type, values });
    if (response.status === 200) {
      setSubmitStatus(200);
      setEventId(response.data.eventId);
      router.push('/event/create/success');
    } else {
      setSubmitStatus(response.status);
      router.push('/event/create/fail');
    }
  };

  return (
    <>
      <ProgressBar {...props} />
      <Logo />
      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl mt-5 mb-2">{pageTitle.title}</h1>
        <h3 className="font-medium text-lg mb-5 text-gray-500">{pageTitle.desc}</h3>

        <div className="mx-auto w-10/12 md:w-9/12 lg:w7/12 xl:w-6/12">
          {showComponentBasedOnStep()}
        </div>

        <StepsButton
          label={step >= 0 && step < 3 ? 'הבא' : 'סיום'}
          color="default"
          onClick={(e) => handleStep(e, 'next')}
        />
        {step > 0 ? (
          <StepsButton label="חזרה" color="gray" onClick={(e) => handleStep(e, 'back')} />
        ) : null}
      </div>
    </>
  );
};

export const getServerSideProps = ({ query, res }) => {
  const { type } = query;

  if (!type || !type.match(/^(food|business|activity|together|remote|party|other)$/)) {
    res.statusCode = 301;
    res.setHeader('location', '/');
    res.end();
    return { props: { data: null } };
  }

  return { props: { data: null } };
};

export default CreateEvent;
