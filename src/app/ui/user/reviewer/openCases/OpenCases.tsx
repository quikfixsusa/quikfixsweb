'use client';
import { useState } from 'react';

import Cases from './cases/Cases';
import HeaderCases from './HeaderCases';
import NavTypeCases from './NavTypeCases';

export default function OpenCasesView() {
  const [type, setType] = useState('requirements');
  return (
    <div className="flex h-full flex-col items-start overflow-auto overflow-x-hidden">
      <HeaderCases />
      <NavTypeCases type={type} setType={setType} />
      <Cases />
    </div>
  );
}
