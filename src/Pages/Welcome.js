import React from "react";
import { Image } from "react-bootstrap";
import MainpageImage from "../assets/img/Mainpageimage.svg";
import AstroMap from "../assets/img/astromap.webp";

function Welcome() {
  return (
    <div className="body bg container-fluid">
      <div className="main-page-logo-space mb-5">
        <Image src={MainpageImage} width="75%" />
      </div>
      <div className="row mb-5 pb-5">
        <div className="col">
          <div className="first-purple-box text-left">
            <div className="blue-box text-left mb-4">
              <h5 className="box-title">ASTROLOJİ NEDİR ?</h5>
              <p className="box-text">
                Astroloji uzun süre astronomiyle aynı bilim dalı sayılmıştır.
                Fakat astrolojinin kökeni astronomiye göre çok eskilere dayanır,
                yaklaşık 6 bin yıl öncesine. Babil, Mısır, Yunan, Roma, Çin,
                Maya ve Arap uygarlıklarının astroloji ile ilgilendiklerine dair
                pek çok kanıt vardır.
              </p>
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
        <div className="col">
          <div className="first-purple-box text-left">
            <div className="blue-box text-left mb-4">
              <h5 className="box-title">12 BURÇ</h5>
              <p className="box-text">
                Astroloji uzun süre astronomiyle aynı bilim dalı sayılmıştır.
                Fakat astrolojinin kökeni astronomiye göre çok eskilere dayanır,
                yaklaşık 6 bin yıl öncesine. Babil, Mısır, Yunan, Roma, Çin,
                Maya ve Arap uygarlıklarının astroloji ile ilgilendiklerine dair
                pek çok kanıt vardır.
              </p>
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
      <div className=" mb-5 pb-5 row">
        <div className="green-box col">
          <div className="orange-box text-left mb-4">
            <h5 className="box-title">12 BURÇ</h5>
            <p className="box-text">
              Astroloji uzun süre astronomiyle aynı bilim dalı sayılmıştır.
              Fakat astrolojinin kökeni astronomiye göre çok eskilere dayanır,
              yaklaşık 6 bin yıl öncesine. Babil, Mısır, Yunan, Roma, Çin, Maya
              ve Arap uygarlıklarının astroloji ile ilgilendiklerine dair pek
              çok kanıt vardır.
            </p>
          </div>
          <div className="col box-image text-center">
            <Image src={AstroMap} height="250" />
          </div>
        </div>
        <div className="green-box col">
          <div className="orange-box text-left mb-4">
            <h5 className="box-title">12 BURÇ</h5>
            <p className="box-text">
              Astroloji uzun süre astronomiyle aynı bilim dalı sayılmıştır.
              Fakat astrolojinin kökeni astronomiye göre çok eskilere dayanır,
              yaklaşık 6 bin yıl öncesine. Babil, Mısır, Yunan, Roma, Çin, Maya
              ve Arap uygarlıklarının astroloji ile ilgilendiklerine dair pek
              çok kanıt vardır.
            </p>
          </div>
          <div className="col box-image text-center">
            <Image src={AstroMap} height="250" />
          </div>
        </div>
        <div className="green-box col">
          <div className="orange-box text-left mb-4">
            <h5 className="box-title">12 BURÇ</h5>
            <p className="box-text">
              Astroloji uzun süre astronomiyle aynı bilim dalı sayılmıştır.
              Fakat astrolojinin kökeni astronomiye göre çok eskilere dayanır,
              yaklaşık 6 bin yıl öncesine. Babil, Mısır, Yunan, Roma, Çin, Maya
              ve Arap uygarlıklarının astroloji ile ilgilendiklerine dair pek
              çok kanıt vardır.
            </p>
          </div>
          <div className="col box-image text-center">
            <Image src={AstroMap} height="250" />
          </div>
        </div>
      </div>
      <div className="information-box row justify-content-center">
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
      </div>
    </div>
  );
}
export default Welcome;
