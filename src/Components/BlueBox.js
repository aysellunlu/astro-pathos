import React from "react";
import { Image } from "react-bootstrap";
import AstroMap from "../assets/img/astromap.webp";

function BlueBox() {
  return (
    <div className="blue-box col-6 p-5">
      <div className="first-purple-box">
        <div className="row">
          <div className="box-title mb-5">
            <h3>
              <b>İLETİŞİM</b>
            </h3>
          </div>
          <div className="col">
            <div className="box-text mb-3">Telefon: +90(555) 55 55</div>
            <div className="box-text mb-3">Instagram: astro_pathos</div>
          </div>
          <div className="col">
            <Image src={AstroMap} height="250" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueBox;
