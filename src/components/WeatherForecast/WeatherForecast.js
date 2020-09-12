import React from "react";
import { Card, CardBody } from "reactstrap";
import "./WeatherForecast.scss";

const WeatherForecast = (props) => {
  return (
    <Card className="top">
      <CardBody>
        {props.day}
        <br />
        <span className="weather-icon">{props.icon}</span>
        <br />
        <span className="temp-full">
          {props.max}
          <span className="temp-degree">&deg;C</span> - {props.min}
          <span className="temp-degree">&deg;C</span>
        </span>
      </CardBody>
    </Card>
  );
};

export default WeatherForecast;
