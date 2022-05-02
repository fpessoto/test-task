import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import AppContext from "../context/background/AppContext";

export default function Transfer() {
  const { state, addTransaction } = useContext(AppContext);

  const [amount, setAmount] = React.useState(state.account.balance);
  const handleAmount = (event: any) => {
    console.log(event);
    setAmount(event);
  };

  const [recipent, setRecipent] = React.useState("");
  const handleRecipent = (event: any) => setRecipent(event.target.value);

  const [errorMessage, setErrorMessage] = React.useState("");

  let navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const submitHandler = async () => {
    console.log({ amount });

    if (amount > state.account.balance) {
      setErrorMessage("Insuficient funds.");
      return;
    }

    if (recipent === state.account.publicAddress) {
      setErrorMessage("You cannot send funds to yourself.");
      return;
    }

    const transaction = {
      id: state.transactions.length + 1,
      from: state.account.publicAddress,
      to: recipent,
      value: Number(amount),
      date: new Date(),
    };

    console.log({ transaction });
    addTransaction(transaction);
    setErrorMessage("");
    navigate("/success");
  };

  const handleCloseAlert = () => setErrorMessage("");
  return (
    <>
      <VStack alignItems="left" height="100%">
        <Heading as="h1" size="sm" height="35px">
          Send Ether
        </Heading>

        <Divider />

        {errorMessage && (
          <Alert status="error">
            <AlertIcon />
            <Box>
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={handleCloseAlert}
            />
          </Alert>
        )}

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
              {/* <Input
                id="amount"
                type="text"
                placeholder="Enter the amount will be transfered."
                onChange={handleAmount}
              /> */}

              <NumberInput
                id="amount"
                defaultValue={state.account.balance}
                min={0.1}
                max={state.account.balance}
                keepWithinRange={true}
                clampValueOnBlur={false}
                placeholder="Enter the amount will be transfered."
                onChange={handleAmount}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </form>
        </Box>

        <Divider />

        <SimpleGrid columns={2} spacing={4} height="35px">
          <Button
            colorScheme="black"
            variant="outline"
            width="100%"
            onClick={handleCancel}
          >
            Cancel
          </Button>

          <Button
            colorScheme="blue"
            variant="solid"
            width="100%"
            onClick={submitHandler}
            disabled={!(amount > 0) || !recipent}
          >
            Confirm
          </Button>
        </SimpleGrid>
      </VStack>
    </>
  );
}
