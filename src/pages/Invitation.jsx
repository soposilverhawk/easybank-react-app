import React from "react";
import { useState } from "react";

function Invitation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const handleSubmit = () => {};
  const handleChange = (event) => {
    const eventTargetValue = event.target.value;
    const eventTarget = event.target.id;

    return setFormData({...formData, [eventTarget]: eventTargetValue});
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-input-container">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="First name"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Last name"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          placeholder="Phone Number"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-input-container">
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          value={formData.notes}
          onChange={handleChange}
          cols={100}
          rows={10}
        />
      </div>
    </form>
  );
}

export default Invitation;
