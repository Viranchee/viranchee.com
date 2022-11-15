import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Icon, VStack } from '@chakra-ui/react';
import { Box, Heading, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from "@remix-run/react";


const linkStack = <HStack spacing={4}>
  <ChakraLink
    href="https://www.github.com/viranchee"
    target="_blank"
    rel="noreferrer"
  >
    <Icon as={AiFillGithub} w={12} h={12} />
  </ChakraLink>
  <ChakraLink
    target="_blank"
    href="https://linkedin.com/in/viranchee"
    rel="noreferrer"
  >
    <Icon as={AiFillLinkedin} w={12} h={12} />
  </ChakraLink>
</HStack>;

const description = <VStack>
  <Heading as="h3" size="xl" fontFamily={"Helvetica"} fontWeight="hairline">
    Viranchee Lotia
  </Heading >
  <Heading as="h3" size="xl" fontFamily={"Helvetica"} fontWeight="hairline">
    Compiler Engineer | Mobile Engineer
  </Heading>
  {linkStack}
</VStack>

export default function Index() {
  return (
    <Box fontFamily="Helvetica" lineHeight={1.4} fontWeight="hairline">
      <Box w='100vw' h='100vh' bgGradient='linear(to-l, #7928CA, #FF0080)' opacity={50}>
        <Box w='100%' h='100%' display='flex' justifyContent='right' alignItems='center'>
          {description}
        </Box>
      </Box>
    </Box>
  );
}
