import { useState } from 'react';

import Buttons from './Buttons';
import Header from './Header';

export default function SidePanel() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-full min-h-screen flex-col border-r border-r-gray-300">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Buttons isOpen={isOpen} />
    </div>
  );
}
