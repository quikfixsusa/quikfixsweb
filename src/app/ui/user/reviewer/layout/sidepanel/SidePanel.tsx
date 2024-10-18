import { useReviewerContext } from '@/app/lib/context/ReviewerContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Buttons from './Buttons';
import Header from './Header';

export default function SidePanel() {
  const [isOpen, setIsOpen] = useState(true);
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
    <div className="flex h-full min-h-screen flex-col border-r border-r-gray-300">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Buttons isOpen={isOpen} />
    </div>
  );
}
