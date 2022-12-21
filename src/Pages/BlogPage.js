import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import MainpageImage from "../assets/img/AstroPathos.svg";
import Data from "../Datas/blogData.json";

const BlogPage = () => {
  const [data] = useState(Data);
  const [windowSize] = useState(window.innerWidth);
  useEffect(() => {
    console.log(windowSize);
  }, [windowSize]);
  return (
    <>
    <div className="blog-bg col-sm-12">
      <div className="blog-header mt-5">BLOG</div>
      <div className="row justify-content-center">
        {data &&
          data.map((item) => (
            <div className="mt-5" key={item.id}>
              <div className="mb-5">
                <Image src={MainpageImage} width='80%' />
              </div>
              <div className="blog-title mt-4">{item.title}</div>
              <div className="blog-text mt-4 mb-4">{item.details}</div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};
export default BlogPage;
