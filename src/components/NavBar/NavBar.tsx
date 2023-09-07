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
          <h3>J-Y</h3>
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link  as={Link} to="/" isActive={location.pathname === "/" ? "true" : ""}>
          <h3>Home</h3>
          </Navbar.Link>
          <Navbar.Link as={Link} to="/projets" isActive={location.pathname === "/projets" ? "true" : ""}><h3>Projets</h3></Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Loading type="gradient" color={LoadingColor}  />
        </Navbar.Content>
      </Navbar>
    </>
  );
}

export default NavBar;
