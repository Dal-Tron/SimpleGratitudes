import { MainContent } from '@/components/feature/MainContent/MainContent';
import { createClient } from '@/utils/supabase/static-props';

export default function Home({ gratitudes }) {
  return (
    <MainContent gratitudes={gratitudes} loading={false} isFeatured={true} />
  );
}

export async function getStaticProps() {
  const client = createClient();

  const { data, error } = await client
    .from('gratitudes')
    .select(
      `
    id,
    inserted_at,
    gratitude,
    user_id,
    public,
    approved,
    profiles(username)
  `,
    )
    .eq('approved', true)
    .eq('public', true);

  if (error || !data) {
    return {
      props: {
        gratitudes: [],
      },
    };
  }

  return { props: { gratitudes: data } };
}
