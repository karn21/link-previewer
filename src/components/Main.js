import React, { Component } from "react";
import axios from "axios";
import "./main.css";
import Skeleton from "./skeleton/Skeleton";

export class Main extends Component {
  state = {
    url: "",
    loading: false,
    data: "",
  };

  handleChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const data = {
      url: this.state.url,
    };
    axios
      .post("/preview/", data, config)
      .then((res) =>
        this.setState({
          data: res.data,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <section>
        <h1 className="heading">Preview your Webpage.</h1>
        <p>
          Check how your webpage's link preview will look like on various
          platforms.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Website url :</label>
          <input
            type="text"
            placeholder="https://example.com"
            value={this.state.url}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.loading && <Skeleton></Skeleton>}
        {this.state.data && <h4>COntent Received</h4>}
      </section>
    );
  }
}

export default Main;
