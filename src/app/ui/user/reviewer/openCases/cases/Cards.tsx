import { useReviewerContext } from '@/app/lib/context/ReviewerContext';

import UserCard from './UserCard';
import UserSkeletonCard from './UserSkeletonCard';

export default function Cards() {
  const { user, loadingUser } = useReviewerContext();
  const loadSkeleton = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex w-full flex-wrap gap-4">
      {loadingUser && loadSkeleton.map((item) => <UserSkeletonCard key={item} />)}
      {!loadingUser && user && loadSkeleton.map((item) => <UserCard key={item} user={user} />)}
    </div>
  );
}
