import { Center, Heading, VStack } from "@chakra-ui/react";
import bg from "../../assets/paper-vow-bg.png";
import { HatIcon } from "../Illustrations";

export default function Vow({
  children,
  isSelected,
}: {
  children: React.ReactNode;
  isSelected: boolean;
}) {
  return (
    <Center
      backgroundImage={bg}
      width={"200px"}
      height={"300px"}
      color={"rgba(57, 40, 33, 1)"}
      borderRadius={"xl"}
      backgroundSize={"cover"}
    >
      <VStack spacing={10}>
        <HatIcon boxSize={"6rem"} />
        <Heading
          as={"p"}
          variant={"h1"}
          lineHeight={"1.625rem"}
          fontSize={"1.5rem"}
          textAlign={"center"}
        >
          {children}
        </Heading>
      </VStack>
    </Center>
  );
}
