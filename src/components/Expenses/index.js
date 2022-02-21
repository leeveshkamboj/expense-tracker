import React, { useState } from "react";

import "./index.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";

const Expenses = (props) => {
  const [expenseFilter, setExpenseFilter] = useState("2020");
  const expenseFilterChangeHandler = (filter) => {
    setExpenseFilter(filter);
  };

  const filteredExpenseArray = props.items.filter((item) => {
    return item.date.getFullYear().toString() === expenseFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        expenseFilter={expenseFilter}
        onExpenseChange={expenseFilterChangeHandler}
      />
      <ExpenseList expenseArray={filteredExpenseArray} />
    </Card>
  );
};

export default Expenses;
