import { Col, Container, Header, Line, Row } from "@components/atomic";
import React, { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Header variant="h1">Table of Contents</Header>
        <Row>
          <Col type={{ sm: 12, md: 6 }}>
            <Line />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
