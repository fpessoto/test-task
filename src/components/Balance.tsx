import { Box, Text, VStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useAppState } from "../context/background/AppState";
import CurrencyFormat from "react-currency-format";
import CurrencyFormatter from "./shared/CurrencyFormatter";
import { ArrowUpIcon } from "@chakra-ui/icons";

interface PropTypes {
  ethValue: number;
}

export default function Balance({ ethValue }: PropTypes) {
  const { state } = useAppState();
  const { account } = state;

  const accountFunds = {
    ethAmount: account.balance,
    usdAmount: account.balance * ethValue,
  };

  return (
    <LinkBox width="100%">
      <VStack bg="blue.50" spacing={0} align="center" w="100%" rounded="md">
        <Box h="60px" p="2">
          <Text as="b" fontSize="3xl" color="black">
            <CurrencyFormatter
              value={accountFunds.ethAmount}
              thousandSeparator={true}
              decimalScale={2}
              suffix={"ETH"}
              prefix={""}
            />
          </Text>
        </Box>

        <Box h="40px">
          <Text color="gray.500">
            <CurrencyFormatter
              value={accountFunds.usdAmount}
              thousandSeparator={true}
              decimalScale={2}
              suffix={"USD"}
              prefix={"$"}
            />
          </Text>
        </Box>

        <Box>
          <ArrowUpIcon
            bg="blue.400"
            borderRadius="100%"
            p="2"
            color="white"
            w={10}
            h={10}
          />
        </Box>

        <Box h="40px">
          <LinkOverlay as={ReachLink} to="/transfer">
            Send
          </LinkOverlay>
        </Box>
      </VStack>
    </LinkBox>
  );
}
