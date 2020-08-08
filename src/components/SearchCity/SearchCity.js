import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input, Button, Row } from "reactstrap";
import "./SearchCity.scss";

class SearchCity extends React.Component {
  state = {
    city: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.city === "") {
      alert("City cannot be empty");
    } else {
      this.props.SearchingCity(this.state.city);
      this.setState({
        city: ""
      })
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="formCity">
        <Row>
          <Button type="submit">
            <span>
              <FiSearch size={20} />
            </span>
          </Button>
          <Input
            name="city"
            onChange={this.onChange}
            value={this.state.city}
            placeholder="Search for places..."
          />
        </Row>
      </form>
    );
  }
}

export default SearchCity;
