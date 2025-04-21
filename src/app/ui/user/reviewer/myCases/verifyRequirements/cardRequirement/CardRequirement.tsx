'use client';
import { Requirement, User } from '@/app/lib/definitions';
import { useState } from 'react';

import ContentCard from './ContentCard';
import Header from './Header';

export default function CardRequirement({ data, id, user }: { data: Requirement; id: string; user: User }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-lg border border-gray-300 p-6">
      <Header title={data.title} description={data.description} open={open} setOpen={setOpen} status={data.status} />
      {open && (
        <ContentCard
          unblockCategories={data.unblockCategories}
          verificationSteps={data.verificationSteps}
          status={data.status}
          link={data.link}
          note={data.note}
          title={data.title}
          multiple={data.multiple}
          id={id}
          user={user}
        />
      )}
    </div>
  );
}
