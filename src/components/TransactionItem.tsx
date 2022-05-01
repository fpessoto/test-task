import defaults from "../utils/constants";

import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function TransactionItem(props: any) {
  const { transaction } = props;

  const ethPrice = defaults.ethPrice;

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
            {transaction.date}
          </Text>
        </VStack>
      </Box>
      <Box w="120px" h="100%">
        <VStack>
          <Text as="b" align="right" color="black">
            {transaction.amount} ETH
          </Text>
          <Text fontSize="xs" color="gray.400" align="right">
            {ethPrice} USD
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
}
