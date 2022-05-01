import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

export default function Transfer() {
  return (
    <>
      <VStack alignItems="left" height="100%">
        <Heading as="h1" size="sm" height="35px">
          Send Ether
        </Heading>

        <Divider />

        <Box height="100%" maxHeight="450px">
          <form>
            <FormControl>
              <FormLabel htmlFor="recipient">Recipient address</FormLabel>
              <Input
                id="recipient"
                type="text"
                placeholder="Enter public Address."
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="amount">Amount</FormLabel>
              <Input
                id="amount"
                type="text"
                placeholder="Enter the amount will be transfered."
              />
            </FormControl>
          </form>
        </Box>

        <Divider />

        <SimpleGrid columns={2} spacing={4} height="35px">
          <Button colorScheme="white" variant="outline" width="100%">
            Cancel
          </Button>
          <Button colorScheme="blue" variant="solid" width="100%">
            Confirm
          </Button>
        </SimpleGrid>
      </VStack>
    </>
  );
}
