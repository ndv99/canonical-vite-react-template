import { createRoutesFromElements, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Index from "./pages";

export const routesConfig = {
  index: {
    path: "/",
    title: "Home",
  },
} as const;

type RoutesConfig = typeof routesConfig;
export type RoutePath = RoutesConfig[keyof RoutesConfig]["path"];

export const routes = createRoutesFromElements(
  <Route element={<MainLayout />} path="/">
    <Route element={<Index />} index />
  </Route>,
);

export default routes;
