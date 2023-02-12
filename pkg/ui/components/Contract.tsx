import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Divider,
  HStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Contracts } from "./Illustrations";
import { EmptyStamp } from "./Stamps";

function HorizontalLines() {
  return (
    <HStack h={"99%"} spacing={"3px"}>
      <Divider
        orientation="vertical"
        borderWidth={"1px"}
        borderColor={"secondary.700"}
      />
      <Divider
        orientation="vertical"
        borderWidth={"1px"}
        borderColor={"secondary.700"}
      />
    </HStack>
  );
}

function StampsAndTitle({
  StampLeft,
  StampRight,
  contractName,
}: {
  StampLeft?: React.FC<{ boxSize: Record<string, string> }>;
  StampRight?: React.FC<{ boxSize: Record<string, string> }>;
  contractName: string;
}) {
  const boxSize = { base: "40px", sm: "60px", md: "80px" };
  return (
    <HStack>
      {StampLeft ? (
        <StampLeft boxSize={boxSize} />
      ) : (
        <EmptyStamp boxSize={boxSize} />
      )}
      <Box>
        <Heading
          variant={"h3"}
          size={"lg"}
          color={"secondary.500"}
          textAlign={"center"}
        >
          {contractName}
        </Heading>
      </Box>
      {StampRight ? (
        <StampRight boxSize={boxSize} />
      ) : (
        <EmptyStamp boxSize={boxSize} />
      )}
    </HStack>
  );
}

export default function Contract(props: {
  StampLeft?: React.FC<{ boxSize: Record<string, string> }>;
  StampRight?: React.FC<{ boxSize: Record<string, string> }>;
  contractName: string;
}) {
  return (
    <Card variant={"contract"}>
      <CardHeader>
        <Flex justify={"space-between"} h={"100%"}>
          <Contracts.DecorationLeft h={"100%"} w={"auto"} />
          <StampsAndTitle {...props} />
          <Contracts.DecorationRight h={"100%"} w={"auto"} />
        </Flex>
      </CardHeader>

      <CardBody>
        <HorizontalLines />
        <Box w={"600px"}></Box>
        <HorizontalLines />
      </CardBody>

      <CardFooter>
        <Flex
          justify={"space-between"}
          h={"100%"}
          w={"100%"}
          alignItems={"flex-end"}
        >
          <Contracts.DecorationLeft
            h={"100%"}
            w={"auto"}
            transform={"rotate(-90deg)"}
          />
          <Contracts.Ornament
            h={{ base: "30px", sm: "40px", md: "50px" }}
            w={{ base: "100px", sm: "150px", md: "200px" }}
            transform={"rotate(180deg)"}
          />
          <Contracts.DecorationRight
            h={"100%"}
            w={"auto"}
            transform={"rotate(90deg)"}
          />
        </Flex>
      </CardFooter>
    </Card>
  );
}
