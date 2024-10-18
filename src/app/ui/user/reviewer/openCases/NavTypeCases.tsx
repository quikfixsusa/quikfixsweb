import { Dispatch, SetStateAction } from 'react';

import Pagination from './Pagination';

export default function NavTypeCases({
  page,
  count,
  setPage,
}: {
  page: number;
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <nav className="flex w-full items-center justify-end gap-10 border-b border-b-gray-300 px-8 py-3">
      <Pagination page={page} count={count} setPage={setPage} />
    </nav>
  );
}
