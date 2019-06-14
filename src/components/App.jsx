import React, { Component } from 'react';
// import '../assets/styles/debug.css';
import '../assets/styles/style.sass';
import '../assets/styles/style.css';
import Footer from './Footer/Footer'
import Content from './Content/Content'

class App extends Component {
  render() {
    return (
      <div>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
