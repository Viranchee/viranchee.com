'use client';

import { Flex, Grid, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Grid textAlign="center">
      <Heading as="h1" size="lg">
        nextarter-chakra
      </Heading>

      <Text fontSize="xs">
        This is a Next.js app with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
    </Flex>
  );
};

export default Home;
