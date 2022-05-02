import {
  Box,
  Center,
  Heading,
  Image,
  VStack,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  let navigate = useNavigate();

  return (
    <VStack alignItems="center" height="100%">
      <Center h="100%">
        <VStack>
          <Box>
            <Image
              borderRadius="full"
              boxSize="100px"
              src="/success.png"
              alt="success"
            />
          </Box>
          <Box>
            <Heading as="h1" size="md" w="100%" textAlign="center">
              Success.
            </Heading>
            <Text fontSize="sm" color="gray.400" w="100%" textAlign="center">
              You've successfuly sent your funds
            </Text>
          </Box>
          <Box>
            <Link color="blue.400" href="https://etherscan.io/" isExternal>
              View on Ethercan {"->"}
            </Link>
          </Box>
        </VStack>
      </Center>

      <Box w="100%">
        <Button
          colorScheme="black"
          variant="outline"
          width="100%"
          onClick={() => navigate("/")}
        >
          Done
        </Button>
      </Box>
    </VStack>
  );
}
