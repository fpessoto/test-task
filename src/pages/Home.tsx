import { VStack } from "@chakra-ui/react";
import React from "react";
import Account from "../components/Account";
import Balance from "../components/Balance";
import TransactionHistory from "../components/TransactionHistory";
import { useAppState } from "../context/background/AppState";
import defaults from "../utils/constants";

export default function Home() {
  const { state } = useAppState();
  const { account, transactions } = state;

  return (
    <>
      <VStack spacing={4}>
        <Account />
        <Balance ethValue={defaults.ethPrice} />
        <TransactionHistory
          transactions={transactions}
          ethPrice={defaults.ethPrice}
          publicAddress={account.publicAddress}
        />
      </VStack>
    </>
  );
}
