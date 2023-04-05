import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import routes, { routesConfig } from "./routes";

describe("router", () => {
  Object.values(routesConfig).forEach(({ title, path }) => {
    it(`displays correct document title for ${title} page`, async () => {
      const router = createMemoryRouter(routes, { initialEntries: [path], initialIndex: 0 });
      render(<RouterProvider router={router} />);
      expect(document.title).toBe(`${title} | MAAS Site Manager`);
    });
  });
});
