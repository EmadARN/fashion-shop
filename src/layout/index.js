import FooterMd from "./Footer/FooterMd";
import FooterXs from "./Footer/FooterXs";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <FooterMd />
      <FooterXs />
    </div>
  );
};

export default Layout;
