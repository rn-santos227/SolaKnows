import Image from 'next/image';

import './style.css';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full text-white p-4 flex justify-between items-center bg-black shadow-lg z-50">
      <div className="flex items-center">
        <Image src="/images/logo-title.png" alt="Logo" width={250} height={250} />
      </div>
      <div className="flex space-x-4">

      </div>
    </header>
  );
};

export default Header;