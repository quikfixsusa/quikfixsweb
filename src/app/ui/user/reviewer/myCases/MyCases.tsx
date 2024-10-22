'use client';
import HeaderSectionDashboard from '@/app/components/HeaderSectionDashboard';
import { useReviewerContext } from '@/app/lib/context/ReviewerContext';
import { useState } from 'react';

import Cards from './Cards';
import NavType from './NavType';

export default function MyCases() {
  const [type, setType] = useState('inprogress');
  const [page, setPage] = useState(1);
  const { inProgressUsers } = useReviewerContext();

  const getUsersByType = (type: string) => {
    if (type === 'inprogress') {
      return inProgressUsers.filter(
        (user) => user.requirementsInReview === true || user.representativeInReview === true,
      );
    } else if (type === 'verified') {
      return inProgressUsers.filter(
        (user) =>
          (user.requirementsInReview === false || user.requirementsInReview === undefined) &&
          (user.representativeInReview === false || user.representativeInReview === undefined),
      );
    }
    return inProgressUsers;
  };
  return (
    <div className="flex h-full flex-col items-start overflow-auto overflow-x-hidden">
      <HeaderSectionDashboard title="My Cases" description="verify the requirements sent by users" />
      <NavType page={page} count={inProgressUsers.length} setPage={setPage} type={type} setType={setType} />
      <Cards users={getUsersByType(type)} />
    </div>
  );
}
