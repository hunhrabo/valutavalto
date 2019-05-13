import React from "react";

const SelectTo = ({ name, currencies, value, updateToValuta }) => {
  return (
    <div className="form-component form-component-2 flex-30">
      <label htmlFor={name}>Milyen valutára?</label>
      <br />
      <select
        className="inputField"
        name={name}
        value={value}
        onChange={updateToValuta}
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

export default SelectTo;
