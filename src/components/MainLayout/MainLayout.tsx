import { Outlet, useLocation } from "react-router-dom";

import DocumentTitle from "@/components/DocumentTitle";
import Navigation from "@/components/Navigation";
import type { RoutePath } from "@/routes";
import { routesConfig } from "@/routes";

const getPageTitle = (pathname: RoutePath) => {
  const title = Object.values(routesConfig).find(({ path }) => path === pathname)?.title;
  return title ? `${title} | Vite React Template` : "Vite React Template";
};

const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <DocumentTitle>{getPageTitle(pathname as RoutePath)}</DocumentTitle>
      <div className="l-application">
        <Navigation />
        <main className="l-main">
          <div className="row">
            <div className="col-12">
              <h1 className="u-hide">Canonical Vite React Template</h1>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
