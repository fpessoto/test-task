import { Box, Text, VStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function Balance() {
  const accountFunds = {
    ethAmount: 0,
    usdAmound: 0,
  };
  return (
    <LinkBox width="100%">
      <VStack bg="blue.50" spacing={0} align="center" w="100%" rounded="md">
        <Box h="60px" p="2">
          <Text as="b" fontSize="3xl" color="black">
            {accountFunds.ethAmount} ETH
          </Text>
        </Box>

        <Box h="40px">
          <Text color="gray.500"> $ {accountFunds.usdAmound} USD</Text>
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
