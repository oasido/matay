import { Center, Button } from '@mantine/core';

const BottomMenu = () => {
  return (
    <div className="relative">
      <div className="site-width bg-white fixed left-0 right-0 bottom-0 mx-auto">
        <div className="p-5 border-t-2 border-x-2">
          <Center>
            <Button size="md">ציין זמינות</Button>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
