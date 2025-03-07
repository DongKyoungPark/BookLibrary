import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <div className="flex flex-row items-center gap-4">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
          <p className="text-2xl font-semibold text-light-200">Book Library</p>
        </div>
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <form className="mb-10">
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
