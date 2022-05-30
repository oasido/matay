import { Input, Collapse } from '@mantine/core';
import { useEffect } from 'react';
import { MdAlternateEmail } from 'react-icons/md';

const WhoComponent = (props) => {
  const { error, setError, form } = props;

  useEffect(() => {
    form.validate();
  }, [form.values.name, form.values.email]);

  return (
    <>
      <Input
        id="name"
        size="lg"
        classNames={{ input: 'font-medium' }}
        variant="default"
        placeholder="שם"
        invalid={error.name.show}
        {...form.getInputProps('name')}
        onChange={(e) => {
          form.setFieldValue('name', e.target.value);
          setError((prev) => {
            return { ...prev, name: { show: false, msg: null } };
          });
        }}
      />
      <Collapse className="text-right text-red-600" in={error.name.show}>
        {form.errors.name}&nbsp;
      </Collapse>

      <Input
        size="lg"
        icon={<MdAlternateEmail />}
        classNames={{ input: 'font-medium mt-5' }}
        variant="default"
        placeholder="כתובת אימייל"
        invalid={error.email.show}
        {...form.getInputProps('email')}
        onChange={(e) => {
          form.setFieldValue('email', e.target.value);
          setError((prev) => {
            return { ...prev, email: { show: false, msg: null } };
          });
        }}
      />
      <Collapse className="text-right text-red-600" in={error.email.show}>
        {form.errors.email}&nbsp;
      </Collapse>
    </>
  );
};

export default WhoComponent;
