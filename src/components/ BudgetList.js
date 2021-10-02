import React, { } from "react";

function BudgetList (props) {


  

 
  return (
    <div className="budget-list">
      <div>
        <h3>{props.date}</h3>
        <h3> {props.data.budgetname} </h3>
        <h3> {props.data.clientname}</h3>
        <h3>{props.finaltotal}</h3>
        <p></p>
      </div>
    </div>
  );
}
export default BudgetList;

