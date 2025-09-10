import React from "react";

export default function GeneralInfo({ general, setGeneral }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setGeneral({ ...general, [name]: value });
  }
  return (
    <div className="form-section">
      <h2>General Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={general.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={general.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={general.phone}
        onChange={handleChange}
      />
    </div>
  );
}
