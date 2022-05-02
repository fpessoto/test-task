import { createContext } from "react";
import { Transaction } from "../../services/TransactionsService";
import constants from "../../utils/constants";
import { IAppState } from "./AppState";

type ContextType = {
  state: IAppState;
  addTransaction: (transaction: Transaction) => void;
  setState: (state: IAppState) => void;
};

export const initAppState: IAppState = {
  transactions: constants.pastTransactions,
  account: {
    name: constants.accountName,
    publicAddress: constants.publicAddress,
    balance: constants.accountBalance,
  },
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
});

export default AppContext;
