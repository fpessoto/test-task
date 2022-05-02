import { Transaction } from "../services/TransactionsService";
import { IAppState } from "./background/AppState";

enum Actions {
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_STATE = "SET_STATE",
  SET_BALANCE = "SET_BALANCE",
}

export interface SetTransactionAction {
  type: Actions.SET_TRANSACTIONS;
  payload: Transaction[];
}

export interface SetStateAction {
  type: Actions.SET_STATE;
  payload: Partial<IAppState>;
}

export interface SetBalanceAction {
  type: Actions.SET_BALANCE;
  payload: number;
}

export default Actions;
