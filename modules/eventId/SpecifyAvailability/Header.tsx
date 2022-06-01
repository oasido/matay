import { TiTick, TiMinus, TiCancel } from 'react-icons/ti';

const Header = ({ eventData }) => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-medium my-5">האם את/ה זמינ/ה?</h2>
      <p>אפשר לבחור מהאפשרויות הבאות:</p>
      <div className="flex justify-center items-center">
        <span className="flex mx-5">
          <TiTick className="text-2xl text-green-600" />
          <p>אגיע</p>
        </span>
        <span className="flex mx-5">
          <TiMinus className="text-2xl text-orange-600" />
          <p>אולי</p>
        </span>
        <span className="flex mx-5">
          <TiCancel className="text-2xl text-red-600" />
          <p>לא אגיע</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
