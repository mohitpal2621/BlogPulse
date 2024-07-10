import classes from "./post-content.module.css";
import MarkDown from "react-markdown";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs3",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <MarkDown>{DUMMY_POST.content}</MarkDown>
    </article>
  );
}

export default PostContent;
