import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input type="text" placeholder={placeholder} onChange={handleChange} />
);
