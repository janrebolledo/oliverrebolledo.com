import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/projects/${post.slug}`} passHref>
      <div tabIndex="0" className="hover:cursor-pointer">
        <img
          src={post.frontmatter.cover_image}
          alt=""
          className="aspect-square hover:opacity-50"
        />
      </div>
    </Link>
  );
}
