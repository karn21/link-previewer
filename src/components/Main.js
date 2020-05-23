import React, { Component } from "react";
import axios from "axios";
import "./main.css";
import Skeleton from "./skeleton/Skeleton";

axios.defaults.timeout = 8000;

export class Main extends Component {
  state = {
    url: "",
    error: "",
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
    const base_url = this.state.url.split("://");
    console.log(base_url);
    var url = "";
    base_url[1]
      ? (url = "http://" + base_url[1])
      : (url = "http://" + base_url[0]);

    console.log(url);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const data = {
      url: url,
    };
    axios
      .post("/preview/", data, config)
      .then((res) =>
        this.setState({
          data: res.data,
          loading: false,
        })
      )
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(err);
      });
  };
  render() {
    return (
      <section>
        <h1 className="heading">Link Previewer</h1>

        <p>
          Check how your webpage's link preview will look like on various
          platforms.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Enter the website url :</label>
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
        {this.state.data && <h4>Content Received</h4>}
        <p className="text-center text-white">
          Made with <span style={{ color: "red" }}>&#10084;</span> by{" "}
          <a href="http://karan.codes" className="text-warning">
            Karan Maurya
          </a>
        </p>
      </section>
    );
  }
}

export default Main;
