'use client';
import { ReviewerWrapper } from '@/app/lib/context/ReviewerContext';
import SidePanel from '@/app/ui/user/reviewer/layout/sidepanel/SidePanel';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReviewerWrapper>
      <main className="flex items-start">
        <SidePanel />
        {children}
      </main>
    </ReviewerWrapper>
  );
};

export default DashboardLayout;
