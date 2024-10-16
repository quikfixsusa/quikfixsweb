'use client';
import { useReviewerContext } from '@/app/lib/context/ReviewerContext';
import axios from 'axios';
import { useEffect } from 'react';

export default function Reviewer() {
  const { setUser, setLoadingUser } = useReviewerContext();
  useEffect(() => {
    axios
      .get('/api/getuser', { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setLoadingUser(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <h2 className="text-4xl font-bold">Dashboard</h2>
    </div>
  );
}
