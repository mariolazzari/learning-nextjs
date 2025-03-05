import Post from "@/components/post";
import { posts } from "@/data/posts";

function PostsPage() {
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
