import { Text, Image, Box, Flex, Center } from "@chakra-ui/react";
import { useAppState } from "../context/background/AppState";

export default function Account() {
  const { state } = useAppState();
  const { account } = state;

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
          {account.publicAddress}
        </Text>
      </Box>
    </Flex>
  );
}
