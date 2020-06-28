import React, { Component } from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>    
          {/* Header */}
          <Header/>
          {/*conatiner*/}
          <Main/>
        {/* Footer */}
          <Footer/>
      </div>
    );
  }
}

export default App;
