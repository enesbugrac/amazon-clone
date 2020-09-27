import React from "react";

import search from "../assets/search-icon.svg";
import dashed from "../assets/dashedwave.svg";
import photoIcon from "../assets/photo-icon.svg";
import carIcon from "../assets/car-icon.svg";
import paymentIcon from "../assets/payment-icon.svg";
import keywordIcon from "../assets/keyword-icon.svg";

import "./InfoCard.style.css";

function InfoCard() {
  return (
    <div className="infocard">
      <div className="infocard-top">
        <div className="infocard-top-title">
          <strong>4 Aşamada Araba Kirala</strong>
        </div>
        <div className="infocard-top-border"></div>
        <div className="infocard-top-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>
      <div className="infocard-bottom">
        <div className="infocard-bottom-logos">
          <div className="infocard-bottom-logos-search">
            <img src={search} />
          </div>
          <img src={dashed} />
          <div className="infocard-bottom-logos-others">
            <img src={photoIcon} />
          </div>

          <img src={dashed} />

          <div className="infocard-bottom-logos-others">
            <img src={carIcon} />
          </div>

          <img src={dashed} />

          <div className="infocard-bottom-logos-others">
            <img src={paymentIcon} />
          </div>

          <img src={dashed} />

          <div className="infocard-bottom-logos-others">
            <img src={keywordIcon} />
          </div>
        </div>
      </div>
      <div className="infocard-bottom-info">
        <div className="infocard-bottom-info-text">
          <p>Arama Yap</p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </small>
        </div>
        <div className="infocard-bottom-info-text">
          <p>Arama Yap</p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </small>
        </div>
        <div className="infocard-bottom-info-text">
          <p>Arama Yap</p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </small>
        </div>
        <div className="infocard-bottom-info-text">
          <p>Arama Yap</p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </small>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
