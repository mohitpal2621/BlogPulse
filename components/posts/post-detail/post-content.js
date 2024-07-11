import classes from "./post-content.module.css";
import MarkDown from "react-markdown";
import PostHeader from "./post-header";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    p: function ParagraphComponent(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
              layout="responsive"
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code: function CodeBlock(code) {
      const { className, children } = code;
      const language = className?.replace(/language-/, "");

      return (
        <SyntaxHighlighter language={language} style={oneDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <MarkDown components={customComponents}>{post.content}</MarkDown>
    </article>
  );
}

export default PostContent;
