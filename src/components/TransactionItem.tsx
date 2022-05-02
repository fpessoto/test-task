import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";

interface PropTypes {
  // title: string;
  date: Date;
  ethValue: number;
  usdValue: number;
}

export default function TransactionItem({
  date,
  ethValue,
  usdValue,
}: PropTypes) {
  // const { transaction } = props;

  // const ethPrice = defaults.ethPrice;

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
            {date.toString()}
          </Text>
        </VStack>
      </Box>
      <Box w="120px" h="100%">
        <VStack>
          <Text as="b" align="right" color="black">
            {ethValue} ETH
          </Text>
          <Text fontSize="xs" color="gray.400" align="right">
            {usdValue} USD
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
}
