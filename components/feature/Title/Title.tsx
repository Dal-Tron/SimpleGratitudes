import { useRouter } from 'next/router';

export const Title = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div className="font-snippet text-2xl text-white leading-slight flex flex-col items-center cursor-pointer">
      <div className="ml-2">{!page ? 'Simple' : `${page}'s`}</div>
      <div className="ml-2">Gratitudes</div>
    </div>
  );
};
