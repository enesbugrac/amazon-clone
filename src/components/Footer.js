import React from "react";

import facebookLogo from "../assets/facebook.svg";
import twitterLogo from "../assets/twitter.svg";
import instagramLogo from "../assets/instagram.svg";
import whatsappLogo from "../assets/whatsapp.svg";
import youtubeLogo from "../assets/youtube.svg";
import linkedinLogo from "../assets/linkedin.svg";
import mastercardLogo from "../assets/mastercard.svg";
import maestroLogo from "../assets/maestro.svg";
import visaLogo from "../assets/visa.svg";
import companyLogo from "../assets/company.svg";
import applestore from "../assets/applestore.svg";
import googleplay from "../assets/googleplay.svg";

import "./Footer.style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={companyLogo} />
          <small>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. In nec nisi
            nisl. Integer id ex purus. Suspendisse potenti. Cras odio metus,
            vehicula at pharetra ac, mattis at lectus.
          </small>
          <div className="footer-top-left-logos">
            <img src={facebookLogo} />
            <img src={instagramLogo} />
            <img src={twitterLogo} />
            <img src={whatsappLogo} />
            <img src={youtubeLogo} />
            <img src={linkedinLogo} />
          </div>
          <div className="footer-top-left-logos footer-top-left-payment">
            <img src={mastercardLogo} />
            <img src={maestroLogo} />
            <img src={visaLogo} />
          </div>
        </div>
        <div className="footer-top-right">
          <strong>Lorem ipsum</strong>
          <small>Nasıl Üye Olabilirim?</small>
          <small>Nasıl İlan Verebilirim?</small>
          <small>Güvenlik İpuçları</small>
          <small>Araç</small>
          <small>Audi</small>
        </div>
        <div className="footer-top-right">
          <strong>Lorem ipsum</strong>
          <small>Mercedes</small>
          <small>Audi</small>
          <small>Volkswagen</small>
          <small>Fiat</small>
        </div>
        <div className="footer-top-right">
          <strong>Lorem ipsum</strong>
          <small>Gizlilik Politikası</small>
          <small>Kullanıcı Sözleşmesi</small>
          <small>Kullanım Koşulları</small>
          <small>Kişisel Verilerin Korunması</small>
          <small>Veriler</small>
        </div>
        <div className="footer-top-right-mobil">
          <strong>Mobil Application</strong>
          <div className="footer-top-right-mobil-appstores">
            <img src={applestore} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-top">
          <small>SSS</small>
          <small>Yardım Merkezi</small>
          <small>Bize Ulaşın</small>
          <small>Sorumluluk Reddi</small>
          <small>Hizmet Şartları</small>
          <small>Gizlilik Politikası</small>
        </div>
        <div className="footer-bottom-bottom">
          <p>KKTC.COM | All rights reserved 2020</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
