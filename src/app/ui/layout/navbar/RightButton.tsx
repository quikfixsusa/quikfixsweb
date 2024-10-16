'use client';
import IconMenuBurguer from '@/app/components/svg/IconMenuBurguer';
import { useAppContext } from '@/app/lib/context/HomeContext';
import { useRouter } from 'next/navigation';

export default function RightButton() {
  const { openSidePanel, setOpenSidePanel } = useAppContext();
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push('/auth/login')}
        className="hidden items-center justify-center rounded-lg bg-blueQuik px-16 py-2 font-semibold text-white transition-all duration-150 hover:bg-blue-700 xl:flex"
      >
        Sign In
      </button>
      <button
        onClick={() => {
          setOpenSidePanel(!openSidePanel);
        }}
        className="transition-all: flex duration-150 hover:opacity-60 xl:hidden"
      >
        <IconMenuBurguer size={24} color="black" />
      </button>
    </div>
  );
}
