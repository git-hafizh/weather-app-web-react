import React from "react";
import { Card } from "reactstrap";
import "./AirPressure.scss";

const AirPressure = (props) => {
  return (
    <Card>
      <span className="title">Air Pressure</span>
      <br />
      <span className="number">
        {props.air_pressure}
        <span className="mbar">mbar</span>
      </span>
    </Card>
  );
};

export default AirPressure;
