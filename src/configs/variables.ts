import 'dotenv/config';
import Z from 'zod';

const environments = Z.object({
  NODE_ENV: Z.enum(['development', 'production', 'test']),
  PORT: Z.number().default(3000),
  DATABASE_URL: Z.string().url(),
  // JWT
  JWT_ACCESS_SECRET: Z.string(),
  JWT_REFRESH_SECRET: Z.string(),
  JWT_ACCESS_EXPIRES_IN: Z.string(),
  JWT_REFRESH_EXPIRES_IN: Z.string(),
});

const validate = environments.safeParse(process.env);

export default validate.data as Z.infer<typeof environments>;
