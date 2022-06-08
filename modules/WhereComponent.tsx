import { Input } from '@mantine/core';

const WhenComponent = (props) => {
  const { form } = props;

  return (
    <>
      <div className="mb-24">
        <Input
          size="lg"
          classNames={{ input: 'font-medium' }}
          placeholder="(אופציונאלי) מיקום"
          {...form.getInputProps('location')}
          onChange={(e) => {
            form.setFieldValue('location', e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default WhenComponent;
