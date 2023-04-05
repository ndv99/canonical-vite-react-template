import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Navigation, { navItems } from "./Navigation";

describe("Navigation", () => {
  it("displays navigation", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <Navigation />
      </MemoryRouter>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  [...navItems].forEach(({ label, url }) => {
    it(`highlights ${label} navigation item when active`, () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: url, key: "testKey" }]}>
          <Navigation />
        </MemoryRouter>,
      );

      const currentMenuItem = screen.getByRole("link", { current: "page", name: label });
      expect(currentMenuItem).toBeInTheDocument();
    });
  });

  it("is collapsed by default", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <Navigation />
      </MemoryRouter>,
    );
    expect(screen.getByRole("navigation")).toHaveClass("is-collapsed");
  });

  it("persists collapsed state", async () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <Navigation />
      </MemoryRouter>,
    );

    const primaryNavigation = screen.getByRole("navigation");
    await userEvent.click(screen.getByRole("button", { name: "expand main navigation" }));
    expect(primaryNavigation).toHaveClass("is-pinned");

    rerender(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <Navigation />
      </MemoryRouter>,
    );

    expect(primaryNavigation).toHaveClass("is-pinned");
  });
});
