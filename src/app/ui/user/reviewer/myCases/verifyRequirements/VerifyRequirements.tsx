'use client';
import HeaderSectionDashboard from '@/app/components/HeaderSectionDashboard';
import { useReviewerContext } from '@/app/lib/context/ReviewerContext';
import Link from 'next/link';

import RequirementsSection from './Requirements';

export default function VerifyRequirements({ id }: { id: string }) {
  const { inProgressUsers, loadingInProgress } = useReviewerContext();
  const user = inProgressUsers.find((user) => user.id === id);
  return (
    <div className="flex h-full flex-col items-start overflow-auto overflow-x-hidden">
      <HeaderSectionDashboard
        title="Requirements Verification"
        description="Review and verify the requirements submitted by the user"
      />
      {user && !loadingInProgress && <RequirementsSection user={user} />}
      {!user && !loadingInProgress && (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <Link
            href="/user/reviewer/mycases"
            className="absolute left-4 top-4 rounded-md bg-blueQuik px-6 py-2 text-white"
          >
            Go back
          </Link>
          <h2 className="text-center text-3xl font-bold">No case found</h2>
          <p className="text-center">The case you are looking for does not exist</p>
        </div>
      )}
    </div>
  );
}
