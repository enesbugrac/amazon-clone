import React from "react";
import "./CarCard.style.css";
import fuel from "../assets/fuel.svg";
import araba from "../assets/araba.svg";
import direksiyon from "../assets/direksiyon.svg";
import ondenaraba from "../assets/ondenaraba.svg";
import vites from "../assets/vites.svg";

function CarCard() {
  return (
    <div className="car-card">
      <img src={araba} />
      <div className="car-card-details">
        <h2>2020 Renault Clio 0.9 Joy</h2>
        <div className="car-card-driver">
          <p>
            <strong>Min. Sürücü Yaşı: </strong>
            <small>21</small>
          </p>
          <p className="car-card-driver-age">
            <strong>Min. Ehliyet Yılı: </strong>
            <small>1</small>
          </p>
        </div>

        <div className="car-card-options">
          <div className="car-card-option fuel">
            <img src={fuel} />
          </div>
          <div className="car-card-option">
            <img src={vites} />
          </div>
          <div className="car-card-option">
            <img src={ondenaraba} />
          </div>
          <div className="car-card-option">
            <img src={direksiyon} />
          </div>
        </div>

        <div className="car-card-price">
          <div className="price">
            <p>Günlük Fiyat</p>
            <strong>178,26T</strong>
          </div>
          <button>Hemen Kirala</button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
