import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/blog.png"
          alt="An image showing hero"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I&#39;m Mohit</h1>
      <p>
        I blog about web development - especially frameworks like React and Next
      </p>
    </section>
  );
}

export default Hero;
