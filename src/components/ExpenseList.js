import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseDetail from "./ExpenseDetail";
const ExpenseList = () => {
  const {expenses} = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((expense)=>(
        <ExpenseDetail 
        id={expense.id} 
        name={expense.name}
        cost={expense.cost} />
      ))}
    </ul>
  )
}

export default ExpenseList