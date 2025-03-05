import { createClient } from "@vercel/postgres";

export async function connectDB() {
  try {
    const client = createClient();
    await client.connect();
    if (client) {
      console.log("Connetced to database");
      return client;
    }
  } catch (error) {
    console.error("Postgres connection error:", error);
  }
}
