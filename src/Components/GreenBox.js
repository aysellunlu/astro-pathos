import React, { useState } from "react";
import { Image } from "react-bootstrap";
import AstroMap from "../assets/img/astromap.webp";
import Data from "../Datas/blogData.json";
const GreenBox = () => {
  const [data, setData] = useState(Data);
  return (
    <div>
      {data &&
        data.map((item) => (
            <div className="row">
            <div key={item.id}>
          <div className="green-box col-lg-4 col-sm-12" >
            <div className="orange-box text-left mb-4" >
              <h5 className="box-title">{item.title}</h5>
              <p className="box-text">{item.details}</p>
            </div>
            <div className="col box-image text-center">
              <Image src={AstroMap} height="250" />
            </div>
          </div>
          </div>
          </div>
        ))}
    </div>
  );
};

export default GreenBox;
