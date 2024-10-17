import { Dispatch, SetStateAction } from 'react';

export default function TypeButton({
  icon,
  value,
  title,
  type,
  setType,
}: {
  icon: JSX.Element;
  value: string;
  title: string;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}) {
  const handleClick = () => {
    setType(value);
  };
  return (
    <button
      onClick={handleClick}
      className={`flex gap-2 px-6 py-4 ${type === value ? 'border-b-4 border-b-blueQuik text-blueQuik' : 'border-b-0 text-black'}`}
    >
      {icon}
      <p>{title}</p>
    </button>
  );
}
