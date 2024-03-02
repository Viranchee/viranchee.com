import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFileText,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { Icon, VStack, HStack, Link as ChakraLink } from "@chakra-ui/react";

const resumeLink = "/resume.pdf";
const githubLink = "https://www.github.com/viranchee";
const linkedinLink = "https://www.linkedin.com/in/viranchee";
const email = "hey@viranchee.com";
const phone = "+1 743 837 2837";

const linkStack = (
  <HStack spacing={10} justifyContent="center">
    <ChakraLink href={githubLink} target="_blank" rel="noreferrer">
      <Icon as={AiFillGithub} w={12} h={12} />
    </ChakraLink>
    <ChakraLink target="_blank" href={linkedinLink} rel="noreferrer">
      <Icon as={AiFillLinkedin} w={12} h={12} />
    </ChakraLink>
    <ChakraLink target="_blank" href={resumeLink} rel="noreferrer">
      <Icon as={AiFillFileText} w={12} h={12} />
    </ChakraLink>
    <ChakraLink target="_blank" href={email} rel="noreferrer">
      <Icon as={AiTwotoneMail} w={12} h={12} />
    </ChakraLink>
    <ChakraLink target="_blank" href={phone} rel="noreferrer">
      <Icon as={AiFillPhone} w={12} h={12} />
    </ChakraLink>
  </HStack>
);

export default function Home() {
  return (
    <VStack spacing={5}>
      <h1>Hi, I\'m Viranchee Lotia!</h1>
      <p>I love working on ML Compilers, Systems, Performance Modelling.</p>
      <p>I am skilled at iOS and Embedded development.</p>
      {linkStack}
    </VStack>
  );
}
