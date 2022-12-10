import React from "react";
import { Image } from "react-bootstrap";
import Logo from "../assets/img/mainpage-image.svg";
import AstroMap from '../assets/img/astromap.webp';

function Welcome() {
  return (
    <div className="body bg container-fluid">
      <div className="main-page-logo-space mb-5">
        <Image src={Logo} width="75%" />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="first-purple-box text-left">
            <div className="blue-box text-left mb-4">
              <h5>Astroloji Nedir?</h5>
              <p>
                Astroloji uzun süre astronomiyle aynı bilim dalı sayılmıştır.
                Fakat astrolojinin kökeni astronomiye göre çok eskilere dayanır,
                yaklaşık 6 bin yıl öncesine. Babil, Mısır, Yunan, Roma, Çin,
                Maya ve Arap uygarlıklarının astroloji ile ilgilendiklerine dair
                pek çok kanıt vardır.
              </p>
            </div>
            <div className="box-image">
            <Image src={AstroMap} width="100%" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
