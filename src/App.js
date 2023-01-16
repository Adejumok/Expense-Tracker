import Balance from './components/Balance';
import Budget from './components/Budget';
import Expenditure from './components/Expenditure';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './components/ExpenseList.js';
import NewExpenseForm from './components/NewExpenseForm';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
    <div className='container'>
      <h1 className='mt-3'>Expense Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
        <Budget/>
        </div>
        <div className='col-sm'>
          <Balance/>
        </div>
        <div className='col-sm'>
          <Expenditure/>
        </div>
      </div>
       <h3 className='mt-3'>Expenses</h3>
       <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList/>
        </div>
       </div>
      <h3 className='mt-3'>Add Expense</h3>
       <div className='row mt-3'>
        <div className='col-sm'>
          <NewExpenseForm/>
        </div>
       </div>
    </div>
    </AppProvider>
  );

  
};

export default App