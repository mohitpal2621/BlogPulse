import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
    console.log(props.posts);
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
