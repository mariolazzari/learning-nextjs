import postgres from "postgres";

export const sql = postgres({
  db: "blog",
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
});

export async function getPosts() {
  try {
    const data = await sql`select * from posts`;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching posts", error);
  }
}
