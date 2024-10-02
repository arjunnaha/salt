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
import { useRouter } from "next/router";
import { type FC, type ReactNode, useState } from "react";
import styles from "./Header.module.css";

const items = [
  {
    label: "Work Experience",
    id: "work",
  },
  {
    label: "Education",
    id: "education",
  },
  {
    label: "Scholarships & Awards",
    id: "scholarships",
  },
  {
    label: "Projects",
    id: "projects",
  },
  {
    label: "Technical Skills",
    id: "skills",
  },
];

const buttons = [
  { icon: <PdfIcon />, key: "CV", link: "https://www.arjun.so/cv" },
  { icon: <GithubIcon />, key: "GitHub", link: "https://github.com/arjunnaha/salt" },
];

interface HeaderProps {
  items: { label: string; id: string }[];
  buttons?: { icon: ReactNode; key: string; link: string }[];
}

const DesktopAppHeader: FC<HeaderProps> = ({ items, buttons }) => {
  const [active, setActive] = useState(items?.[0].id);
  const offset = useOffset();
  const router = useRouter();

  const onClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    router.push(`#${id}`);
    setActive(id);
  };

  return (
    <header className={styles.header}>
      <FlexLayout align="center" justify="space-between" className={styles.desktopHeader} data-is-offset={offset > 0}>
        <FlexItem>
          <H2>Arjun Naha</H2>
        </FlexItem>

        <FlexItem align="center">
          <nav>
            <ul className={styles.desktopHeaderNavList}>
              {items?.map(({ label, id }) => (
                <NavigationItem key={id} active={active === id} onClick={() => onClick(id)}>
                  {label}
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
  const [active, setActive] = useState(items?.[0].id);
  const offset = useOffset();

  const handleClick = (id: string) => {
    setActive(id);
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
            {items?.map(({ label, id }) => (
              <li key={id}>
                <NavigationItem orientation="vertical" active={active === id} href="#" onClick={() => handleClick(id)}>
                  {label}
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
