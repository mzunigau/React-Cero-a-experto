import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("initialState");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
};
