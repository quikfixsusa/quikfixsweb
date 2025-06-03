import React from 'react';

export default function DeleteAccountData() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-6">
      <div>
        <h1 className="text-center text-2xl font-bold">Delete Account Data</h1>
        <p className="text-center text-gray-500">This page allows you to delete your account data.</p>
      </div>
      <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Delete Account</button>
    </div>
  );
}
