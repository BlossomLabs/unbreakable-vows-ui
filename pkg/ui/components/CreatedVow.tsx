import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  HStack,
  VStack,
  Box,
} from "@chakra-ui/react";
import dayjs from "dayjs";

import * as Stamps from "./Stamps";
import * as Illustrations from "./Illustrations";
import { LockIcon } from "./Icons";
import bg from "../assets/paper-vow-bg.png";

type VowType = "draft" | "private" | "terminated" | "unsigned";

type CreatedVowProps = {
  timestamp?: string;
  title: string;
  type: VowType;
  isBlocked?: boolean;
  isBroken?: boolean;
  isBookmark?: boolean;
};

function DraftIcons() {
  return (
    <HStack>
      <Stamps.TracedStamp boxSize={"3rem"} />
      <Stamps.TracedLeaves boxSize={"3rem"} />
    </HStack>
  );
}

function SignedContractIcons() {
  return (
    <HStack>
      <Stamps.RedFlower boxSize={"3rem"} />
      <Stamps.RedGiveth boxSize={"3rem"} />
    </HStack>
  );
}

function renderStamps(type: VowType) {
  switch (type) {
    case "draft":
      return <DraftIcons />;
    case "terminated":
      return <SignedContractIcons />;
    default:
      return null;
  }
}

const VOW_TYPES: Record<VowType, string> = {
  draft: "Draft contract",
  private: "Private-bookmarked contract",
  terminated: "Terminated contract",
  unsigned: "unsigned contract",
};

export default function CreatedVow({
  timestamp,
  title,
  type,
  isBlocked,
  isBroken,
  isBookmark,
}: CreatedVowProps) {
  return (
    <Card backgroundImage={bg} backgroundSize={"cover"}>
      <CardHeader p={4}>
        <Box position={"relative"}>
          {isBroken ? (
            <Illustrations.Breach
              position={"absolute"}
              h={"6.25rem"}
              right={0}
              top={"-22px"}
            />
          ) : null}
          {isBookmark ? (
            <Illustrations.Bookmark
              position={"absolute"}
              boxSize={"3.125rem"}
              top={"-16px"}
              right={"-6px"}
            />
          ) : null}
        </Box>
        <Text
          textStyle={"subtitle2"}
          color={"secondary.500"}
          textTransform={"uppercase"}
          w={isBroken || isBookmark ? "70%" : "100%"}
        >
          {VOW_TYPES[type]}
        </Text>
      </CardHeader>
      <CardBody p={4}>
        <VStack spacing={10} align={"flex-start"}>
          <Heading
            as={"p"}
            variant={"h1"}
            lineHeight={"110%"}
            color={"secondary.700"}
            fontSize={"2xl"}
          >
            {title}
          </Heading>
          {renderStamps(type)}
        </VStack>
      </CardBody>

      <CardFooter p={4}>
        {isBlocked ? (
          <Box
            position={"absolute"}
            boxSize={"100px"}
            background={
              "linear-gradient(to bottom right,transparent 50%,grey 50%);"
            }
            opacity={0.6}
            bottom={0}
            right={0}
          >
            <LockIcon
              boxSize={"2.25rem"}
              position={"absolute"}
              right={"10px"}
              bottom={"10px"}
            />
          </Box>
        ) : null}
        <Text textStyle={"subtitle2"} color={"secondary.500"}>
          {dayjs(timestamp).format("DD-MM-YYYY")}
        </Text>
      </CardFooter>
    </Card>
  );
}
