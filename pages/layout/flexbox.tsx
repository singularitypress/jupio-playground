import { Col, Container, Header, Line, Row } from "@components/atomic";
import Head from "next/head";
import React from "react";

export default () => {
  return (
    <>
      <Head>
        <title>Layouts with Flexbox</title>
      </Head>
      <Container className="mt-3 mb-3">
        <Row>
          <Col type={{ sm: 12, md: 6 }}>
            <Header variant="h1">How to use Flexbox To Do Stuff</Header>
            <p>
              If you want a good cheatsheet for how flexbox works, you can find
              it{" "}
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                here.
              </a>{" "}
              This is for common practical applications of Flex.
            </p>
            <Line />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col type={{ sm: 12, md: 6 }}>
            <Header variant="h2" className="mb-3">
              Vertical Centering
            </Header>
            <p>
              This is people's white whale when it comes to CSS and layouts, and
              it doesn't have to be (unless you're using IE6).
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
