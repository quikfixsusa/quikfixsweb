import React from 'react';

import { CategoryType } from './ContentCard';

interface Props {
  categories: CategoryType[];
  checked: number;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

export default function SelectCategories({ categories, checked, setCategories }: Props) {
  function handleClickCategory(index: number) {
    const newCategories = [...categories];
    newCategories[index].checked = !newCategories[index].checked;
    setCategories(newCategories);
  }
  return (
    <div className="flex flex-col items-end gap-4">
      <div className="flex flex-wrap justify-end gap-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`rounded-xl border border-black ${category.checked ? 'bg-black' : 'bg-white'} px-4 py-1 hover:cursor-pointer`}
            onClick={() => handleClickCategory(index)}
          >
            <p className={`${category.checked ? 'text-white' : 'text-black'}`}>{category.name}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-gray-400">Select the categories that unlock the document {checked + 1}</p>
      </div>
    </div>
  );
}
