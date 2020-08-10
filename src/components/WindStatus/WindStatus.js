import React from "react";
import { Card } from "reactstrap";
import "./WindStatus.scss";

const WindStatus = (props) => {
  return (
    <Card>
      <span className="title">Wind Status</span>
      <br />
      <span className="number">
        {props.wind_speed}
        <span className="speed"> km/h</span>
      </span>
    </Card>
  );
};

export default WindStatus;
