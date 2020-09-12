import React from "react";
import { Card } from "reactstrap";
import "./Humidity.scss";

const Humidity = (props) => {
  return (
    <Card id="humidity">
      <span className="title">Humidity</span>
      <br />
      <div className="wrapHumidity">
        <span className="number">{props.humidity}</span>
        <span className="percentage">%</span>
      </div>
    </Card>
  );
};

export default Humidity;
