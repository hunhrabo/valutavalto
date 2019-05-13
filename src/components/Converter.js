import React, { useState } from "react";
import SelectFrom from "./SelectFrom";
import SelectTo from "./SelectTo";
import InputAmount from "./InputAmount";
import Results from "./Results";

const Converter = ({ currencies }) => {
  const [fromValuta, setFromValuta] = useState("HUF");
  const [toValuta, setToValuta] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState({});

  const updateFromValuta = event => {
    setFromValuta(event.target.value);
  };

  const updateToValuta = event => {
    setToValuta(event.target.value);
  };

  const updateAmountField = event => {
    setAmount(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(amount);
    console.log(currencies);
    const fromValue = currencies.find(
      currency => currency.shortName === fromValuta
    ).value;
    const toValue = currencies.find(currency => currency.shortName === toValuta)
      .value;

    const validAmount = validateAmount(amount);
    const resultOfConversion = (fromValue * validAmount) / toValue;

    const resultObject = {
      from: fromValuta,
      fromValue,
      to: toValuta,
      toValue,
      amount: validAmount,
      result: resultOfConversion
    };
    console.log(resultObject);
    setResult(resultObject);
  };

  const validateAmount = amount => {
    if (typeof amount !== "number") {
      return Number(amount);
    }
    return amount;
  };

  // const calculateConversion = (from, to, amount) => {
  //   const fromValue = currencies.find(currency => currency.shortName === from)
  //     .value;
  //   const toValue = currencies.find(currency => currency.shortName === to)
  //     .value;
  //   const newResult = (fromValue * Number(amount)) / toValue;
  //   return newResult;
  // };

  return (
    <div className="converter-body">
      <h1>MNB Középárfolyamváltó</h1>
      <form className="converter-form" onSubmit={handleSubmit}>
        <SelectFrom
          name="fromValuta"
          currencies={currencies}
          value={fromValuta}
          updateFromValuta={updateFromValuta}
        />

        <SelectTo
          name="toValuta"
          currencies={currencies}
          value={toValuta}
          updateToValuta={updateToValuta}
        />
        <InputAmount
          name="amount"
          value={amount}
          updateAmountField={updateAmountField}
        />
        <div className="form-component form-component-4 submit-btn-container flex-10">
          <button className="inputField" type="submit">
            Mehet
          </button>
        </div>
      </form>
      <Results resultObject={result} />
    </div>
  );
};

export default Converter;
