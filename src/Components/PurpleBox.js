import React, { useState } from "react";
import { Image } from "react-bootstrap";
import AstroMap from "../assets/img/astromap.webp";
import Data from "../Datas/newsData.json";

const PurpleBox = () => {
  const [data] = useState(Data);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div className="row col-md-12 mb-5 pb-5">
            <div className="col-lg-6 col-sm-12" key={item.id}>
              <div className="first-purple-box text-left">
                <div className="blue-box text-left mb-4">
                  <h5 className="box-title">{item.title}</h5>
                  <p className="box-text">{item.details}</p>
                </div>
                <div className="row">
                  <div className="col box-image text-center">
                    <Image src={AstroMap} height="250" />
                  </div>
                  <div className="col box-image text-center">
                    <Image src={AstroMap} height="250" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PurpleBox;
