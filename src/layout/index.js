import FooterMd from "./Footer/FooterMd";
import FooterXs from "./Footer/FooterXs";
import NavBar from "./NavBar/NavBar";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
  const pathname = usePathname();
  let showNavFooter = true;
  if (pathname === "/signIn") {
    showNavFooter = false;
  }
  return (
    <div>
      {showNavFooter && <NavBar />}
      {children}
      {showNavFooter && <FooterMd />} {showNavFooter && <FooterXs />}
    </div>
  );
};

export default Layout;
