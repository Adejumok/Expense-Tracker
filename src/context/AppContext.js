import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses:[...state.expenses, action.payload],
            };

        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses:state.expenses.filter(
                    (expense)=> expense.id !== action.payload
                ),
                };
        default:
            return state;
    }
}

const initialState = {
    budget: 15000,
    expenses: [
    {id: 1, name: 'Beverages', cost: 2500},
    {id: 2, name: 'Clothes', cost: 3000},
    {id: 3, name: 'Hair', cost: 3000},
    {id: 4, name: 'Skin Products', cost: 3000},
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
        value={{
            budget: state.budget,
            expenses: state.expenses,
            balance: state.balance,
            dispatch,
        }}
        >
            {props.children}

        </AppContext.Provider>
    );
};