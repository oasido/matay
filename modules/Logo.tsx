import Image from 'next/image';
import Link from 'next/link';
import MatayLogo from './../public/matay-black.svg';

const Logo = () => {
  // add logic to replace this svg with its dark theme version.
  return (
    <Link href="/">
      <div className="my-5 flex justify-center">
        <Image className="hover:cursor-pointer" src={MatayLogo} width={250} height={85} />
      </div>
    </Link>
  );
};

export default Logo;
