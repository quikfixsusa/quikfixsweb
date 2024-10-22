import Pagination from '@/app/components/Pagination';
import CheckIcon from '@/app/components/svg/icons/CheckIcon';
import InProgressIcon from '@/app/components/svg/icons/InProgressIcon';
import { Dispatch, SetStateAction } from 'react';

import TypeButton from '../openCases/TypeButton';

const buttonsData = [
  { name: 'In Progress', icon: <InProgressIcon size={18} />, value: 'inprogress' },
  { name: 'Verified', icon: <CheckIcon size={18} />, value: 'verified' },
  // Add more buttons as needed
];

export default function NavType({
  page,
  count,
  setPage,
  type,
  setType,
}: {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  page: number;
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <nav className="flex w-full items-center justify-between gap-10 border-b border-b-gray-300 px-8">
      <div className="flex gap-10">
        {buttonsData.map((button, index) => (
          <TypeButton
            key={index}
            type={type}
            setType={setType}
            icon={button.icon}
            value={button.value}
            title={button.name}
          />
        ))}
      </div>
      <Pagination page={page} count={count} setPage={setPage} />
    </nav>
  );
}
