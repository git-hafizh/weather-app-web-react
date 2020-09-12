import React from "react";
import { Card, Row } from "reactstrap";
import "./MaxMin.scss";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

const MaxMin = (props) => {
  return (
    <Card>
      <span className="title">Max & Min Temperature</span>
      <br />
      <div className="squareTemp">
        <Row>
          <div className="circleRed">
            <FaTemperatureHigh />
          </div>
          {props.maxDis}&deg;
        </Row>
        <Row>
          <div className="circleBlue">
            <FaTemperatureLow />
          </div>
          {props.minDis}&deg;
        </Row>
      </div>
    </Card>
  );
};

export default MaxMin;
