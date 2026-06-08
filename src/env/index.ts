import { config } from "dotenv";
import { z } from "zod";

if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test" });
} else {
  config();
}

console.log("ENV DEBUG:", {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_CLIENT: process.env.DATABASE_CLIENT,
  DATABASE_URL: process.env.DATABASE_URL ? "defined" : "undefined",
});

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_CLIENT: z.enum(["sqlite", "pg"]),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
});

export const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  const tree = z.treeifyError(_env.error);

  throw new Error(
    `⚠️ Invalid environment variables! \n ${JSON.stringify(tree, null, 2)}`,
  );
}

export const env = _env.data;