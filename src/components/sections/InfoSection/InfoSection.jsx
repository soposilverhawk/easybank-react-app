import React from "react";
import InviteButton from "../../InviteButton/InviteButton";
import infoHero from "../../../assets/images/image-mockups.png";
import infoDesktopBg from "../../../assets/images/bg-intro-desktop.svg";
import "./InfoSection.css";

function InfoSection() {
  return (
    <div className="info-section-container">
      <div className="info-container">
        <h1>
          Next generation <br />
          digital banking
        </h1>
        <p>
          Take your financial life online. Your Easybank account <br /> will be
          a one-stop-shop for spending, saving, <br /> budgeting, investing, and
          much more
        </p>
        <InviteButton />
      </div>
      <div className="info-hero">
        <div className="info-hero-img">
          <img
            src={infoHero}
            alt="easybank application processes on phone devices"
          />
        </div>
        <div className="info-hero-bg">
          <img src={infoDesktopBg} alt="easybank design pattern" />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
