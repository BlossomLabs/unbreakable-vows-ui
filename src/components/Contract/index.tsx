import { Card, CardHeader, CardBody, CardFooter, Flex } from "@chakra-ui/react";
import { Contracts } from "../Illustrations";

export default function Contract() {
  return (
    <Card variant={"contract"}>
      <CardHeader>
        <Flex justify={"space-between"} h={"100%"}>
          <Contracts.DecorationLeft h={"100%"} w={"auto"} />
          <Contracts.DecorationRight h={"100%"} w={"auto"} />
        </Flex>
      </CardHeader>

      <CardBody></CardBody>

      <CardFooter>
        <Flex justify={"space-between"} h={"100%"} w={"100%"}>
          <Contracts.DecorationLeft
            h={"100%"}
            w={"auto"}
            transform={"rotate(-90deg)"}
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
