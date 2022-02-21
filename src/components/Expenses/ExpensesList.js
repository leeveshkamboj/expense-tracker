import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (!props.expenseArray.length) {
    return <div className="expenses-list__fallback">No expense found!</div>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseArray.map((item) => {
        return (
          <li key={item.id}>
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ExpenseList;
