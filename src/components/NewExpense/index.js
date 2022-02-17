import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./index.css";

function NewExpense(props) {
  const formSubmitHandler = (newExpense) => {
    const newExpenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitHandler={formSubmitHandler} />
    </div>
  );
}

export default NewExpense;
