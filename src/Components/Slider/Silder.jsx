import React from "react";
import "./Slider.css";
import accenture from "../img/accenture-6.png";
import ibm from "../img/ibm.png";
import intel from "../img/intel.png";
import amazon from "../img/logo-amazon.png";
import samsung from "../img/sam.png";
import vector from "../img/Vector.png";
import micro from "../img/micro.png";

function Silder() {
  return (
    <>
      <div className="text-1">Forge your way to top-tier companies</div>
      <div className="page2">
        <div className="moving-text">
          <div className="con">
            <img src={accenture} alt="Accenture"/>
            <img src={ibm} alt="IBM"/>
            <img src={intel} alt="Intel"/>
            <img src={amazon} alt="Amazon"/>
            <img src={samsung} alt="Samsung"/>
            <img src={vector} alt="Vector"/>
            <img  className="img1"src={micro} alt="Micro"/>
          </div>
          <div className="con">
            <img src={accenture} alt="Accenture"/>
            <img src={ibm} alt="IBM"/>
            <img src={intel} alt="Intel"/>
            <img src={amazon} alt="Amazon"/>
            <img src={samsung} alt="Samsung"/>
            <img src={vector} alt="Vector"/>
            <img className="img1" src={micro} alt="Micro"/>
          </div>
          <div className="con">
            <img src={accenture} alt="Accenture"/>
            <img src={ibm} alt="IBM"/>
            <img src={intel} alt="Intel"/>
            <img src={amazon} alt="Amazon"/>
            <img src={samsung} alt="Samsung"/>
            <img src={vector} alt="Vector"/>
            <img  className="img1"src={micro} alt="Micro"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Silder;
