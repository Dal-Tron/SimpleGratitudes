import path from 'path';
module.exports = (phase, { defaultConfig }) => {
  let SUPABASE_URL, SUPABASE_SERVICE_KEY;

  switch (process.env.ENV) {
    case 'development':
      SUPABASE_URL = process.env.DEVELOPMENT_SUPABASE_URL;
      SUPABASE_SERVICE_KEY = process.env.DEVELOPMENT_SUPABASE_SERVICE_KEY;
      break;
    case 'staging':
      SUPABASE_URL = process.env.STAGING_SUPABASE_URL;
      SUPABASE_SERVICE_KEY = process.env.STAGING_SUPABASE_SERVICE_KEY;
      break;
    case 'production':
      SUPABASE_URL = process.env.PRODUCTION_SUPABASE_URL;
      SUPABASE_SERVICE_KEY = process.env.PRODUCTION_SUPABASE_SERVICE_KEY;
      break;
    default:
      SUPABASE_URL = process.env.DEVELOPMENT_SUPABASE_URL;
      SUPABASE_SERVICE_KEY = process.env.DEVELOPMENT_SUPABASE_SERVICE_KEY;
      break;
  }

  return {
    ...defaultConfig,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
      SUPABASE_URL,
      SUPABASE_SERVICE_KEY,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hedciaofaszacfhqwvky.supabase.co',
          port: '',
        },
      ],
    },
  };
};
