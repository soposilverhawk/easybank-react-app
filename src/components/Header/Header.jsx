import React from "react";
import "./Header.css"
import logo from "../../assets/images/logo.svg";
import Navbar from "../Navbar/Navbar";
import InviteButton from "../InviteButton/InviteButton";

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="asybank logo" />
      <Navbar />
      <InviteButton />
    </header>
  );
}

export default Header;
