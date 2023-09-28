import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import format from "date-fns/format";
import compareDesc from "date-fns/compareDesc";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2 className="mb-1">{post.title}</h2>
            </Link>
            <span className="prose-sm">
              posted on {format(new Date(post.date), "dd MMMM yyyy")}
            </span>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
    </div>
  );
}
