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
    <GridItem w={"100%"}>
      <VStack spacing={0} align={"center"} boxSize={"100%"}>
        <Contracts.Ornament boxSize={"50%"} />
        <Box position={"relative"} w={"100%"}>
          <Contracts.TitleDecoration boxSize={"100%"} />
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
  StampLeft?: React.FC<{ boxSize: Record<string, string> }>;
  StampRight?: React.FC<{ boxSize: Record<string, string> }>;
  contractName: string;
}) {
  const boxSize = { base: "30px", sm: "45px", md: "80px" };
  return (
    <Grid
      position={"absolute"}
      templateColumns={{
        base: "0.75fr 1.75fr 0.75fr",
        sm: "0.5fr 1.5fr 0.5fr",
      }}
      alignItems={"center"}
      justifyItems={"center"}
      w={"100%"}
      h={"100%"}
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
  StampLeft?: React.FC<{ boxSize: Record<string, string> }>;
  StampRight?: React.FC<{ boxSize: Record<string, string> }>;
  contractName: string;
  children: React.ReactNode;
}) {
  const decorationBoxSize = { base: "50px", sm: "70px", md: "100px" };
  return (
    <Card variant={"contract"}>
      <CardHeader>
        <Flex justify={"space-between"} h={"100%"} position={"relative"}>
          <Contracts.DecorationLeft boxSize={decorationBoxSize} />
          <StampsAndTitle {...props} />
          <Contracts.DecorationRight boxSize={decorationBoxSize} />
        </Flex>
      </CardHeader>

      <CardBody>
        <HorizontalLines />
        <Box w={{ base: "100%", md: "600px" }} px={10}>
          {props.children}
        </Box>
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
            boxSize={decorationBoxSize}
            transform={"rotate(-90deg)"}
          />
          <Contracts.Ornament
            h={{ base: "30px", sm: "40px", md: "50px" }}
            w={{ base: "100px", sm: "150px", md: "200px" }}
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
