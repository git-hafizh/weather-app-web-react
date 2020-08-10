import React from "react";
import { Card } from "reactstrap";
import "./Visibility.scss";

const Visibility = (props) => {
  return (
    <Card>
      <span className="title">Visibility</span>
      <br />
      <span className="number">
        {props.visibility}
        <span className="km"> km</span>
      </span>
    </Card>
  );
};

export default Visibility;
