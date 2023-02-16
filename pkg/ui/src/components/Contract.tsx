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
  VStack,
  Grid,
  GridItem,
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

function Title({ contractName }: { contractName: string }) {
  return (
    <GridItem w={"full"}>
      <VStack spacing={0} align={"center"} boxSize={"full"}>
        <Contracts.Ornament boxSize={"50%"} />
        <Box position={"relative"} w={"full"}>
          <Contracts.TitleDecoration boxSize={"full"} />
          <Box
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
          >
            <Heading
              variant={"h3"}
              size={{ base: "2xs", sm: "md", md: "lg" }}
              color={"secondary.500"}
              textAlign={"center"}
            >
              {contractName}
            </Heading>
          </Box>
        </Box>
        <Contracts.OrnamentSmall boxSize={"40%"} />
      </VStack>
    </GridItem>
  );
}

function StampsAndTitle({
  StampLeft,
  StampRight,
  contractName,
}: {
  StampLeft?: React.FC<{ boxSize: Record<string, number> }>;
  StampRight?: React.FC<{ boxSize: Record<string, number> }>;
  contractName: string;
}) {
  const boxSize = { base: 9, sm: 14, md: 20 };
  return (
    <Grid
      position={"absolute"}
      templateColumns={{
        base: "0.75fr 1.75fr 0.75fr",
        sm: "0.5fr 1.5fr 0.5fr",
      }}
      alignItems={"center"}
      justifyItems={"center"}
      w={"full"}
      h={"full"}
    >
      <GridItem>
        {StampLeft ? (
          <StampLeft boxSize={boxSize} />
        ) : (
          <EmptyStamp boxSize={boxSize} />
        )}
      </GridItem>
      <Title contractName={contractName} />
      <GridItem>
        {StampRight ? (
          <StampRight boxSize={boxSize} />
        ) : (
          <EmptyStamp boxSize={boxSize} />
        )}
      </GridItem>
    </Grid>
  );
}

export default function Contract(props: {
  StampLeft?: React.FC<{ boxSize: Record<string, number> }>;
  StampRight?: React.FC<{ boxSize: Record<string, number> }>;
  contractName: string;
  children: React.ReactNode;
}) {
  const decorationBoxSize = { base: 12, sm: 16, md: 24 };
  return (
    <Card variant={"contract"}>
      <CardHeader>
        <Flex justify={"space-between"} h={"full"} position={"relative"}>
          <Contracts.DecorationLeft boxSize={decorationBoxSize} />
          <StampsAndTitle {...props} />
          <Contracts.DecorationRight boxSize={decorationBoxSize} />
        </Flex>
      </CardHeader>

      <CardBody>
        <HorizontalLines />
        <Box w={{ base: "full", md: "xl" }} px={10}>
          {props.children}
        </Box>
        <HorizontalLines />
      </CardBody>

      <CardFooter>
        <Flex
          justify={"space-between"}
          h={"full"}
          w={"full"}
          alignItems={"flex-end"}
        >
          <Contracts.DecorationLeft
            boxSize={decorationBoxSize}
            transform={"rotate(-90deg)"}
          />
          <Contracts.Ornament
            h={{ base: 7, sm: 10, md: 12 }}
            w={{ base: 24, sm: 36, md: 48 }}
            transform={"rotate(180deg)"}
          />
          <Contracts.DecorationRight
            boxSize={decorationBoxSize}
            transform={"rotate(90deg)"}
          />
        </Flex>
      </CardFooter>
    </Card>
  );
}
