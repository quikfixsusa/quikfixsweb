'use client';
import { SingleDoc, User } from '@/app/lib/definitions';
import { db } from '@/app/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Buttons from './Buttons';
import SelectCategories from './SelectCategories';

interface Props {
  verificationSteps: string;
  note: string;
  link: string | SingleDoc[];
  status: 'reception' | 'inReview' | 'edit' | 'approved';
  id: string;
  title: string;
  multiple: boolean;
  user: User;
  unblockCategories?: boolean;
}

export interface CategoryType {
  name: string;
  checked: boolean;
}

export default function ContentCard({
  verificationSteps,
  note,
  link,
  status,
  id,
  title,
  multiple,
  user,
  unblockCategories,
}: Props) {
  const [checked, setChecked] = useState(0);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function getCategoriesDB() {
    const categoriesRef = collection(db, 'categories');
    try {
      const categoriesSnap = await getDocs(categoriesRef);
      if (categoriesSnap.empty) {
        console.log('No categories found');
        return;
      }
      const categoriesData = categoriesSnap.docs.map((doc) => doc.data());
      const categoriesList = categoriesData.map((category) => ({
        name: category.name,
        checked: false,
      }));
      setCategories(categoriesList);
    } catch (error) {
      console.log(error);
    }
  }

  function formatText(text: string) {
    return text.split('*').map((line, index) => (
      <p className="text-gray-600" key={index}>
        {line}
        <br />
      </p>
    ));
  }

  function parseStatus(status: string) {
    switch (status) {
      case 'inReview':
        return 'In Review';
      case 'reception':
        return 'Reception';
      case 'approved':
        return 'Approved';
      case 'edit':
        return 'Edit';
      default:
        return 'Reception';
    }
  }

  function getMessageByStatus(status: string) {
    switch (status) {
      case 'inReview':
        return 'This requirement has already been sent by the user, follow the steps and verify it.';
      case 'reception':
        return 'This requirement has not yet been sent by the user.';
      case 'approved':
        return 'This requirement has been approved.';
      case 'edit':
        return 'The user has to send the requirement again.';
      default:
        return 'This requirement is in the reception phase.';
    }
  }

  function getColorStatus(status: string) {
    switch (status) {
      case 'inReview':
        return 'bg-blue-200 text-blue-600';
      case 'reception':
        return 'bg-yellow-200 text-yellow-700';
      case 'approved':
        return 'bg-green-200 text-green-600';
      case 'edit':
        return 'bg-orange-200 text-orange-600';
      default:
        return 'bg-yellow-200 text-yellow-700';
    }
  }

  useEffect(() => {
    if (unblockCategories) {
      getCategoriesDB();
    }
  }, []);
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div>
        <p className="text-gray-600">
          <b>{parseStatus(status)}:</b> {getMessageByStatus(status)}
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-600">Verification Steps:</p>
        <div>{formatText(verificationSteps)}</div>
      </div>
      {note && (
        <div>
          <p className="text-lg font-semibold text-gray-600">Edit Note:</p>
          <p className="text-sm text-red-600">{note}</p>
        </div>
      )}
      <div className="flex justify-between gap-12">
        {!multiple && typeof link === 'string' && (
          <Link className="text-lg font-medium text-blue-600 hover:underline" href={link} target="_blank">
            View Attached Document
          </Link>
        )}
        {multiple && Array.isArray(link) && link.length > 0 && (
          <div className="flex flex-col gap-2">
            {link.map((link, index) => (
              <div key={index} className="flex flex-row gap-3">
                <input type="checkbox" checked={checked === index} onClick={() => setChecked(index)} />
                <Link className="text-lg font-medium text-blue-600 hover:underline" href={link.link} target="_blank">
                  View Attached Document {index + 1}
                </Link>
                <p className={`rounded-full ${getColorStatus(link.status)} px-4 py-1 text-sm font-medium`}>
                  {parseStatus(link.status)}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-1 flex-col items-end gap-6">
          {typeof link !== 'string' && link[checked].status === 'inReview' && unblockCategories && (
            <SelectCategories
              categories={categories.filter((category) => !user.availableCategories.includes(category.name))}
              checked={checked}
              setCategories={setCategories}
            />
          )}
          {typeof link === 'string' && status === 'inReview' && unblockCategories && (
            <SelectCategories
              categories={categories.filter((category) => !user.availableCategories.includes(category.name))}
              checked={checked}
              setCategories={setCategories}
            />
          )}
          <Buttons
            multiple={multiple}
            checked={checked}
            link={link}
            status={status}
            id={id}
            title={title}
            categories={categories}
            setCategories={setCategories}
            unblockCategories={unblockCategories}
          />
        </div>
      </div>
    </div>
  );
}
