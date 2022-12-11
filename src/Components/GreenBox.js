import React from "react";
import { Image } from "react-bootstrap";
import AstroMap from "../assets/img/astromap.webp";

function GreenBox() {
  return (
    <div className="green-box col">
      <div className="orange-box text-left mb-4">
        <h5 className="box-title">12 BURÇ</h5>
        <p className="box-text">
          Astroloji uzun süre astronomiyle aynı bilim dalı sayılmıştır. Fakat
          astrolojinin kökeni astronomiye göre çok eskilere dayanır, yaklaşık 6
          bin yıl öncesine. Babil, Mısır, Yunan, Roma, Çin, Maya ve Arap
          uygarlıklarının astroloji ile ilgilendiklerine dair pek çok kanıt
          vardır.
        </p>
      </div>
      <div className="col box-image text-center">
        <Image src={AstroMap} height="250" />
      </div>
    </div>
  );
}

export default GreenBox;
