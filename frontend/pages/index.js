import { Container, Center, SimpleGrid } from '@mantine/core';

const Home = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-center font-bold text-xl">matay</h1>
      </div>
      <div className="w-5/6 mx-auto text-center">
        <h1 className="font-bold text-2xl">מה תרצו לקבוע?</h1>
        <SimpleGrid cols={5} spacing="lg">
          <div className="grid">
            <span>1</span>
            <span>2</span>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
};

export default Home;
