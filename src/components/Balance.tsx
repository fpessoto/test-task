import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Balance() {
  const accountFunds = {
    ethAmount: 0,
    usdAmound: 0,
  };
  return (
    <VStack bg="blue.50" spacing={0} align="center" p="4" w="100%" rounded="md">
      <Box h="60px" p="2">
        <Text as="b" fontSize="3xl" color="black">
          {accountFunds.ethAmount} ETH
        </Text>
      </Box>

      <Box h="40px">
        <Text color="gray.500"> $ {accountFunds.usdAmound} USD</Text>
      </Box>

      <Box h="40px">
        <Button colorScheme="blue">Send</Button>
      </Box>
    </VStack>
  );
}
