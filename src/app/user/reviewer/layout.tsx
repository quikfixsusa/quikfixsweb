'use client';
import SidePanel from '@/app/ui/user/reviewer/layout/sidepanel/SidePanel';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-start">
      <SidePanel />
      {children}
    </main>
  );
};

export default DashboardLayout;
