import { Navbar, Text, Loading } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [LoadingColor, setLoadingColor] = useState("secondary");
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingColor((LoadingColor) => {
        return LoadingColor === "secondary" ? "error" : "secondary";
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
      <Navbar isBordered variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            J-Y
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link  as={Link} to="/" isActive={location.pathname === "/" ? "true" : ""}>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/profil" isActive={location.pathname === "/profil" ? "true" : ""}>Profil</Navbar.Link>
          <Navbar.Link as={Link} to="/projects" isActive={location.pathname === "/projects" ? "true" : ""}>Projects</Navbar.Link>
          <Navbar.Link as={Link} to="/contact" isActive={location.pathname === "/contact" ? "true" : ""}>Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Loading type="gradient" color={LoadingColor}  />
        </Navbar.Content>
      </Navbar>
    </>
  );
}

export default NavBar;
