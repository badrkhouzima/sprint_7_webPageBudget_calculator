import React, { useState, useEffect } from "react";
import "./App.css";
import Panel from "./Styled";
import Inputs from "./components/Inputs"

const App = () => {
  const pagePrice = 500;
  const seoPrice = 300;
  const adsPrice = 200;
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [total, setTotal] = useState(0);
  const [numPage, setNumPage] = useState(1);
  const [numLanguages, setNumLanguages] = useState(1);

  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  const handleChange2 = () => {
    setChecked2(!checked2);
  };
  const handleChange3 = () => {
    setChecked3(!checked3);
  };

 

  useEffect(() => {
    if (checked1 === true && checked2 === false && checked3 === false) {
      if (numPage === 1 && numLanguages === 0) {
        setTotal(pagePrice);
        
      } else {
        setTotal(pagePrice + (Number(numPage) + Number(numLanguages) - 1) * 30);
      }
    } else if (checked1 === true && checked2 === true && checked3 === false) {
      setTotal(pagePrice + seoPrice);
    } else if (checked1 === true && checked2 === true && checked3 === true) {
      setTotal(pagePrice + seoPrice + adsPrice);
    } else if (checked1 === false && checked2 === true && checked3 === false) {
      setTotal(seoPrice);
    } else if (checked1 === false && checked2 === false && checked3 === true) {
      setTotal(adsPrice);
    } else if (checked1 === true && checked2 === false && checked3 === true) {
      setTotal(pagePrice + adsPrice);
    } else if (checked1 === false && checked2 === false && checked3 === false) {
      setTotal(0);
    } else if (checked1 === false && checked2 === true && checked3 === true) {
      setTotal(seoPrice + adsPrice);
    }
    localStorage.setItem("dataa", JSON.stringify(total))
  }, [checked1, checked2, checked3, numPage, numLanguages]);

  return (
    <div className="App">
      <p>Check the services you want us to back you up with?</p>
      <input
        type="checkbox"
        checked1={checked1.toString()}
        onChange={handleChange1}
      />
      <label>Web page ({pagePrice}€)</label>
      <br />
      <Panel display={checked1 ? "block" : "none"}>
        <Inputs
          numPage={numPage}
          numLanguages={numLanguages}
          setNumPage={setNumPage}
          setNumLanguages={setNumLanguages}
        />
      </Panel>

      <input
        type="checkbox"
        checked2={checked2.toString()}
        onChange={handleChange2}
      />
      <label>
        Optimize your page SEO with the efective practices ({seoPrice} €)
      </label>
      <br />
      <input
        type="checkbox"
        checked3={checked3.toString()}
        onChange={handleChange3}
      />
      <label>Google Ads campaign({adsPrice} €)</label>
      <br />
      <p>price: {total}€</p>
    </div>
  );
};

export default App;
