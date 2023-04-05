import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MainLayout from "./MainLayout";

describe("MainLayout", () => {
  it("renders header", async () => {
    render(
      <MemoryRouter initialEntries={["/"]} key="testkey">
        <MainLayout />
      </MemoryRouter>,
    );

    await waitFor(() =>
      expect(screen.getByRole("heading", { name: /Canonical Vite React Template/ })).toBeInTheDocument(),
    );
  });
});
