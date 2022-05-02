import { StackDivider, VStack } from "@chakra-ui/react";
import { Transaction } from "../services/TransactionsService";
import TransactionItem from "./TransactionItem";

interface PropTypes {
  transactions: Array<Transaction>;
  ethPrice: number;
  publicAddress: string;
}

export default function TransactionHistory({
  transactions,
  publicAddress,
  ethPrice,
}: PropTypes) {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={2}
      align="stretch"
    >
      {transactions
        .sort((a, b) => b.id - a.id)
        .map((transaction, index) => {
          const usdValue = ethPrice * transaction.value;
          return (
            <TransactionItem
              ethValue={transaction.value}
              date={transaction.date}
              usdValue={usdValue}
              key={index}
            />
          );
        })}
    </VStack>
  );
}
