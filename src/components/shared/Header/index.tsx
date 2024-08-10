"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';

import Button from '@/components/ui/Button';

import './style.css';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleLogin = () => {
    // Add your login functionality here
  };

  const handleSignup = () => {
    // Add your signup functionality here
  };

  return (
    <header className={`fixed top-0 left-0 w-full text-white p-2 flex justify-between items-center bg-black ${isHomePage ? 'shadow-light-green' : 'shadow-lg'} z-50`}>
      <div className="flex items-center">
        <Image src="/images/logo-title.png" alt="Logo" width={200} height={200} />
      </div>
      <div className="flex space-x-4 mx-4">
        <Button text="LOGIN" onClick={handleLogin} className="green-border" />
        <Button text="SIGN UP" onClick={handleSignup} className="green-filled" />
      </div>
    </header>
  );
};

export default Header;