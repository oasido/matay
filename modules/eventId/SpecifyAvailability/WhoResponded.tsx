import { Input, Collapse } from '@mantine/core';
import { MdAlternateEmail } from 'react-icons/md';

const WhoResponded = (props) => {
  const { eventData, form, error, setError } = props;

  return (
    <>
      <div className="my-8 text-center">
        <h2 className="text-2xl font-medium my-5">האם את/ה זמינ/ה?</h2>
        <p>masheo aher</p>
      </div>
      <Input
        size="lg"
        classNames={{ input: 'font-medium' }}
        placeholder="שם"
        {...form.getInputProps('name')}
        onChange={(e) => {
          form.setFieldValue('name', e.target.value);
          setError((prev) => {
            return { ...prev, name: { show: false, msg: null } };
          });
        }}
        invalid={error.name.show}
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

export default WhoResponded;
