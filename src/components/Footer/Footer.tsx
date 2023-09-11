import { Card, Text } from "@nextui-org/react";
import "./Footer.scss";
function Footer() {
  return (
    <footer >
      <Card  css={{borderRadius:0,
    backgroundColor: '#1d1d1d'}}>
        <Card.Body >
          <Text className="textFooter">© copyright - Tous droits réservés</Text>
        </Card.Body>
      </Card>
    </footer>
  );
}

export default Footer;