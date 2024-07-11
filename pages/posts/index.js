import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

function Posts(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 2000,
  };
}

export default Posts;
