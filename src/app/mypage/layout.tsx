import { ReactNode } from "react";

type Props = {
  params: Record<string, string>;
  children: ReactNode;
};

const Layout = async ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
