import { 
	Box, 
	Heading, 
	FormikForm as Form,
	Formik, 
	type FormikProps, 
	type FormikHelpers,
	Input,
	IconButton,
	ChakraIcons,
	Button,
  Stamps,
  Select
} from 'ui'

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


export default function FormExample() {
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
                    <ChakraIcons.Search2Icon color={"primary.300"} boxSize={"0.85rem"} />
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