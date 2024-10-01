import { useOffset } from "@/utils/use-offset";
import {
  Button,
  Drawer,
  FlexItem,
  FlexLayout,
  H2,
  NavigationItem,
  StackLayout,
  Tooltip,
  useResponsiveProp,
} from "@salt-ds/core";
import { CloseIcon, GithubIcon, MenuIcon, PdfIcon } from "@salt-ds/icons";
import { type FC, type ReactNode, useEffect, useState } from "react";
import styles from "./Header.module.css";

const items = ["Work Experience", "Education", "Scholarships & Awards", "Projects", "Technical Skills"];
const buttons = [
  { icon: <PdfIcon />, key: "CV", link: "https://www.arjun.so/cv" },
  { icon: <GithubIcon />, key: "GitHub", link: "https://github.com/arjunnaha/salt" },
];

interface HeaderProps {
  items?: string[];
  buttons?: { icon: ReactNode; key: string; link: string }[];
}

const DesktopAppHeader: FC<HeaderProps> = ({ items, buttons }) => {
  const [active, setActive] = useState(items?.[0]);
  const offset = useOffset();

  return (
    <header className={styles.header}>
      <FlexLayout align="center" justify="space-between" className={styles.desktopHeader} data-is-offset={offset > 0}>
        <FlexItem>
          <H2>Arjun Naha</H2>
        </FlexItem>

        <FlexItem align="center">
          <nav>
            <ul className={styles.desktopHeaderNavList}>
              {items?.map((item) => (
                <NavigationItem key={item} active={active === item} onClick={() => setActive(item)}>
                  {item}
                </NavigationItem>
              ))}
            </ul>
          </nav>
        </FlexItem>

        <FlexItem align="center">
          <StackLayout direction="row" gap={1}>
            {buttons?.map(({ icon, key, link }) => (
              <Tooltip content={key} key={key} placement="bottom">
                <a href={link} key={key} target="_blank" rel="noreferrer" className={styles.desktopHeaderButton}>
                  {icon}
                </a>
              </Tooltip>
            ))}
          </StackLayout>
        </FlexItem>
      </FlexLayout>
    </header>
  );
};

const MobileAppHeader: FC<HeaderProps> = ({ items, buttons }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState(items?.[0]);
  const offset = useOffset();

  const handleClick = (item: string) => {
    setActive(item);
    setDrawerOpen(false);
  };

  return (
    <header>
      <StackLayout direction="row" gap={3} className={styles.mobileHeader} data-is-offset={offset > 0}>
        <FlexItem className={styles.mobileHeaderControl}>
          {!drawerOpen && (
            <Button
              onClick={() => setDrawerOpen(true)}
              className={styles.mobileHeaderControlButton}
              appearance="transparent"
            >
              <MenuIcon />
            </Button>
          )}
          {drawerOpen && (
            <Button
              onClick={() => setDrawerOpen(false)}
              className={styles.mobileHeaderControlButton}
              appearance="transparent"
            >
              <CloseIcon />
            </Button>
          )}
        </FlexItem>

        <FlexItem align="center">
          <H2>Arjun Naha</H2>
        </FlexItem>
      </StackLayout>

      <Drawer
        className={styles.mobileDrawerHeader}
        open={drawerOpen}
        // TODO: Fix this
        // onOpenChange={() => {
        //   if (drawerOpen) {
        //     setDrawerOpen(false);
        //   }
        // }}
      >
        <nav>
          <ul className={styles.mobileDrawerNavList}>
            {items?.map((item) => (
              <li key={item}>
                <NavigationItem
                  orientation="vertical"
                  active={active === item}
                  href="#"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </NavigationItem>
              </li>
            ))}

            {buttons?.map((utility) => (
              <li key={utility.key}>
                <NavigationItem orientation="vertical" href={utility.link} onClick={() => setDrawerOpen(false)}>
                  {utility.icon}
                  {utility.key}
                </NavigationItem>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </header>
  );
};

export function Header() {
  const isMobile = useResponsiveProp({ xs: true, md: false }, false);

  return isMobile ? (
    <MobileAppHeader items={items} buttons={buttons} />
  ) : (
    <DesktopAppHeader items={items} buttons={buttons} />
  );
}
