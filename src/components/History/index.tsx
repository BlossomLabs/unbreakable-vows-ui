import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import {
  Flex,
  Text,
  IconButton,
  Box,
  Collapse,
  UnorderedList,
  ListItem,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { EditIcon, EyeOpenIcon } from "../Icons";

dayjs.extend(utc);
dayjs.extend(timezone);

type HistoryPropsType = {
  items: Array<HistoryItemType>;
};

type HistoryItemType = {
  title: string;
  timestamp: string;
  suggestions: Array<string>;
  onAccept?: () => void;
  onReject?: () => void;
};

type CustomButtonProps = {
  children: React.ReactNode;
  handleOnClick?: () => void;
  color: string;
};

function CustomButton({ children, handleOnClick, color }: CustomButtonProps) {
  return (
    <Button
      bgColor={color}
      color={"white"}
      border={"none"}
      variant={"outline"}
      size={"lg"}
      _hover={{
        bgColor: color,
        opacity: 0.8,
      }}
      _active={{
        bgColor: color,
        opacity: 0.8,
      }}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  );
}

function HistoryItem({
  title,
  timestamp,
  suggestions,
  onReject,
  onAccept,
}: HistoryItemType) {
  const { isOpen, onToggle } = useDisclosure();

  const guessedTimezone = dayjs.tz.guess();
  const timestampWithLocalTimezone = dayjs(timestamp).tz(guessedTimezone);
  const date = timestampWithLocalTimezone.format("YYYY/MM/DD");
  const time = timestampWithLocalTimezone.format("h:mmA");

  return (
    <Flex
      direction={"row"}
      color={"white"}
      bgColor={"black"}
      _hover={{ bgColor: "secondary.700" }}
      justify={"space-between"}
      w={"xl"}
      minH={"4.75rem"}
      align={"center"}
      p={2.5}
      borderBottom={"1px solid"}
      borderColor={"primary.300"}
    >
      <Flex
        direction={"row"}
        align={isOpen ? "flex-start" : "center"}
        py={isOpen ? 5 : 0}
      >
        <EyeOpenIcon boxSize={"1.313rem"} />
        <Flex direction={"column"} ml={4} h={"auto"}>
          <Box>
            <Text textStyle={"body1"} mb={2}>
              {title}
            </Text>
            <Text textStyle={"tooltip"}>
              {date} - {time}
            </Text>
          </Box>
          <Collapse in={isOpen}>
            <UnorderedList pt={4}>
              {suggestions.map((s, i) => (
                <ListItem key={`history-item-suggestions-${i}`}>{s}</ListItem>
              ))}
            </UnorderedList>
            <Flex mt={6} gap={3}>
              <CustomButton handleOnClick={onReject} color={"red"}>
                Reject
              </CustomButton>
              <CustomButton handleOnClick={onAccept} color={"green"}>
                Accept
              </CustomButton>
            </Flex>
          </Collapse>
        </Flex>
      </Flex>
      <IconButton
        variant={"link"}
        size={"md"}
        aria-label={"Edit"}
        icon={<EditIcon boxSize={"1.125rem"} />}
        onClick={onToggle}
        alignSelf={isOpen ? "flex-start" : "center"}
      />
    </Flex>
  );
}

export default function History({ items }: HistoryPropsType) {
  return (
    <Box as="section">
      {items.map((item, i) => {
        return <HistoryItem {...item} key={`history-item-${i}`} />;
      })}
    </Box>
  );
}
