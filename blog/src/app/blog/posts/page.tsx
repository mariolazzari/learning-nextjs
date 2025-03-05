import Post from "@/components/post";
import { connectDB } from "@/data/connectDB";
import { posts } from "@/data/posts";

async function PostsPage() {
  const client = await connectDB();

  return (
    <>
      {client && <p>Database connected</p>}

      <h1>Posts</h1>
      <div className="flex justify-around items-center gap-4 flex-wrap">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

export default PostsPage;
