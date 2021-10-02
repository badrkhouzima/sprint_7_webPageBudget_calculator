import React, { Fragment, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import Panel from "../Styled";
import Inputs from "./Inputs";
import BudgetName from "./BudgetName";
import BudgetList from "./ BudgetList";
import {} from "react-icons/go";

function BudgetCalcul() {
  const pagePrice = 500;
  const seoPrice = 300;
  const adsPrice = 200;
  const [total, setTotal] = useLocalStorage("total", 0);
  const [numPage, setNumPage] = useLocalStorage("numPage", 1);
  const [numLanguages, setNumLanguages] = useLocalStorage("numLanguages", 1);

  const [checked1, setChecked1] = useLocalStorage("checked1", false);
  const [checked2, setChecked2] = useLocalStorage("checked2", false);
  const [checked3, setChecked3] = useLocalStorage("checked3", false);

  const [enteredbudgetname, setEnteredbudgetname] = useLocalStorage("enteredbudgetname", "");
  const [enteredclientname, setEnteredclientname] = useLocalStorage("enteredclientname", "");
  
  const [date, setDate] = useLocalStorage("date", "");
  const [finaltotal, setFinaltotal] = useLocalStorage("finaltotal", "");

  const [data, setData] = useLocalStorage("data", {
    budgetname: "",
    clientname: "",
  });


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
    const priceCompliment = Number(numPage) * Number(numLanguages) * 30;
    setTotal(
      (checked1 ? pagePrice + priceCompliment : 0) +
        (checked2 ? seoPrice : 0) +
        (checked3 ? adsPrice : 0)
    );
  }, [checked1, checked2, checked3, numPage, numLanguages, setTotal]);

  return (
    <Fragment>
      <div className="Budget-and-from">
        <div className="budget-cal">
          <p>Check the services you want us to back you up with?</p>
          <input type="checkbox" checked={checked1} onChange={handleChange1} />
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

          <input type="checkbox" checked={checked2} onChange={handleChange2} />
          <label>
            Optimize your page SEO with the efective practices ({seoPrice} €)
          </label>
          <br />
          <input type="checkbox" checked={checked3} onChange={handleChange3} />
          <label>Google Ads campaign({adsPrice} €)</label>
          <br />
          <p>price: {total}€</p>
          {/* hook to gett data between Sibling */}
          <BudgetName
            setEnteredbudgetname={setEnteredbudgetname}
            setEnteredclientname={setEnteredclientname}
            enteredbudgetname={enteredbudgetname}
            enteredclientname={enteredclientname}
            setData={setData}
            setDate={setDate}
            total={total}
            setFinaltotal={setFinaltotal}
          />
        </div>

        <div className="newBudget-submit">
          <BudgetList
            enteredbudgetname={enteredbudgetname}
            enteredclientname={enteredclientname}
            data={data}
            date={date}
            finaltotal={finaltotal}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default BudgetCalcul;
