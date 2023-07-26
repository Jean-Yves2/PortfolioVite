import { Navbar, Text, Loading } from "@nextui-org/react";
import { useEffect, useState } from "react";

function NavBar() {
  const [LoadingColor, setLoadingColor] = useState("secondary");

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
          <Navbar.Link isActive href="#">
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Profil</Navbar.Link>
          <Navbar.Link href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Loading type="gradient" color={LoadingColor}  />
        </Navbar.Content>
      </Navbar>
    </>
  );
}

export default NavBar;
