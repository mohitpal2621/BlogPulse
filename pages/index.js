import { Fragment } from "react";
import Hero from "@/components/Home/hero";
import FeaturedPosts from "@/components/Home/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Mohit&#39;s Blog</title>
        <meta
          name="description"
          content="I post about programming & web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
