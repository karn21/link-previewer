import React, { Component } from "react";
import axios from "axios";
import "./main.css";
import Skeleton from "./skeleton/Skeleton";
import Preview from "./Preview/Preview";

axios.defaults.timeout = 8000;

export class Main extends Component {
  state = {
    url: "",
    error: "",
    loading: false,
    data: "",
    preview_img: "",
    preview_title: "",
    preview_url: "",
    preview_description: "",
  };

  handleChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  handleClear = () => {
    this.setState({
      url: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      data: "",
      loading: true,
      preview_img: "",
      preview_title: "",
      preview_url: "",
      preview_description: "",
    });
    const base_url = this.state.url.split("://");
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
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
          url: url,
        });
        // set image
        const image = res.data["og:image"];
        if (image.includes("http://") || image.includes("https://")) {
          this.setState({
            preview_img: image,
          });
        } else {
          const preview_img = url + image;
          this.setState({
            preview_img: preview_img,
          });
        }
      })
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
          <button type="reset" className="red" onClick={this.handleClear}>
            Clear
          </button>
          <button type="submit">Submit</button>
        </form>

        {this.state.loading && <Skeleton></Skeleton>}
        {this.state.data && (
          <Preview
            data={this.state.data}
            preview_img={this.state.preview_img}
            url={this.state.url}
          ></Preview>
        )}
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
