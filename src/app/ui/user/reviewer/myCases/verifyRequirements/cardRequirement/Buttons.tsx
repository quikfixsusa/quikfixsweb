import { type SingleDoc } from '@/app/lib/definitions';
import { db } from '@/app/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import Swal from 'sweetalert2';

import { CategoryType } from './ContentCard';

interface Props {
  status: 'reception' | 'inReview' | 'edit' | 'approved';
  id: string;
  title: string;
  multiple: boolean;
  link: string | SingleDoc[];
  checked: number;
  categories: CategoryType[];
  setCategories: Dispatch<SetStateAction<CategoryType[]>>;
  unblockCategories: boolean | undefined;
}

export default function Buttons({
  status,
  id,
  title,
  multiple,
  link,
  checked,
  categories,
  setCategories,
  unblockCategories,
}: Props) {
  const verifyRequirement = async () => {
    const userRef = doc(db, 'users', id);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    const user = userDoc.data();

    const requirement = user.requirements.findIndex((req: any) => req.title === title);

    if (multiple) {
      user.requirements[requirement].link[checked].status = 'approved';
      const isAllApproved = user.requirements[requirement].link.every((doc: SingleDoc) => doc.status === 'approved');
      if (isAllApproved) {
        user.requirements[requirement].status = 'approved';
      }
    } else {
      user.requirements[requirement].status = 'approved';
    }

    if (unblockCategories) {
      const categoriesToUnblock = categories.filter((category) => category.checked).map((category) => category.name);
      user.availableCategories = [...user.availableCategories, ...categoriesToUnblock];
    }

    const isInReview = user.requirements.some((req: any) => req.status !== 'approved');

    await updateDoc(userRef, {
      availableCategories: user.availableCategories,
      requirements: user.requirements,
      requirementsInReview: isInReview,
    });
    setCategories(categories.map((category) => ({ ...category, checked: false })));
  };

  const rejectRequirement = async (note: string) => {
    const userRef = doc(db, 'users', id);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    const user = userDoc.data();
    const requirement = user.requirements.findIndex((req: any) => req.title === title);

    if (multiple) {
      user.requirements[requirement].link[checked].status = 'edit';
    }
    user.requirements[requirement].status = 'edit';
    user.requirements[requirement].note = note;

    await updateDoc(userRef, { requirements: user.requirements });
  };

  const handleApprove = async () => {
    await Swal.fire({
      html: `
        <div class="flex flex-col items-start w-full">
          <p class="text-2xl text-start font-bold text-black">Verify this requirement?</p>
          <p class="text text-start text-base text-gray-500">Check the box if you followed the steps and verified the requirement.</p>
          ${
            unblockCategories
              ? `
            <p class="text text-start text-base text-gray-500">(${categories
              .filter((item) => item.checked && item.name)
              .map((item) => item.name)
              .join(', ')})</p>
          `
              : '<div className="display-none" />'
          }
        </div>
      `,
      input: 'checkbox',
      showCloseButton: true,
      inputValue: 0,
      inputPlaceholder: `
        <p class="text text-start text-sm text-gray-600">I have followed the steps and verified this requirement</p>
      `,
      confirmButtonText: `Verify`,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#263AFF',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: async () => {
        try {
          await verifyRequirement();
        } catch (error) {
          Swal.showValidationMessage(`
            Verify failed: ${error}
          `);
        }
      },
      inputValidator: (result) => {
        return !result && 'You must have verified this requirement.';
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `You vefied this requirement`,
          icon: 'success',
        });
      }
    });
  };

  const handleReject = async () => {
    await Swal.fire({
      html: `
        <div class="flex flex-col items-start w-full">
          <p class="text-2xl text-start font-bold text-black">Reject Requirement</p>
          <p class="text text-start text-base text-gray-600">Please provide a note explaining why this requirement cannot be verified.</p>
        </div>
      `,
      input: 'textarea',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#263AFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Rejection',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      inputValidator: (result) => {
        console.log(result);
        if (!result) {
          return 'You need to write a note explaining why this requirement cannot be verified.';
        }
        if (result.length < 20) {
          return 'The note must be at least 20 characters long.';
        }
      },
      preConfirm: async (note) => {
        try {
          await rejectRequirement(note);
        } catch (error) {
          Swal.showValidationMessage(`
            Verify failed: ${error}
          `);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `You rejected this requirement`,
          icon: 'success',
        });
      }
    });
  };
  if (
    (!multiple && status === 'inReview') ||
    (multiple && typeof link !== 'string' && link[checked].status === 'inReview')
  ) {
    return (
      <div className="flex gap-2">
        <button
          onClick={handleApprove}
          disabled={status !== 'inReview' || (unblockCategories && !categories.some((item) => item.checked))}
          className="rounded-md border border-gray-300 bg-green-500 px-3 py-2 font-medium text-white transition-all duration-150 hover:bg-green-600 disabled:cursor-none"
        >
          Approve
        </button>
        <button
          onClick={handleReject}
          disabled={status !== 'inReview' || (unblockCategories && !categories.some((item) => item.checked))}
          className="rounded-md border border-gray-300 bg-red-500 px-3 py-2 font-medium text-white transition-all duration-150 hover:bg-red-600 disabled:cursor-none"
        >
          Reject
        </button>
      </div>
    );
  }
  return null;
}
