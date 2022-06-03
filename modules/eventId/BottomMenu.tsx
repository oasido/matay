import { Center, Button } from '@mantine/core';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
  specifyStep: number;
  setSpecifyStep: Function;
  availability: number[];
  handleFieldSetError: Function;
  form: any;
}

const BottomMenu = (props: Props) => {
  const { specifyStep, setSpecifyStep, availability, handleFieldSetError, form } = props;

  const router = useRouter();
  const eventId = router.query.eventId;

  const saveAvailability = async (availability: number[]) => {
    handleFieldSetError('name');
    handleFieldSetError('email');

    const { name, email } = form.values;
    const response = await axios.post(`/api/events/send-availability/${eventId}`, {
      availability,
      name,
      email,
    });
  };

  useEffect(() => {
    form.validateField('name');
    form.validateField('email');
  }, [form.values.name, form.values.email]);

  const handleClick = (step: number) => {
    switch (step) {
      case 0:
        setSpecifyStep(1);
        break;
      case 1:
        setSpecifyStep(2);
        break;
      case 2:
        form.validate();
        saveAvailability(availability);

        console.log(form.values);

        Object.keys(form.errors).length === 0 && setSpecifyStep(3);

      default:
        break;
    }
  };

  return (
    <div className="relative">
      <div className="site-width bg-white fixed left-0 right-0 bottom-0 mx-auto">
        <div className="p-5 border-t-2 border-x-2">
          <Center className="gap-2">
            {specifyStep < 3 && (
              <Button size="lg" onClick={() => handleClick(specifyStep)}>
                {specifyStep === 2 ? 'סיום' : 'ציין זמינות'}
              </Button>
            )}
            {(specifyStep === 0 || specifyStep === 3) && (
              <Link href="/">
                <Button size="lg" color="gray">
                  חזרה לאתר
                </Button>
              </Link>
            )}
            {(specifyStep >= 1 || specifyStep > 4) && (
              <Button size="lg" color="gray" onClick={() => setSpecifyStep((prev) => prev - 1)}>
                חזרה
              </Button>
            )}
          </Center>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
