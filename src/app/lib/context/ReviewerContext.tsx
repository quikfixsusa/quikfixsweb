'use client';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface homeTypes {
  user: any;
  setUser: Dispatch<any>;
  loadingUser: boolean;
  setLoadingUser: Dispatch<SetStateAction<boolean>>;
}

const ReviewerContext = createContext<homeTypes>({
  user: null,
  setUser: () => {},
  setLoadingUser: () => {},
  loadingUser: true,
});

export function ReviewerWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  return (
    <ReviewerContext.Provider value={{ user, setUser, loadingUser, setLoadingUser }}>
      {children}
    </ReviewerContext.Provider>
  );
}

export function useReviewerContext() {
  return useContext(ReviewerContext);
}
