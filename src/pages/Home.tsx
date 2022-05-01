import { VStack } from "@chakra-ui/react";
import React from "react";
import Account from "../components/Account";
import Balance from "../components/Balance";
import TransactionHistory from "../components/TransactionHistory";

export default function Home() {
  return (
    <>
      <VStack spacing={4}>
        <Account />
        <Balance />
        <TransactionHistory />
      </VStack>
    </>
  );
}
