'use client';
import HeaderSectionDashboard from '@/app/components/HeaderSectionDashboard';
import { useReviewerContext } from '@/app/lib/context/ReviewerContext';

import RequirementsSection from './Requirements';

export default function VerifyRequirements({ id }: { id: string }) {
  const { inProgressUsers } = useReviewerContext();
  const user = inProgressUsers.find((user) => user.id === id);
  return (
    <div className="flex h-full flex-col items-start overflow-auto overflow-x-hidden">
      <HeaderSectionDashboard
        title="Requirements Verification"
        description="Review and verify the requirements submitted by the user"
      />
      {user && <RequirementsSection user={user} />}
    </div>
  );
}
