import { MantineProvider } from "@mantine/core";

export const Providers = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};
