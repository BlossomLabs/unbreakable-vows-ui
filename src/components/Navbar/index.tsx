import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo.svg";
import { PlusIcon, CloseIcon } from "../Icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"secondary.700"}
        color={useColorModeValue("gray.600", "white")}
        minH={"5.375rem"}
        px={{ base: 4, md: 12 }}
        align={"center"}
        as={"header"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src={logo} h={"2.125rem"} minW={"12.5rem"} />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            variant={"solid"}
            leftIcon={<PlusIcon />}
            size={"lg"}
          >
            Connect
          </Button>
        </Stack>

        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"link"}
            size={"sm"}
            aria-label={"Toggle Navigation"}
            color={"white"}
            _hover={{
              color: "primary.300",
            }}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "primary.300";

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Flex
      py={2}
      as={Link}
      href={href ?? "#"}
      align={"center"}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text
        fontWeight={600}
        color={useColorModeValue("gray.600", "gray.200")}
        _hover={{
          color: "primary.500",
        }}
      >
        {label}
      </Text>
    </Flex>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Create Vow",
    href: "#",
  },
  {
    label: "My Vows",
    href: "#",
  },
  {
    label: "Source Code",
    href: "#",
  },
  {
    label: "ETHGlobal Road to Web3",
    href: "#",
  },
];
