import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./WeatherLayout.scss";
import { WiDayCloudy } from "react-icons/wi";
import axios from "axios";
import SearchCity from "../SearchCity/SearchCity";

class WeatherLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      title: "",
      cityNumber: null,
      typeWeather: "",
      minTemp: 0,
      maxTemp: 0,
      theTemp: 0,
      theIcon: ""
    };
  }

  SearchingCity = async (city) => {
    const weatherAPI = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api"
    await axios
      .get(
        `${weatherAPI}/location/search/?query=${city}`
      )
      .then((result) => {
        let cityID = result.data[0].woeid;
        let cityName = result.data[0].title;
        this.setState({
          city: cityID,
          title: cityName
        });
      }).catch(() => alert("City is not listed"))

    let cityID = this.state.city;
    await axios
      .get(
        `${weatherAPI}/location/${cityID}`
      )
      .then((result) => {
        console.log(result);
        const type_Weather = result.data.consolidated_weather[0].weather_state_name;
        const min_Temp = result.data.consolidated_weather[0].min_temp;
        const max_Temp = result.data.consolidated_weather[0].max_temp;
        const the_Temp = result.data.consolidated_weather[0].the_temp;
        const the_Icon = result.data.consolidated_weather[0].weather_state_abbr;

        this.setState({
          typeWeather: type_Weather,
          minTemp: min_Temp.toString().slice(0, 4),
          maxTemp: max_Temp.toString().slice(0, 4),
          theTemp: the_Temp.toString().slice(0, 4),
          theIcon: the_Icon,
        });
      });
  };

  render() {
    const {theTemp, title, theIcon, typeWeather} = this.state;
    const icoWeather = `https://www.metaweather.com/static/img/weather/${theIcon}.svg`;

    return (
      <Container>
        <Row>
          <Col md={3} className="vert-1">
            <Card className="weather-search">
              <SearchCity
                city={this.state.city}
                SearchingCity={this.SearchingCity}
              />
            </Card>
            <Card>
              <span className="cityName">{title}</span>
              <span>
                <img alt="" src={icoWeather} />
              </span>
              <span className="typeWeather">{typeWeather}</span>
            </Card>
            <Card>
              <div className="weather-temp">
                {theTemp}
                <span className="temp-degree">&deg;C</span>
              </div>
            </Card>
            <Card>
              <div className="weather-date">Monday, 16:00</div>
            </Card>
          </Col>
          <Col md={9} className="vert-2">
            <Card className="up">
              <CardBody>
                Friday
                <br />
                <span className="weather-icon">
                  <WiDayCloudy />
                </span>
                <br />
                12<span className="temp-degree">&deg;C</span>
              </CardBody>
            </Card>
            <Card className="down">
              <span className="header-title">Today's Highlight</span>
              <Row>
                <Col md={4}>
                  <Card>
                    <span className="title">UV Index</span>
                    <br />
                    <span className="number">17</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <span className="title">UV Index</span>
                    <br />
                    <span className="number">17</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <span className="title">UV Index</span>
                    <br />
                    <span className="number">17</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Card>
                    <span className="title">UV Index</span>
                    <br />
                    <span className="number">17</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <span className="title">UV Index</span>
                    <br />
                    <span className="number">17</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <span className="title">UV Index</span>
                    <br />
                    <span className="number">17</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WeatherLayout;
