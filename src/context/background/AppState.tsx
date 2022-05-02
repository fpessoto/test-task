import React, { useEffect, useReducer } from "react";
import AppContext, { initAppState } from "./AppContext";
import AppReducer from "./AppReducer";
import Actions from "../contextActions";
import {
  Transaction,
  TransactionsService,
} from "../../services/TransactionsService";

export interface IAppState {
  transactions: Array<Transaction>;
  account: Account;
}

export interface Account {
  name: string;
  publicAddress: string;
  balance: number;
}

const transactionService = new TransactionsService({
  transactions: initAppState.transactions,
});

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);

  useEffect(() => {
    transactionService.getListOfTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };

  // Set app state
  const setTransactions = (transactions: Transaction[]) => {
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: transactions,
    });
  };

  // Set app state
  const setBalance = (balance: number) => {
    dispatch({
      type: Actions.SET_BALANCE,
      payload: balance,
    });
  };

  // TODO: Complete the addTransaction method
  const addTransaction = (transaction: Transaction) => {
    transactionService.addTransaction(transaction).then(() => {
      setTransactions([...state.transactions, transaction]);
      setBalance(state.account.balance - transaction.value);
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppState = () => React.useContext(AppContext);
export default AppState;
