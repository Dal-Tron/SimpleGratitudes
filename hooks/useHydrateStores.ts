import { useStore } from '@/store/store';
import { useEffect, useState } from 'react';

export const useHydrateStores = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const unsubscribe = useStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });

    useStore.persist.rehydrate();

    return () => unsubscribe();
  }, []);

  return hasHydrated;
};
