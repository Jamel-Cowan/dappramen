
import { NextPage } from "next";
import { Container, Flex, Heading, Stack } from "@chakra-ui/react";
import NextLink from 'next/link';
import { Button } from "@chakra-ui/react";


const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"} >
         <Heading>Dapp Ramen</Heading>
          <Button as={NextLink} href='/buy'>
          Shop Lifetime Dapps
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
