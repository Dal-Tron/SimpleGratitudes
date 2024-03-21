import { MainContent } from '@/components/feature/MainContent/MainContent';
import { createClient } from '@/utils/supabase/static-props';

export default function Home({ gratitudes }) {
  return <MainContent gratitudes={gratitudes} />;
}

export async function getStaticProps() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('gratitudes')
    .select('*')
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
