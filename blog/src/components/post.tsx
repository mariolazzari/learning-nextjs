import Link from "next/link";

type Props = {
  id: string;
  title: string;
  content: string;
  date: string;
};

function Post({ id, title, content, date }: Props) {
  return (
    <div className="border border-gray-200 p-4 my-4 w-96">
      <Link href={`/blog/posts/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p className="text-gray-500">{date}</p>
      <p>{content}</p>
    </div>
  );
}

export default Post;
