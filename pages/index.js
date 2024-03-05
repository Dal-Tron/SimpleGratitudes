import { MainContent } from '@/components/feature/MainContent/MainContent';
import { GratitudesService } from '@/services/gratitudes';

export default function Home({ gratitudes }) {
  return <MainContent gratitudes={gratitudes} />;
}

export async function getServerSideProps() {
  // Fetching data server-side before page is rendered
  const gratitudes = await GratitudesService.readFeaturedGratitudes();

  // Pass the data as props to the page component
  return {
    props: {
      gratitudes,
    },
  };
}
