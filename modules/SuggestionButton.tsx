import { Button } from '@mantine/core';

const SuggestionButton = ({ label, onClick }) => {
  return (
    <Button
      size="xs"
      variant="default"
      classNames={{
        root: 'mt-2 ml-2 transition',
        label: 'text-sm text-gray-400 font-medium',
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SuggestionButton;
