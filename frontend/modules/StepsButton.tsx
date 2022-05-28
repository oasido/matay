import { Button } from '@mantine/core';

interface Props {
  color: string;
  label: string;
  onClick: any;
}

const StepsButton = ({ color, label, onClick }: Props) => {
  return (
    <Button
      className="mt-5 mr-1"
      classNames={{ inner: 'w-20 text-lg' }}
      onClick={onClick}
      color={color}
    >
      {label}
    </Button>
  );
};

export default StepsButton;
