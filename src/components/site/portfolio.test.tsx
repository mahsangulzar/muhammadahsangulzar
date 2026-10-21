import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

it("filters the portfolio and restores all projects", () => {
  render(<Portfolio />);
  fireEvent.click(
    screen.getByRole("button", { name: "Medical Billing & RCM" }),
  );
  expect(screen.getByText("Claims Workflow Blueprint")).toBeInTheDocument();
  expect(
    screen.queryByText("Organic Visibility Roadmap"),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "All" }));
  expect(screen.getByText("Organic Visibility Roadmap")).toBeInTheDocument();
});

it("does not claim a message was delivered from local development", async () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText("Full name"), {
    target: { value: "Example Visitor" },
  });
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "visitor@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Service"), {
    target: { value: "Google Ads & PPC" },
  });
  fireEvent.change(screen.getByLabelText("Your message"), {
    target: { value: "Please discuss my project requirements." },
  });
  fireEvent.submit(
    screen.getByRole("button", { name: "Send Message" }).closest("form")!,
  );
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "could not be sent",
  );
  expect(screen.getByLabelText("Your message")).toHaveValue(
    "Please discuss my project requirements.",
  );
});
