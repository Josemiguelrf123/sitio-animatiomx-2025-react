import { blogSeven } from "@/data/newsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleBlogSeven from "./SingleBlogSeven";

const BlogSeven = () => {
  return (
    <section className="blog-seven" style={{paddingTop: '0px'}}>
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
          Descubre las  <span> últimas tendencias </span>
            <br />
            y consejos en nuestro blog
          </h2>
        </div>
        <Row>
          {blogSeven.map((blog) => (
            <SingleBlogSeven blog={blog} key={blog.id} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BlogSeven;
