import { VStack, Text, Center, Heading, Box, HStack } from "@chakra-ui/react";
import * as Icons from "./components/Icons";
import * as Illustrations from "./components/Illustrations";

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
        </VStack>
        <VStack width={"50%"}>
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
        </VStack>
      </HStack>
    </Center>
  );
}

export default App;
