import {
  createServerClient,
  serialize,
  type CookieOptions,
} from '@supabase/ssr';
import { type GetServerSidePropsContext } from 'next';

export function createClient(context: GetServerSidePropsContext) {
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
    {
      cookies: {
        get(name: string) {
          return context.req.cookies[name];
        },
        set(name: string, value: string, options: CookieOptions) {
          context.res.appendHeader(
            'Set-Cookie',
            serialize(name, value, options),
          );
        },
        remove(name: string, options: CookieOptions) {
          context.res.appendHeader('Set-Cookie', serialize(name, '', options));
        },
      },
    },
  );

  return supabase;
}
