'use client';
import { ReviewerWrapper } from '@/app/lib/context/ReviewerContext';
import Header from '@/app/ui/user/reviewer/layout/header/Header';
import SidePanel from '@/app/ui/user/reviewer/layout/sidepanel/SidePanel';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReviewerWrapper>
      <main className="flex items-start">
        <SidePanel />
        <section className="flex h-screen max-h-screen w-full flex-col">
          <Header />
          {children}
        </section>
      </main>
    </ReviewerWrapper>
  );
};

export default DashboardLayout;
