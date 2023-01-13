import { Form, Formik, type FormikProps, type FormikHelpers } from "formik";
import {
  VStack,
  Text,
  Heading,
  Box,
  HStack,
  Button,
  Flex,
  useDisclosure,
  Stack,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import ConfirmationModal from "./components/ConfirmationModal";
import * as Icons from "./components/Icons";
import * as Illustrations from "./components/Illustrations";
import * as Stamps from "./components/Stamps";
import NewVow from "./components/NewVow";
import Navbar from "./components/Navbar";
import History from "./components/History";
import CreatedVow from "./components/CreatedVow";
import Input from "./components/InputField";
import Select from "./components/SelectField";
import Breadcrumbs from "./components/Breadcrumbs";
import Contract from "./components/Contract";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  search: string;
}

type ErrorObj = {
  email?: string;
};

const validate = (values: Values) => {
  const errors: ErrorObj = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function FormExample() {
  return (
    <Box>
      <Heading>My Form</Heading>
      <Formik
        initialValues={{
          email: "",
          firstName: "red",
          lastName: "",
          search: "term",
        }}
        onSubmit={(values: Values, actions: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            actions.setSubmitting(false);
          }, 1000);
        }}
        validate={validate}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <Input
              name="firstName"
              type="text"
              label="First Name"
              helperText={"Enter here your first name"}
            />
            <Input
              name="lastName"
              type="text"
              label="Last Name"
              disabled={true}
            />
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder={"Your email address"}
            />
            <Input
              RightElementChildren={
                <IconButton
                  icon={
                    <Search2Icon color={"primary.300"} boxSize={"0.85rem"} />
                  }
                  aria-label={"Search"}
                  variant={"link"}
                  size={"sm"}
                />
              }
              type={"text"}
              name={"search"}
              placeholder={"Search..."}
              variant={"search"}
            />
            <Select
              name={"state"}
              options={[
                {
                  label: "Draft",
                  value: "draft",
                  icon: <Stamps.RedGiveth boxSize={8} />,
                },
                { label: "Unsigned", value: "unsigned" },
                { label: "Active", value: "active" },
                { label: "Terminating", value: "terminating" },
                { label: "Terminated", value: "terminated" },
                { label: "Disputing", value: "disputing" },
              ]}
              isMulti
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const textStyles = ["subtitle1", "subtitle2", "body1", "body2", "tooltip"];
  const headingVariants = [
    ["h1", "2xl"],
    ["h2", "md"],
    ["h3", "md"],
  ];
  return (
    <>
      <Navbar isAuthenticated={false} />
      <Navbar isAuthenticated />
      <Box minH={"100vh"} minW={"100vw"} p={10} bgColor={"blackAlpha.900"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <VStack spacing={4} width={{ base: "100%", lg: "50%" }}>
            <Box pb={8}>
              <Heading
                as={"h1"}
                variant={"h2"}
                size={"md"}
                textAlign={"center"}
                pb={8}
              >
                Text styles:
              </Heading>
              <VStack spacing={8}>
                {textStyles.map((s, i) => (
                  <Text textStyle={s} key={`${s}-${i}`}>
                    {s}: Almost before we knew it, we had left the ground.
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
              <Flex flexWrap={"wrap"} gap={3}>
                <NewVow isSelected={false} Icon={Illustrations.Hat}>
                  Employment Agreement
                </NewVow>
                <NewVow isSelected Icon={Illustrations.Owl}>
                  Employment Agreement - Selected
                </NewVow>
                <NewVow disabled Icon={Illustrations.Potion}>
                  Employment Agreement - Disabled
                </NewVow>
              </Flex>
            </Box>
            <SimpleGrid
              w={"full"}
              spacing={4}
              templateColumns="repeat(auto-fill, 200px)"
              templateRows={"300px"}
            >
              <CreatedVow
                timestamp="2022-11-28T14:20:40.852Z"
                title="Independent contractor Agreement"
                type="draft"
              />
              <CreatedVow
                timestamp="2022-11-28T15:24:59.412Z"
                title="Independent contractor Agreement"
                type="terminated"
                isBookmark
                isBlocked
              />
              <CreatedVow
                timestamp="2022-11-28T15:24:59.412Z"
                title="Independent contractor Agreement"
                type="private"
                isBroken
              />
            </SimpleGrid>
          </VStack>

          <VStack width={{ base: "100%", lg: "50%" }}>
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

            <Box p={8}>
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

            <Box p={8}>
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
                    leftIcon={<Icons.CopyIcon />}
                    variant={"outline"}
                    justifyContent={"flex-start"}
                  >
                    Copy link
                  </Button>
                  <Button
                    leftIcon={<Icons.PlusIcon />}
                    variant={"solid"}
                    size={"lg"}
                  >
                    Connect
                  </Button>
                  <Button
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
            <Button onClick={onOpen}>Open modal</Button>
            <History
              items={[
                {
                  title: "Susan and Smith signed",
                  timestamp: "2022-11-25T20:49:07.213Z",
                  suggestions: [
                    "Deleted sentence at section 2",
                    "Edited section 3, párrafo 2",
                  ],
                  onAccept: () => alert("accepted"),
                  onReject: () => alert("rejected"),
                },
                {
                  title: "Viviane and David signed",
                  timestamp: "2022-11-27T15:59:50.973Z",
                  suggestions: [
                    "Added sentence at section 1",
                    "Edited section 5, párrafo 10",
                  ],
                  onAccept: () => alert("accepted"),
                  onReject: () => alert("rejected"),
                },
              ]}
            />
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

            <Breadcrumbs
              items={[
                {
                  label: "Basic information",
                  href: "/basic-info",
                  isComplete: true,
                },
                {
                  label: "Compensation and benefits",
                  href: "/compensation",
                  isComplete: false,
                },
                {
                  label: "Governing law",
                  href: "/governing-law",
                  isComplete: false,
                },
                {
                  label: "Governing law 2",
                  href: "/governing-law",
                  isComplete: false,
                },
                {
                  label: "Governing law 3",
                  href: "/governing-law",
                  isComplete: false,
                },
              ]}
            />
          </VStack>
        </Stack>
        <ConfirmationModal
          isOpen={isOpen}
          onClose={onClose}
          title={"Are you sure you want to exit the process?"}
        >
          All the information you filled will not be saved
        </ConfirmationModal>
      </Box>
      <Box minW={"100vw"} minH={"100vh"} p={10} bgColor={"white"}>
        <FormExample />
      </Box>
      <Box minW={"100vw"} minH={"100vh"} p={10} bgColor={"secondary.800"}>
        <Contract contractName={"Employment Agreement"} />
      </Box>
    </>
  );
}

export default App;
