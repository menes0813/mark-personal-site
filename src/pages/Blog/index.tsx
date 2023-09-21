/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import classNames from "classnames";
import { NavContext, NavState } from "providers/NavProvider";

import { blogs } from "data/blogs";

const Blog: React.FC = () => {
  const { navState } = useContext(NavContext);

  return (
    <article
      className={classNames("blog", {
        active: navState === NavState.BLOG,
      })}
      data-page="blog"
    >
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogs.map((blog, i) => (
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src={blog.photo}
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{blog.category}</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">{blog.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{blog.title}</h3>

                  <p className="blog-text">{blog.summary}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
