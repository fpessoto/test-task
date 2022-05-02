import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Moment from "react-moment";
import CurrencyFormatter from "./shared/CurrencyFormatter";

interface PropTypes {
  date: Date;
  ethValue: number;
  usdValue: number;
}

export default function TransactionItem({
  date,
  ethValue,
  usdValue,
}: PropTypes) {
  return (
    <HStack spacing="24px" width="100%" h="60px">
      <Box w="80px" h="100%" alignItems="center">
        <Avatar
          size="sm"
          name="eth icon"
          src="/ETH.svg"
          bg="white"
          borderWidth="1px"
          borderColor="gray.100"
        />
      </Box>

      <Box w="100%" h="100%">
        <VStack>
          <Text color="black">Sent Ether</Text>
          <Text fontSize="xs" color="gray.400">
            <Moment format="DD-MM-YYYY HH:mm">{date.toString()}</Moment>
          </Text>
        </VStack>
      </Box>
      <Box w="120px" h="100%">
        <VStack>
          <Text as="b" align="right" color="black">
            <CurrencyFormatter
              value={ethValue}
              suffix={"ETH"}
              decimalScale={1}
              thousandSeparator={true}
              prefix={"-"}
            />
          </Text>
          <Text fontSize="xs" color="gray.400" align="right">
            <CurrencyFormatter
              value={usdValue}
              suffix={"USD"}
              decimalScale={1}
              thousandSeparator={true}
              prefix={"-"}
            />
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
}
