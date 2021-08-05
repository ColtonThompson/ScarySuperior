import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import PointsBreakdown from './components/PointsBreakdown';

function App() {
  return (
    <React.Fragment>
      <div class='container'>
        <Header />
        <Leaderboard></Leaderboard>
        <PointsBreakdown />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
