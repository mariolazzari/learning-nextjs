import postgres from "postgres";

export const sql = postgres({
  db: "blog",
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
});
