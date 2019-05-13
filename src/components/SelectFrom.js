import React from "react";

const SelectFrom = ({ name, currencies, value, updateFromValuta }) => {
  return (
    <div className="form-component form-component-1 flex-30">
      <label htmlFor={name}>Milyen valutáról?</label>
      <br />
      <select
        className="inputField"
        name={name}
        value={value}
        onChange={updateFromValuta}
        tabIndex="0"
      >
        {currencies.map(currency => (
          <option
            key={currency.shortName}
            value={currency.shortName}
            label={`${currency.name} (${currency.shortName})`}
          />
        ))}
      </select>
    </div>
  );
};

export default SelectFrom;
