import React from "react";
import "./Inputs.css";

function BudgetName(props) {
  const enteredBudgetNameHandler = (e) => {
    props.setEnteredbudgetname(() => e.target.value);
    e.preventDefault();
    console.log(e.target.value);
    // props.setEnteredbudgetname("");
  };
  const enteredClientNameHandler = (e) => {
    e.preventDefault();
    props.setEnteredclientname(() => e.target.value);
    console.log(e.target.value);
    //  props.setEnteredclientname("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setData({
      budgetname: `Mr/Ms:${props.enteredbudgetname}`,
      clientname: `Website budget for:${props.enteredclientname}`,
    });
    props.setEnteredbudgetname("");
    props.setEnteredclientname("");

    let today = new Date();
    var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    props.setDate(`time: ${date}`);
    props.setFinaltotal(`Price: ${props.total}`);
   
    
  };
  return (
    <div className="Budget-Name">
      <form onSubmit={submitHandler}>
        <p>Budget Name:</p>
        <input
          type="text"
          placeholder="Budget Name.."
          onChange={enteredBudgetNameHandler}
          value={props.enteredbudgetname}
          // enteredbudgetname={props.setEnteredBudgetName}
        />
        <p>Client Name:</p>
        <input
          type="text"
          placeholder="Client name"
          onChange={enteredClientNameHandler}
          value={props.enteredclientname}
          // enteredclientname={props.setEnteredclientnam}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default BudgetName;
