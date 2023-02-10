import { Button, Heading, Box, Illustrations, Icons } from "ui";

export default function Docs() {
  return (
    <div>
      <Heading>Docs</Heading>
      <Button>boop</Button>

      <Box bgColor={"white"}>
        <Heading
          as={"h3"}
          variant={"h2"}
          size={"md"}
          textAlign={"center"}
          pb={8}
          color={"secondary.700"}
        >
          Icons
        </Heading>
        <Box>
          <Illustrations.Hat boxSize={"4xs"} />
          <Illustrations.Feather boxSize={"4xs"} />
          <Illustrations.Potion boxSize={"4xs"} />
          <Illustrations.Owl boxSize={"4xs"} />
        </Box>
        <Box>
          {Object.keys(Icons).map((IconName, i) => {
            const Icon = Icons[IconName as keyof typeof Icons];

            return <Icon key={`${IconName}-${i}`} boxSize={8} />;
          })}
        </Box>
      </Box>
    </div>
  );
}
