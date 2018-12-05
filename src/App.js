import React, { Component } from "react";
import SearchAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAppBar />
        <Footer />
      </div>
    );
  }
}

export default App;
