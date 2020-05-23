import React from "react";
import "./preview.css";

function Preview(props) {
  return (
    <section>
      <div className="preview-card">
        <div
          className="preview-card-top"
          style={{
            background: `url(${props.data["og:image"]}) center/cover no-repeat`,
          }}
        ></div>
        <div className="preview-card-body">
          <div className="preview-title">{props.data["og:title"]}</div>
          <div className="preview-url">{props.data["og:url"]}</div>
          <div className="preview-description">
            <p>{props.data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
