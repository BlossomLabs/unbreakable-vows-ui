import { VStack, Text, Center, Heading, Box } from "@chakra-ui/react";

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
    <Center minH={"100vh"}>
      <VStack spacing={4}>
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
    </Center>
  );
}

export default App;
