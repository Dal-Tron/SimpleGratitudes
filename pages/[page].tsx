import { MainContent } from '@/components/feature/MainContent/MainContent';
import { useStore } from '@/store/store';
import { createClient } from '@/utils/supabase/component';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  const client = createClient();

  const user = useStore((state) => state.user);
  const profile = useStore((state) => state.profile);
  const { gratitudes, setGratitudes } = useStore((state) => ({
    gratitudes: state.gratitudes,
    setGratitudes: state.setGratitudes,
  }));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!page || gratitudes.length) {
        return;
      }

      setLoading(true);

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
        setGratitudes(data || []);
      } catch (err) {
        notification.open({
          type: 'error',
          message: 'Error fetching gratitudes data',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    page,
    gratitudes.length,
    user?.id,
    profile?.username,
    setGratitudes,
    client,
  ]);

  return <MainContent gratitudes={gratitudes} loading={loading} />;
}
