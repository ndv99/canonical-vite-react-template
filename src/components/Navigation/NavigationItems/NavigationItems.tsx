import { useId, useMemo } from "react";

import { Icon } from "@canonical/react-components";
import classNames from "classnames";

import NavigationItem from "@/components/Navigation/NavigationItem/NavigationItem";
import type { NavGroup, NavItem } from "@/components/Navigation/types";
import { isNavGroup, isSelected } from "@/components/Navigation/utils";

type Props = {
  items: NavItem[];
  logout?: () => void;
  path: string;
};

const NavigationItemGroup = ({ group, path }: { group: NavGroup } & Pick<Props, "path">) => {
  const id = useId();
  const hasActiveChild = useMemo(() => {
    for (const navLink of group.navLinks) {
      if (isSelected(path, navLink)) {
        return true;
      }
    }
    return false;
  }, [group, path]);

  return (
    <>
      <li className={classNames("p-side-navigation__item", { "has-active-child": hasActiveChild })}>
        <span className="p-side-navigation__text" key={`${group.groupTitle}-${id}`}>
          {group.groupIcon ? (
            typeof group.groupIcon === "string" ? (
              <Icon className="p-side-navigation__icon" light name={group.groupIcon} />
            ) : (
              <>{group.groupIcon}</>
            )
          ) : null}
          <div className="p-side-navigation__label p-heading--small" id={`${group.groupTitle}-${id}`}>
            {group.groupTitle}
          </div>
        </span>
        <ul aria-labelledby={`${group.groupTitle}-${id}`} className="p-side-navigation__list">
          {group.navLinks.map((navLink, i) => (
            <NavigationItem key={i} navLink={navLink} path={path} />
          ))}
        </ul>
      </li>
    </>
  );
};

const NavigationItems = ({ items, logout, path }: Props): JSX.Element => {
  return (
    <>
      <ul className="p-side-navigation__list">
        {items.map((item, i) => {
          if (isNavGroup(item)) {
            return <NavigationItemGroup group={item} key={`${i}-${item.groupTitle}`} path={path} />;
          } else return <NavigationItem key={i} navLink={item} path={path} />;
        })}
      </ul>
    </>
  );
};

export default NavigationItems;
