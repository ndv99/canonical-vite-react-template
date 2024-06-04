/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { waitFor, render, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  it("renders vanilla layout components correctly", async () => {
    const { container } = render(<App />);

    await waitFor(() => expect(container.querySelector(".l-application")).toBeInTheDocument());

    const application = container.querySelector(".l-application") as HTMLElement;

    expect(application.querySelector(".l-main")).toBeInTheDocument();

    expect(within(container).getByRole("heading", { name: /Canonical Vite React Template/ })).toBeInTheDocument();
  });
});
