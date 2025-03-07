import Post from "@/components/post";
import { getPosts } from "@/data/db";
import { type Post as PostType } from "@/src/types/Post";
import { notFound } from "next/navigation";

async function PostsPage() {
  const posts: PostType[] | undefined = await getPosts();
  if (!posts) {
    return notFound();
  }

  return (
    <>
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
