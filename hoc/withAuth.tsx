import { useRouter } from 'next/router';
import { ComponentType, ReactElement, useEffect, useState } from 'react';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { useStore } from '@/store/store';

export function withAuth<T>(WrappedComponent: ComponentType<T>) {
  return (props: T): ReactElement => {
    const router = useRouter();
    const user = useStore((state) => state.user);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      if (!user) {
        router.push('/');
      } else {
        setIsAuthenticated(true);
      }
    }, [user, router]);

    if (!isAuthenticated) {
      return <SpinLoading />;
    }

    return <WrappedComponent {...props} />;
  };
}
