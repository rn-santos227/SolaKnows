"use client";

import { usePathname } from 'next/navigation';

export default function Index() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full text-white p-2 flex justify-between items-center bg-black ${isHomePage ? 'shadow-light-green' : 'shadow-lg'} z-50`}>
        
      </header>
      <main className="background flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
  );
}