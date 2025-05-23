import { AppShell, Stack } from "@mantine/core";
import ConnDetails from "./ConnDetails";
import {
  IconBook2,
  IconCpu,
  IconDownload,
  IconSettings,
  IconTerminal,
  IconTriangleSquareCircle,
  IconUsersGroup,
} from "@tabler/icons-react";
import NavLink from "./NavLink";
import Credit from "./Credit";

const Navbar = () => {
  return (
    <AppShell.Navbar p="xs">
      <AppShell.Section mb="md">
        <ConnDetails />
      </AppShell.Section>
      <AppShell.Section grow>
        <Stack gap={0}>
          <NavLink label="About" Icon={IconBook2} to="/about" startOpen>
            <NavLink
              label="OpenPin"
              Icon={IconTriangleSquareCircle}
              to="/about/openpin"
              match="/about/openpin/*?"
            />
            <NavLink
              label="Interposers"
              Icon={IconCpu}
              to="/about/interposers"
            />
            <NavLink
              label="Community"
              Icon={IconUsersGroup}
              to="/about/community"
            />
          </NavLink>
          <NavLink
            label="Installers"
            Icon={IconDownload}
            to="/installers"
            match="/installers/*?"
          />
          <NavLink label="Console" Icon={IconTerminal} to="/console" />
          <NavLink label="Settings" Icon={IconSettings} to="/settings" />
        </Stack>
      </AppShell.Section>
      <AppShell.Section>
        <Credit />
      </AppShell.Section>
    </AppShell.Navbar>
  );
};

export default Navbar;
