import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FilterList from "./FilterList";

describe("FILTER LIST TEST", () => {
  test("filter brand", async () => {
    render(
      <MemoryRouter>
        <FilterList brand={["ARAVIA"]} />
      </MemoryRouter>
    );
    const user = userEvent;
    const input = screen.getByText("ARAVIA");
    user.click(input);
    expect(screen.getByLabelText("ARAVIA")).toBeChecked();
  });
  test("filter manufacturer", async () => {
    render(
      <MemoryRouter>
        <FilterList manufacturer={["ARAVIA"]} />
      </MemoryRouter>
    );
    const user = userEvent;
    const input = screen.getByText("ARAVIA");
    user.click(input);
    expect(screen.getByLabelText("ARAVIA")).toBeChecked();
  });
});
