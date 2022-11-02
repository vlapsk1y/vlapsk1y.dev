import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import React from "react";

function CardLink(link, site, account, image) {
  return  (
    <Card css={{ w: "70%", h: "300px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://sun9-38.userapi.com/impg/rTMSgpF8OB-AXZ2C0fXtsRn_gUMOZOuoUhBxmQ/nXURXvlG_Cc.jpg?size=1280x720&quality=95&sign=30bdf9959b1c8b31fd95825bfa180aae&type=album"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="vk.comd"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <Text color="#d1d1d1" size={18}>
                Vladimir Lapskiy
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#FFFFFF", bg: "#F0F0F0" }}
            >
              <Text
                css={{ color: "black" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Go
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  );
}