import React from "react";
import { Card, Row } from "reactstrap";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./SunTime.scss";

const SunTime = (props) => {
  return (
    <Card>
      <span className="title">Sunrise & Sunset</span>
      <br />
      <div className="square">
        <Row>
          <div className="circle1">
            <FaArrowUp />
          </div>
          {props.sun_rise}
        </Row>
        <Row>
          <div className="circle2">
            <FaArrowDown />
          </div>
          {props.sun_set}
        </Row>
      </div>
    </Card>
  );
};

export default SunTime;
