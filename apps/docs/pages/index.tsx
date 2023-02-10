import { Button, Heading, Box, Illustrations, Icons, Stamps } from "ui";

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
      <Box bgColor={"white"}>
        <Heading as={"h4"} variant={"h2"} color={"secondary.700"}>
          Stamps
        </Heading>
        <Stamps.TracedLeaves boxSize={"3rem"} />
        <Stamps.TracedStamp boxSize={"3rem"} />
        <Stamps.RedFlower boxSize={"3rem"} />
        <Stamps.RedGiveth boxSize={"3rem"} />
        <Stamps.RedMoney boxSize={"3rem"} />
        <Stamps.RedStamp boxSize={"3rem"} />
        <Stamps.GoldenLeaves boxSize={"3rem"} />
        <Stamps.GoldenStamp boxSize={"3rem"} />
      </Box>
    </div>
  );
}
