// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#376080"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Link href="https://github.com/twitter/d3kit">
            <Heading textSize="6em" size={1} lineHeight={1} textColor="black">
              d3Kit
            </Heading>
            </Link>
            <Heading size={1} fit caps>
              For reusable &amp; responsive chart
            </Heading>
            <Text textSize="1em" margin="70px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote lineHeight={100}>Good programmers need to be both lazy and dumb.</Quote>
              <Cite>Philipp Lenssen</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade"]}>
            <Heading size={1} fit>
              Use d3Kit if you want to
            </Heading>
            <List>
              <ListItem>Scaffold D3 chart in svg quickly</ListItem>
              <ListItem>Use D3 margin convention</ListItem>
              <ListItem>Use D3 with canvas</ListItem>
              <ListItem>Create a reusable chart</ListItem>
              <ListItem>Create a responsive chart, i.e., always fit container</ListItem>
              <ListItem>Create a responsive chart that maintains aspect ratio</ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Scaffold a chart</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Original
                </Heading>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/plain-d3margin.example")}
                  margin="0 0 0 -1px"
                />
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  With d3Kit
                </Heading>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/scaffold-svg-js.example")}
                  margin="0 0 0 1px"
                />
                <CodePane
                  lang="html"
                  source={require("raw!../assets/scaffold-svg-html.example")}
                  margin="1px 0 0 1px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Also support <code>&lt;canvas&gt;</code></Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Original
                </Heading>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/plain-d3margin-canvas.example")}
                />
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  With d3Kit
                </Heading>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/scaffold-canvas-js.example")}
                  margin="0 0 0 1px"
                />
                <CodePane
                  lang="html"
                  source={require("raw!../assets/scaffold-canvas-html.example")}
                  margin="1px 0 0 1px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading fit caps>Create a reusable chart</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/reusable.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading fit caps>Create a reusable chart</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/reusable-use.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading fit caps>Make chart fit container</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/fit1.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading fit caps>Make chart responsive</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/fit2.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Link href="https://github.com/twitter/d3kit">
              <Heading size={1} fit textColor="tertiary">
                github.com/twitter/d3kit
              </Heading>
            </Link>
            <Text textColor="tertiary">
              @kristw &amp; @trebor
            </Text>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
