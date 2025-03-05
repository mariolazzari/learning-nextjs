import SideNav from "@/components/sidenav";
import { Layout } from "@/types/Layout";

function RootLayout({ children }: Layout) {
  return (
    <>
      <SideNav />
      {children}
    </>
  );
}

export default RootLayout;
