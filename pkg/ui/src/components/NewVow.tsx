import {
  Center,
  Heading,
  VStack,
  Image,
  HStack,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";

import bg from "../assets/paper-vow-bg.png";
import ornament from "../assets/ornament.svg";
import ornamentDivider from "../assets/ornament-divider.svg";

export default function Vow({
  children,
  isSelected,
  disabled,
  Icon,
}: {
  children: React.ReactNode;
  isSelected?: boolean;
  disabled?: boolean;
  Icon: React.FC<{ boxSize: string }>;
}) {
  return (
    <Box
      backgroundImage={bg}
      width={"200px"}
      height={"300px"}
      color={"secondary.500"}
      borderRadius={"xl"}
      backgroundSize={"cover"}
      p={4}
      _hover={
        isSelected || disabled
          ? {}
          : {
              border: "2px solid",
              borderColor: "primary.300",
              boxShadow: "0px 2px 20px 0px rgba(252, 218, 130, 1)",
              cursor: "pointer",
              opacity: 0.8,
            }
      }
      border={isSelected ? "2px solid" : "none"}
      borderColor={isSelected ? "primary.300" : "transparent"}
      boxShadow={
        isSelected ? "0px 2px 20px 0px rgba(252, 218, 130, 1)" : "none"
      }
      opacity={disabled ? 0.5 : 1}
    >
      <Flex
        justifyContent={"space-between"}
        direction={"column"}
        alignItems={"center"}
        height={"100%"}
      >
        <HStack>
          <Divider
            orientation="horizontal"
            width={"14px"}
            borderColor={"secondary.500"}
            borderRadius={"sm"}
            borderWidth={"0.5px"}
          />
          <Image src={ornament} width={"20px"} />
          <Divider
            orientation="horizontal"
            width={"14px"}
            borderColor={"secondary.500"}
            borderRadius={"sm"}
            borderWidth={"0.5px"}
          />
        </HStack>
        <Center>
          <VStack spacing={10}>
            <Icon boxSize={"6rem"} />
            <Heading
              as={"p"}
              variant={"h1"}
              lineHeight={"110%"}
              fontSize={"2xl"}
              textAlign={"center"}
              color={"secondary.500"}
            >
              {children}
            </Heading>
          </VStack>
        </Center>

        <HStack spacing={2}>
          <Image src={ornamentDivider} width={"30px"} />
          <Image src={ornament} width={"20px"} />
          <Image src={ornamentDivider} width={"30px"} />
        </HStack>
      </Flex>
    </Box>
  );
}
