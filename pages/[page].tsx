import { MainContent } from '@/components/feature/MainContent/MainContent';
import { GratitudesService } from '@/services/gratitudes';
import { useStore } from '@/store/store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Page() {
  const user = useStore((state) => state.user);
  const profile = useStore((state) => state.profile);
  const [localGratitudes, setLocalGratitudes] = useState([]);

  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;

        if (user?.id && profile && profile.username === page) {
          // Fetch private data if user is signed in and profile matches the page
          data = await GratitudesService.readPrivateData(user.id);
        } else {
          // Fetch public data otherwise
          data = await GratitudesService.readPublicUserData(String(page));
        }

        setLocalGratitudes(data);
      } catch (error) {
        console.error('Error fetching gratitudes data:', error);
        // Handle error appropriately
      }
    };

    if (page) {
      fetchData();
    }
  }, [page, user, profile]);

  return <MainContent mainPage={false} gratitudes={localGratitudes} />;
}
