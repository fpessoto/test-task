import { Text, Image, Box, Flex, Center } from "@chakra-ui/react";

export default function Account() {
  const account = {
    name: "Account1",
    address: "124214124211421",
  };

  return (
    <Flex w="100%">
      <Center w="60px">
        <Image
          borderRadius="full"
          boxSize="32px"
          src="/apple-touch-icon.png"
          alt="Dan Abramov"
        />
      </Center>

      <Box flex="1">
        <Text as="b" color="black">
          {account.name}
        </Text>
        <Text fontSize="xs" color="gray.400">
          {account.address}
        </Text>
      </Box>
    </Flex>
  );
}
