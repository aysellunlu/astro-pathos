import React from "react";
import { Image } from "react-bootstrap";
import MainpageImage from "../assets/img/Mainpageimage.svg";
import PurpleBox from "../Components/PurpleBox";
import GreenBox from "../Components/GreenBox";
import BlueBox from "../Components/BlueBox";

const Welcome = () => {
  return (
    <div className="body bg container-fluid">
      <div className="main-page-logo-space mb-5">
        <Image src={MainpageImage} width="75%" />
      </div>
      <div className="">
        <PurpleBox />
      </div>
      <div className=" mb-5 pb-5">
        <GreenBox />
      </div>
      <div className="information-box">
        <BlueBox />
      </div>
    </div>
  );
};
export default Welcome;
