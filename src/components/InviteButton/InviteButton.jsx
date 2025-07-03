import React from "react";
import { useNavigate } from "react-router-dom";
import "./InviteButton.css";

function InviteButton() {
  const navigate = useNavigate();
  return <button className="Invite-btn" onClick={() => navigate("/invitation")}>Request Invite</button>;
}

export default InviteButton;
