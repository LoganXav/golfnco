import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string(),
    NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY: z.string(),
    NEXT_PUBLIC_PAYSTACK_SECRET_KEY: z.string(),
    DATABASE_ANON_KEY: z.string(),
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    NEXT_PUBLIC_PAYSTACK_SECRET_KEY:
      process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY,
    DATABASE_ANON_KEY: process.env.DATABASE_ANON_KEY,
  },
});
