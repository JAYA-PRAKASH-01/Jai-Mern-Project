import React from "react";
import "./Celebratie.css";
import { assets } from "../../assets/assets";
const Celebratie = () => {
  return (
    <div className="partner">
      <p className="pa">PARTNERS</p>

      <div className="cele">
        <div className="cele-container">
          <img src="/src/assets/jai.jpg" alt="" />
          <hr />
          <p>Mr.JAI</p>

          <b>
            {" "}
            <p>JK HUNGER HUB</p>
          </b>
        </div>

        <div className="cele-container">
          <img src="/src/assets/DEEPAK.jpg" alt="" />
          <hr />
          <p>Mr.DEEPAK</p>
          <b>
            <p>RD GROCERY SHOP</p>
          </b>
        </div>
        <div className="cele-container">
          <img src="/src/assets/XAVIER.jpg" alt="" />
          <hr />
          <p>Mr.XAVIER</p>
          <b>
            {" "}
            <p>DX CAFE</p>
          </b>
        </div>
        <div className="cele-container">
          <img src="/src/assets/ASHWANTH.jpg" alt="" />
          <hr />
          <p>Mr.ASHWANTH</p>
          <b>
            {" "}
            <p>STAR RENTAL</p>
          </b>
        </div>
        <div className="cele-container">
          <img src="/src/assets/HARI.jpg" alt="" />
          <hr />
          <p>Mr.HARIPRASATH</p>
          <b>
            {" "}
            <p>BOOK LAND</p>
          </b>
        </div>
        <div className="cele-container">
          <img src="/src/assets/AADHI.jpg" alt="" />
          <hr />
          <p>Mr.AADHITHIYA</p>
          <b>
            {" "}
            <p>KSA HOSPITAL</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Celebratie;
