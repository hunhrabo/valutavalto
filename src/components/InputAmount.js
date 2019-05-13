import React from "react";

const InputAmount = ({ name, value, updateAmountField }) => {
  return (
    <div className="form-component form-component-3 flex-30">
      <label htmlFor={name}>Átváltandó összeg?</label>
      <br />
      <input
        className="inputField"
        name={name}
        value={value}
        type="number"
        min="1"
        max="999999999"
        onChange={updateAmountField}
      />
    </div>
  );
};

export default InputAmount;
