import React, { useContext } from "react";
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

import AppContext from "../context/background/AppContext";

export default function Transfer() {
  const { state, addTransaction } = useContext(AppContext);

  const [amount, setAmount] = React.useState("");
  const handleAmount = (event: any) => setAmount(event.target.value);

  const [recipent, setRecipent] = React.useState("");
  const handleRecipent = (event: any) => setRecipent(event.target.value);

  let navigate = useNavigate();

  const submitHandler = async () => {
    const transaction = {
      id: state.transactions.length + 1,
      from: state.account.publicAddress,
      to: recipent,
      value: Number(amount),
      date: new Date(),
    };

    console.log({ transaction });
    addTransaction(transaction);
    navigate("/");
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
                onChange={handleRecipent}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="amount">Amount</FormLabel>
              <Input
                id="amount"
                type="text"
                placeholder="Enter the amount will be transfered."
                onChange={handleAmount}
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
