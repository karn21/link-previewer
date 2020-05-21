import React, { Component } from "react";
import axios from "axios";

export class Main extends Component {
  state = {
    url: "",
  };

  handleChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const data = {
      url: this.state.url,
    };
    console.log(document.cookie, "hello");
    axios
      .post("/preview/", data, config)
      .then((res) => console.log(res))
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
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default Main;
