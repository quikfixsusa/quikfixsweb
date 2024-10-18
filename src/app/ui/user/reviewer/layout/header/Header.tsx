import BellIcon from '@/app/components/svg/icons/BellIcon';
import LogoutIcon from '@/app/components/svg/icons/LogoutIcon';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import SearchInput from './SearchInput';

export default function Header() {
  const router = useRouter();
  const handleLogout = () => {
    axios
      .get('/api/logout', { withCredentials: true })
      .then(() => {
        router.push('/auth/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <header className="flex w-full items-center justify-between border-b border-b-gray-300 p-4">
      <SearchInput />
      <div className="flex gap-3">
        <button className="rounded-lg border border-yellow-700 bg-yellow-200 p-2 transition-all duration-150 hover:bg-yellowQuik">
          <BellIcon size={20} color="black" />
        </button>
        <button
          onClick={handleLogout}
          className="rounded-lg border border-red-700 bg-red-400 p-2 transition-all duration-150 hover:bg-red-600"
        >
          <LogoutIcon size={20} color="white" />
        </button>
      </div>
    </header>
  );
}
