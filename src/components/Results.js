import React from "react";
import Explanation from "./Explanation";

const Results = ({ resultObject }) => {
  const { from, fromValue, to, toValue, amount, result } = resultObject;

  if (from) {
    if (from !== to) {
      const resultToShow = result.toFixed(3);
      return (
        <div>
          <p>
            {amount} {from} =
          </p>
          <span className="result-to-show">{resultToShow} </span>
          <span>{to}</span>
          <Explanation
            from={from}
            fromValue={fromValue}
            to={to}
            toValue={toValue}
          />
          <p>Az MNB aktuális középárfolyamadatai alapján.</p>
        </div>
      );
    }
    return (
      <p>
        A kiinduló és célárfolyamok megegyeznek! Kérem, módosítsa keresését.
      </p>
    );
  }
  return null;
};

export default Results;
