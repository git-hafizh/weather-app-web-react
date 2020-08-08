import React from "react";
import "./App.css";
import WeatherLayout from "./components/WeatherLayout/WeatherLayout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div>
        <WeatherLayout/>
      </div>
    )
  }
}

export default App;
