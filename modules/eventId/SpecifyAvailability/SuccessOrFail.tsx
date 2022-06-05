import Image from 'next/image';
import Success from '../../../public/success.png';
import Fail from '../../../public/fail.png';

const SuccessOrFail = (props) => {
  const { serverResponse } = props;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-5">
        <div className="my-auto">
          {serverResponse.status === 200 ? (
            <>
              <h3 className="text-4xl font-bold">נרשמתם בהצלחה!</h3>
              <p className="text-xl font-medium">הכל בסדר, אתם יכולים לסגור את העמוד.</p>
            </>
          ) : (
            <>
              <h3 className="text-4xl font-bold">אוופס!</h3>
              <p className="text-xl font-medium">משהו השתבש!, נסו שוב מאוחר יותר.</p>
            </>
          )}
        </div>
        <div className="flex justify-center">
          {serverResponse.status === 200 ? (
            <Image src={Success} width={280} height={280} layout="fixed" />
          ) : (
            <Image src={Fail} width={280} height={280} layout="fixed" />
          )}
        </div>
      </div>
    </>
  );
};

export default SuccessOrFail;
