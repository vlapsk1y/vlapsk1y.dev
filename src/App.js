import { Text, Grid, Spacer, Container, Row } from "@nextui-org/react";
import { Box } from "./Box.js"
import { OwnLink } from "./OwnLink.js"

function App() {
  return (
    <div>
      <Spacer y={15}/>
      <center><Container fluid>
        <Row justify="center" align="center">
          <Text h1>My name is Vladimir</Text>
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
          <Text h4>
            I was born in the Russian Federation. I am 17 y.o, I am high school student. I self-taught software dev and work with various frameworks.
            <br/>
            Also at the moment don't have work which could be associated with my hobby. So if you need dev for low pay you could contact to me :)
          </Text>
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
            <Spacer/>
            <OwnLink name="razoom.art" url=""/>
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
             <OwnLink name="E-Mail" url="mailto:vladimirlapskiy@icloud.com" />
             <Spacer/>
             <OwnLink name="Spotify" url="https://open.spotify.com/user/9zmng96vufuviy756p92tb92n" />
            </Grid.Container>
        </Container>
        <Spacer y={8}/>
        <center>
        <Text color="#474646" h5>
            All peace.
          </Text>
        </center>
    </div>
  );
}

export default App;
