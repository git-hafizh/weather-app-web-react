import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import "./WeatherLayout.scss";
import axios from "axios";
import SearchCity from "../SearchCity/SearchCity";
import moment from "moment";
import WindStatus from "../WindStatus/WindStatus";
import SunTime from "../SunTime/SunTime";
import Humidity from "../Humidity/Humidity";
import Visibility from "../Visibilty/Visibility";
import AirPressure from "../AirPressure/AirPressure";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import MaxMin from "../MaxMin/MaxMin";

class WeatherLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      title: "",
      cityNumber: null,
      minTemp: 0,
      maxTemp: 0,
      theTemp: 0,
      windSpeed: 0,
      visibility: 0,
      air_pressure: 0,
      theDate: "Monday, 0:00 AM",
      theIcon: "",
      Datas: [],
      Datas2: [],
      Datas3: []
    };
  }

  SearchingCity = async (city) => {
    const weatherAPI =
      "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api";
    await axios
      .get(`${weatherAPI}/location/search/?query=${city}`)
      .then((result) => {
        let cityID = result.data[0].woeid;
        let cityName = result.data[0].title;
        this.setState({
          city: cityID,
          title: cityName,
        });
      })
      .catch(() => alert("City is not listed"));

    let cityID = this.state.city;
    await axios.get(`${weatherAPI}/location/${cityID}`).then((result) => {
      const min_Temp = result.data.consolidated_weather[0].min_temp;
      const max_Temp = result.data.consolidated_weather[0].max_temp;
      const the_Temp = result.data.consolidated_weather[0].the_temp;
      const wind_Speed = result.data.consolidated_weather[0].wind_speed;
      const the_Visibility = result.data.consolidated_weather[0].visibility;
      const the_AirPressure = result.data.consolidated_weather[0].air_pressure;
      const the_Icon = result.data.consolidated_weather[0].weather_state_abbr;
      const the_Date = result.data.time;

      //Data 1
      const _Datas = result.data.consolidated_weather[0];

      //Data 2
      const _Datas2 = result.data;

      //Data 3
      const _Datas3 = result.data.consolidated_weather;

      //formatting date
      const the_DateMoment = moment(the_Date).format("LLLL");
      const the_DateSlice = the_DateMoment.split(" ");
      let dateArr = the_DateSlice,
        removeDateFromIndex = [1, 2, 3];

      for (var i = removeDateFromIndex.length - 1; i >= 0; i--)
        dateArr.splice(removeDateFromIndex[i], 1);

      let _dateSliced = dateArr.join(" ");
      //

      this.setState({
        minTemp: min_Temp.toString().slice(0, 4),
        maxTemp: max_Temp.toString().slice(0, 4),
        theTemp: the_Temp.toString().slice(0, 4),
        windSpeed: wind_Speed.toString().slice(0, 4),
        visibility: parseInt(the_Visibility),
        air_pressure: parseFloat(the_AirPressure),
        theIcon: the_Icon,
        theDate: _dateSliced,
        Datas: _Datas,
        Datas2: _Datas2,
        Datas3: _Datas3
      });
    });
  };

  render() {
    const {
      theTemp,
      title,
      theIcon,
      theDate,
      windSpeed,
      visibility,
      air_pressure,
      Datas,
      Datas2,
      Datas3
    } = this.state;

    //weather forecast
    const day = Datas3.map(item => {
      return moment(item.applicable_date).format("dddd");
    });

    const icon = Datas3.map(item => {
      return item.weather_state_abbr;
    })

    console.log(icon)
    
    const min = Datas3.map(item => {
      return parseInt(item.min_temp);
    })
    
    const max = Datas3.map(item => {
      return parseInt(item.max_temp);
    })

    //icon
    const icoWeather = `https://www.metaweather.com/static/img/weather/${theIcon}.svg`;

    //sun
    const sunRise = moment(Datas2.sun_rise || 0).format("LT");
    const sunSet = moment(Datas2.sun_set || 0).format("LT");

    //weather name
    const typeWeather = Datas.weather_state_name;

    //humidity
    const theHumidity = Datas.humidity || 0;

    //visibilty convert miles to km
    const convertVisibility = (visibility * 1.60934).toFixed(1);

    //air pressure
    const theAirPressure = air_pressure.toFixed(1);

    //maxmin
    const maxDis = parseInt(Datas.max_temp) || 0;
    const minDis = parseInt(Datas.min_temp) || 0;

    return (
      <div className="main">
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
                <div className="weather-date">{theDate}</div>
              </Card>
            </Col>
            <Col md={9} className="vert-2">
              <div className="wrap">
                <div className="mapForecast">
                <WeatherForecast day={day[0]} icon={<img src={`https://www.metaweather.com/static/img/weather/${icon[0]}.svg`} alt=""/>} min={min[0]} max={max[0]} />
                <WeatherForecast day={day[1]} icon={<img src={`https://www.metaweather.com/static/img/weather/${icon[1]}.svg`} alt=""/>} min={min[1]} max={max[1]} />
                <WeatherForecast day={day[2]} icon={<img src={`https://www.metaweather.com/static/img/weather/${icon[2]}.svg`} alt=""/>} min={min[2]} max={max[2]} />
                <WeatherForecast day={day[3]} icon={<img src={`https://www.metaweather.com/static/img/weather/${icon[3]}.svg`} alt=""/>} min={min[3]} max={max[3]} />
                <WeatherForecast day={day[4]} icon={<img src={`https://www.metaweather.com/static/img/weather/${icon[4]}.svg`} alt=""/>} min={min[4]} max={max[4]} />
                <WeatherForecast day={day[5]} icon={<img src={`https://www.metaweather.com/static/img/weather/${icon[5]}.svg`} alt=""/>} min={min[5]} max={max[5]} />
                </div>
                <Card className="bottom">
                  <span className="header-title">Today's Highlight</span>
                  <Row>
                    <Col md={4}>
                      <MaxMin maxDis={maxDis} minDis={minDis}/>
                    </Col>
                    <Col md={4}>
                      <WindStatus wind_speed={windSpeed} />
                    </Col>
                    <Col md={4}>
                      <SunTime sun_rise={sunRise} sun_set={sunSet} />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Humidity humidity={theHumidity} />
                    </Col>
                    <Col md={4}>
                      <Visibility visibility={convertVisibility} />
                    </Col>
                    <Col md={4}>
                      <AirPressure air_pressure={theAirPressure} />
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WeatherLayout;
