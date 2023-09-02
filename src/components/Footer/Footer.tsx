import { Card, Text } from "@nextui-org/react";
import "./Footer.scss";
function Footer() {
  return (
    <footer >
      <Card  css={{borderRadius:0}}>
        <Card.Body>
          <Text className="textFooter">© 2023 Jean-Yves</Text>
        </Card.Body>
      </Card>
    </footer>
  );
}

export default Footer;
