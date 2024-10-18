'use client';
import { useReviewerContext } from '@/app/lib/context/ReviewerContext';
import { db } from '@/app/lib/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import Cases from './cases/Cases';
import HeaderCases from './HeaderCases';
import NavTypeCases from './NavTypeCases';

export default function OpenCasesView() {
  const { user } = useReviewerContext();
  const [usersData, setUsersData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  function sortByCreatedAt(arr: any[]) {
    return arr.sort((a, b) => {
      const dateA = a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1000000;
      const dateB = b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1000000;

      return dateA - dateB;
    });
  }

  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(query(collection(db, 'users'), where('reviewer', '==', null)), (docs) => {
        console.log(docs);
        if (docs.size > 0) {
          const data = docs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setUsersData(sortByCreatedAt(data));
        } else {
          setUsersData([]);
        }
        setLoading(false);
      });
      return unsub;
    }
  }, [user]);
  return (
    <div className="flex h-full flex-col items-start overflow-auto overflow-x-hidden">
      <HeaderCases />
      <NavTypeCases page={page} setPage={setPage} count={usersData.length} />
      <Cases usersData={usersData.slice((page - 1) * 6, (page - 1) * 6 + 6)} loading={loading} />
    </div>
  );
}
