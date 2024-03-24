import { MainContent } from '@/components/feature/MainContent/MainContent';
import { GratitudesService } from '@/services/gratitudes';
import { useStore } from '@/store/store';
import { TGratitudeWithProfile } from '@/types/gratitude';
import { createClient } from '@/utils/supabase/component';
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
      let data: TGratitudeWithProfile[];

      if (user?.id && profile?.username === page) {
        data = await GratitudesService.getPrivateUserGratitudes(user.id);
      } else {
        data = await GratitudesService.getPublicUserGratitudes(String(page));
      }

      setGratitudes(data || []);
      setLoading(false);
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
