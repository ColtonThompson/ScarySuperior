import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import PointsBreakdown from './components/PointsBreakdown';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs lg='2'></Col>
          <Col md='auto'>
            <Header />
            <Leaderboard></Leaderboard>
            <PointsBreakdown />
            <Footer />
          </Col>
          <Col xs lg='2'></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
