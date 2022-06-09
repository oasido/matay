import Logo from '../../../modules/Logo';
import Image from 'next/image';
import FailImg from '../../../public/fail.png';

const Fail = () => {
  return (
    <>
      <Logo />
      <div className="mx-auto text-center">
        <h1 className="font-medium text-2xl mt-5 mb-2">אוו אוו</h1>
        <h3 className="font-medium text-lg mb-5 text-gray-500">אירעה שגיאה, נסה שוב מאוחר יותר.</h3>

        <div className="mx-auto w-10/12 md:w-9/12 lg:w7/12 xl:w-6/12">
          <Image src={FailImg} width={400} height={400} layout="fixed" alt="failed image" />
        </div>
      </div>
    </>
  );
};

export default Fail;
