import Post from "@/components/post";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function PostPage(props: Props) {
  const { id } = await props.params;
  const post = posts.find(post => post.id === id);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Post {...post} />
    </div>
  );
}

export default PostPage;
