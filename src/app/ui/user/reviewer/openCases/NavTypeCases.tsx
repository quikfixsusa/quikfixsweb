import FileCheckIcon from '@/app/components/svg/icons/FileCheckIcon';
import { Dispatch, SetStateAction } from 'react';

import TypeButton from './TypeButton';

const buttons = [
  {
    icon: <FileCheckIcon size={20} />,
    value: 'requirements',
    title: 'Requirements',
  },
];

export default function NavTypeCases({ type, setType }: { type: string; setType: Dispatch<SetStateAction<string>> }) {
  return (
    <nav className="flex w-full items-center gap-10 border-b border-b-gray-300 px-8">
      {buttons.map((button) => (
        <TypeButton
          key={button.value}
          type={type}
          icon={button.icon}
          value={button.value}
          title={button.title}
          setType={setType}
        />
      ))}
    </nav>
  );
}
