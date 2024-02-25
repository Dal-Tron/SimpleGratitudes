import { useRouter } from 'next/router';

export const Title = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div className="intention">
      <div>{!page ? 'Simple' : `${page}'s`}</div>
      <div>Gratitudes</div>
    </div>
  );
};
