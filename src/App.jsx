import React, { Component } from 'react';
import './App.scss';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Footer from './components/footer.jsx';

//function App() {
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
