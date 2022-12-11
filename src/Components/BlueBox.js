import React, { useState } from "react";
import Data from "../Datas/contactData.json";

const BlueBox = () => {
  const [data] = useState(Data);
  return (
    <div className="row justify-content-center">
      {data &&
        data.map((item) => (
          <div className="blue-box col-md-6 p-5">
            <div className="first-purple-box">
              <div className="row">
                <div className="box-title mb-5">
                  <h3>
                    <b>İLETİŞİM</b>
                  </h3>
                </div>
                <div className="col-sm-8 col-lg-12">
                  <div className="box-text mb-3">Telefon: {item.phone}</div>
                  <div className="box-text mb-3">Mail: {item.mail}</div>
                  <div className="box-text mb-3">
                    Instagram: {item.instagram}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlueBox;
