import { knex as setupKnex, Knex } from "knex";
import { env } from "./env";

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === "sqlite"
      ? {
          filename: env.DATABASE_URL,
        }
      : {
          connectionString: env.DATABASE_URL,
          ssl: { rejectUnauthorized: false },
        },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migration",
  },
};

export const knex = setupKnex(config);
