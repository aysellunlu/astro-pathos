import React, { useState } from "react";
import { Image } from "react-bootstrap";
import MainpageImage from "../assets/img/AstroPathos.svg";
import Data from "../Datas/blogData.json";

const BlogPage = () => {
  const [data] = useState(Data);
  return (
    <div className="blog-bg">
      <div className="blog-header mt-5">BLOG</div>
      <div>
        {data &&
          data.map((item) => (
            <div className="mt-5" key={item.id}>
              <div>
                <Image src={MainpageImage} height={100} />
              </div>
              <div className="blog-title mt-4">{item.title}</div>
              <div className="blog-text mt-4">{item.details}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default BlogPage;
