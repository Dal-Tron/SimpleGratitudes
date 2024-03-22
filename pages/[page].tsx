import { MainContent } from '@/components/feature/MainContent/MainContent';
import { useStore } from '@/store/store';
import { createClient } from '@/utils/supabase/component';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  const user = useStore((state) => state.user);
  const profile = useStore((state) => state.profile);
  const [localGratitudes, setLocalGratitudes] = useState([]);
  const router = useRouter();
  const { page } = router.query;
  const client = createClient();
  const isInitialFetchDone = useRef(false);

  const fetchData = async () => {
    if (!page || isInitialFetchDone.current) {
      return;
    }

    try {
      let data, error;

      if (user?.id && profile?.username === page) {
        ({ data, error } = await client
          .from('gratitudes')
          .select('*')
          .eq('user_id', user.id));
      } else {
        ({ data, error } = await client
          .from('gratitudes')
          .select('*')
          .eq('username', page)
          .filter('public', 'eq', true));
      }

      if (error) throw error;
      setLocalGratitudes(data || []);
      isInitialFetchDone.current = true;
    } catch (err) {
      notification.open({
        type: 'error',
        message: 'Error fetching gratitudes data',
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return <MainContent gratitudes={localGratitudes} />;
}
