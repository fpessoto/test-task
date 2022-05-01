import { StackDivider, VStack } from "@chakra-ui/react";
import defaults from "../utils/constants";
import TransactionItem from "./TransactionItem";

export default function TransactionHistory() {
  const transactions = defaults.pastTransactions;

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {transactions.map((transaction, index) => {
        return <TransactionItem transaction={transaction} key={index} />;
      })}
    </VStack>
  );
}
