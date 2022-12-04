import { Text, Grid, Spacer, Container, Row } from "@nextui-org/react";
import { Box } from "./Box.js"
import { OwnLink } from "./OwnLink.js"

function App() {
  return (
    <div>
      <Spacer y={15}/>
      <center><Container fluid>
        <Row justify="center" align="center">
          <Text h1>My name is Vladimir.</Text>
        </Row>
      </Container></center>

      <Spacer y={8}/>

      <Container fluid>
        <center>
        <Text h1>
          About me
        </Text>
        </center>
        <Box>
        <Row justify="center" align="center">
          <center>
            <Text h4>
              I am 17 y.o. I self-taught software dev and work with various technologies.
              <br/>
              Also at the moment don't have work which could be associated with my hobby. So if you need dev for low pay you could contact to me :)
            </Text>
          </center>
        </Row>
        </Box>
        </Container>

        <Spacer y={3}/>

        <Container fluid>
          <center>
            <Text h1>
              Member of projects
            </Text>
          </center>
          <Grid.Container gap={2} justify="center">
          <OwnLink name="OpenVK" url="https://github.com/openvk" />
          </Grid.Container>
        </Container>

        <Spacer y={3}/>

        <Container fluid>
          <center>
          <Text h1>
            Contact me & links
          </Text>
          </center>
          <Grid.Container gap={2} justify="center">
             <OwnLink name="GitHub" url="https://github.com/vlapsk1y" />
             <Spacer/>
             <OwnLink name="VK" url="https://vk.com/vlapskiy" />
             <Spacer/>
             <OwnLink name="Telegram" url="https://t.me/vlapsk1y" />
             <Spacer/>
             <OwnLink name="Shikimori" url="https://shikimori.one/el-psy-congroo" />
             <Spacer/>
             <OwnLink name="Matrix" url="https://matrix.to/#/@vlapskiy:matrix.org" />
             <Spacer/>
             <OwnLink name="Spotify" url="https://open.spotify.com/user/9zmng96vufuviy756p92tb92n" />
            </Grid.Container>
        </Container>
        <Spacer y={4}/>
        <center>
        <Text color="#474646" h5>
            2022-{new Date().getFullYear()} © by Vladimir Lapskiy
          </Text>
        </center>
    </div>
  );
}

export default App;
