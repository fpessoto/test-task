import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import LinkButton from "../components/shared/LinkButton";

export default function Transfer() {
  let navigate = useNavigate();

  const submitHandler = (event: any) => {
    console.log("test");
    event.preventDefault();
    navigate(`/success`);
  };

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
          <LinkButton text="Cancel" to="/" />
          <Button
            colorScheme="blue"
            variant="solid"
            width="100%"
            type="submit"
            onClick={submitHandler}
          >
            Confirm
          </Button>
        </SimpleGrid>
      </VStack>
    </>
  );
}
