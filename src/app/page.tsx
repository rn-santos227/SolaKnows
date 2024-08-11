
import { usePathname } from 'next/navigation';

export default function Index() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <>
      <main className="background flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
  );
}