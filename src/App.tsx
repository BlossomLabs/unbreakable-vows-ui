import {
  VStack,
  Text,
  Center,
  Heading,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import * as Icons from "./components/Icons";
import * as Illustrations from "./components/Illustrations";
import Vow from "./components/Vow";

function App() {
  const textVariants = [
    ["subtitle1", "md"],
    ["subtitle2", "md"],
    ["body1", "md"],
    ["body2", "sm"],
    ["tooltip", "xs"],
  ];
  const headingVariants = [
    ["h1", "2xl"],
    ["h2", "md"],
    ["h3", "md"],
  ];

  return (
    <Center minH={"100vh"} p={10}>
      <HStack>
        <VStack spacing={4} width={"50%"}>
          <Box pb={8}>
            <Heading
              as={"h1"}
              variant={"h2"}
              size={"md"}
              textAlign={"center"}
              pb={8}
            >
              Text variants:
            </Heading>
            <VStack spacing={8}>
              {textVariants.map(([v, size], i) => (
                <Text variant={v} size={size} key={`${v}-${i}`}>
                  {v}: Almost before we knew it, we had left the ground.
                </Text>
              ))}
            </VStack>
          </Box>
          <Box>
            <Heading
              as={"h2"}
              variant={"h2"}
              size={"md"}
              textAlign={"center"}
              pb={4}
            >
              Heading variants:
            </Heading>
            <VStack spacing={8}>
              {headingVariants.map(([v, size], i) => (
                <Heading variant={v} size={size} key={`${v}-${i}`}>
                  {v}: Almost before we knew it, we had left the ground.
                </Heading>
              ))}
            </VStack>
          </Box>
          <Box>
            <Vow isSelected={false}>Employment Agreement</Vow>
          </Box>
        </VStack>
        <VStack width={"50%"}>
          <Box>
            <Heading
              as={"h3"}
              variant={"h2"}
              size={"md"}
              textAlign={"center"}
              pb={8}
            >
              Icons
            </Heading>
            <Box>
              <Illustrations.HatIcon boxSize={"4xs"} />
              <Illustrations.FeatherIcon boxSize={"4xs"} />
              <Illustrations.PotionIcon boxSize={"4xs"} />
              <Illustrations.OwlIcon boxSize={"4xs"} />
            </Box>
            <Box>
              {Object.keys(Icons).map((IconName, i) => {
                const Icon = Icons[IconName as keyof typeof Icons];

                return <Icon key={`${IconName}-${i}`} boxSize={8} />;
              })}
            </Box>
          </Box>
          <Box bgColor={"black"} p={8}>
            <Heading
              as={"h4"}
              variant={"h2"}
              size={"md"}
              textAlign={"center"}
              pb={8}
              color={"secondary.50"}
            >
              Buttons
            </Heading>
            <VStack spacing={10}>
              <HStack spacing={5}>
                <Button variant={"outline"} isDisabled>
                  Create new vow
                </Button>
                <Button variant={"solid"}>Create new vow</Button>
                <Button variant={"link"} size={"md"}>
                  See all
                </Button>
              </HStack>
              <HStack spacing={5}>
                <Button variant={"outline"}>Accept</Button>
                <Button variant={"solid"} isDisabled>
                  Accept
                </Button>
                <Button variant={"link"} size={"sm"}>
                  Go back
                </Button>
              </HStack>
            </VStack>
          </Box>

          <Box bgColor={"black"} p={8}>
            <Heading
              as={"h4"}
              variant={"h2"}
              size={"md"}
              textAlign={"center"}
              pb={8}
              color={"secondary.50"}
            >
              Icon Buttons
            </Heading>
            <VStack spacing={10}>
              <HStack spacing={5}>
                <Button
                  aria-label="Copy link"
                  leftIcon={<Icons.CopyIcon />}
                  variant={"outline"}
                  justifyContent={"flex-start"}
                >
                  Copy link
                </Button>
                <Button
                  aria-label="Copy link"
                  leftIcon={<Icons.PlusIcon />}
                  variant={"solid"}
                  size={"lg"}
                >
                  Connect
                </Button>
                <Button
                  aria-label="Copy link"
                  leftIcon={<Icons.CopyIcon />}
                  variant={"outline"}
                  justifyContent={"flex-start"}
                  isDisabled
                >
                  Copy link
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </Center>
  );
}

export default App;
