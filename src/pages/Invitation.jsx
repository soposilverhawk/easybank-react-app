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
  const [submittedData, setSubmittedData] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
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
            name="lastName"
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
            name="email"
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
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            cols={100}
            rows={10}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className="form-msg">
          Your details have been submitted. We will reach out to you at
          {submittedData.email}
        </div>
      )}
    </>
  );
}

export default Invitation;
