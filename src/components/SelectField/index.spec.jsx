import React from "react";
import { Form, Formik } from "formik";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./";

const setup = (props) => {
  return render(
    <Formik
      initialValues={{
        state: "",
      }}
      onSubmit={() => jest.fn()}
    >
      <Form>
        <Select
          {...props}
          name={"state"}
          options={[
            { label: "Draft", value: "draft" },
            { label: "Unsigned", value: "unsigned" },
          ]}
        />
      </Form>
    </Formik>
  );
};

describe("<Select />", () => {
  it("should select the correct option when multi", async () => {
    setup({
      isMulti: true,
    });

    const select = screen.getByRole("combobox");
    userEvent.click(select);
    userEvent.keyboard("{d}{r}{a}{f}{t}{Enter}{u}{n}{s}{i}{Enter}");

    expect(await screen.findByText(/draft/i)).toBeInTheDocument();
    expect(await screen.findByText(/unsigned/i)).toBeInTheDocument();
  });

  it("should select the correct option", async () => {
    setup();
    const select = screen.getByRole("combobox");
    userEvent.click(select);
    userEvent.keyboard("{ArrowDown}{Enter}");

    expect(await screen.findByText(/draft/i)).toBeInTheDocument();
  });
});
