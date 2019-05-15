import React, { useState, useEffect } from "react";
import "./services/serviceModule";
import getData from "./services/serviceModule";
import Converter from "./components/Converter";
import Contact from "./components/Contact";
import "./App.css";

const currencies = {
  HUF: "Magyar Forint",
  EUR: "Euro",
  USD: "Amerikai Dollár",
  GBP: "Angol Font",
  AUD: "Ausztrál Dollár",
  BGN: "Bolgár Leva",
  BRL: "Brazil Reál",
  CZK: "Cseh Korona",
  DKK: "Dán Korona",
  ZAR: "Dél-Afrikai Rand",
  KRW: "Dél-Koreai Won",
  PHP: "Fülöp-Szigeteki Peso",
  HKD: "Hongkongi Dollár",
  HRK: "Horvát Kuna",
  INR: "Indiai Rupía",
  IDR: "Indonéz Rupía",
  ISK: "Izlandi Korona",
  ILS: "Izraeli Sékel",
  JPY: "Japán Yen",
  CAD: "Kanadai Dollár",
  CNY: "Kínai Jüan",
  PLN: "Lengyel Zloty",
  LTL: "Litván Litas",
  MYR: "Malajyiai Ringgit",
  MXN: "Mexikói Peso",
  NOK: "Norvég Korona",
  RUB: "Orosz Rubel",
  RON: "Román Lej",
  CHF: "Svájci Frank",
  SEK: "Svéd Korona",
  RSD: "Szerb Dínár",
  SGD: "Szingapúri Dollár",
  THB: "Thai Baht",
  TRY: "Török Líra",
  UAH: "Ukrán Hryvnia",
  NZD: "Új-Zélandi Dollár"
};

function App() {
  const [allCurrencies, setAllCurrencies] = useState([]);

  useEffect(() => {
    getData().then(response => {
      let allDevizas = [
        {
          name: "Magyar Forint",
          shortName: "HUF",
          value: 1
        }
      ];
      const newDevizas = response.map(item => ({
        name: currencies[item.children[2].textContent],
        shortName:
          item.children[2].textContent.length === 3
            ? item.children[2].textContent
            : null,
        value: Number(item.children[3].textContent)
      }));
      const devizas = allDevizas.concat(newDevizas);
      // console.log(devizas);
      setAllCurrencies(devizas);
    });
  }, []);

  if (allCurrencies.length > 0) {
    return (
      <div className="content-body">
        <Converter currencies={allCurrencies} />
        <Contact />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
