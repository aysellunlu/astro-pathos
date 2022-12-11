import React from "react";
import { Image } from "react-bootstrap";
import MainpageImage from "../assets/img/Mainpageimage.svg";
import PurpleBox from "../Components/PurpleBox";
import GreenBox from "../Components/GreenBox";
import BlueBox from "../Components/BlueBox";

function Welcome() {
  return (
    <div className="body bg container-fluid">
      <div className="main-page-logo-space mb-5">
        <Image src={MainpageImage} width="75%" />
      </div>
      <div className="row mb-5 pb-5">
        <div className="col">
          <PurpleBox />
        </div>
        <div className="col">
          <PurpleBox />
        </div>
      </div>
      <div className=" mb-5 pb-5 row">
        <GreenBox />
        <GreenBox />
        <GreenBox />
      </div>
      <div className="information-box row justify-content-center">
        <BlueBox />
      </div>
    </div>
  );
}
export default Welcome;
