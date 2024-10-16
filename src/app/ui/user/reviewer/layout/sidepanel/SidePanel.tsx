import HomeIcon from '@/app/components/svg/icons/HomeIcon';
import { useState } from 'react';

import ButtonPanel from './ButtonPanel';
import Header from './Header';

export default function SidePanel() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex min-h-screen flex-col border-r border-r-gray-300">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col gap-2 p-4">
        <ButtonPanel icon={<HomeIcon size={24} />} name="Dashboard" rute="/user/reviewer" />
        <ButtonPanel icon={<HomeIcon size={24} />} name="Dashboard" rute="/user/reviewer/settings" />
        <ButtonPanel icon={<HomeIcon size={24} />} name="Dashboard" rute="/user/reviewer/requests" />
      </div>
    </div>
  );
}
