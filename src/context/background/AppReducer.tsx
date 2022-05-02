import Actions, {
  SetBalanceAction,
  SetStateAction,
  SetTransactionAction,
} from "../contextActions";
import { IAppState } from "./AppState";

type AppAction = SetTransactionAction | SetStateAction | SetBalanceAction;

const appReducer = (state: IAppState, action: AppAction): IAppState => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case Actions.SET_BALANCE:
      return {
        ...state,
        account: {
          ...state.account,
          balance: action.payload,
        },
      };
    default:
      return state;
  }
};

export default appReducer;
