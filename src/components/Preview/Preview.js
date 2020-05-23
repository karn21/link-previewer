import React from "react";
import "./preview.css";

function Preview(props) {
  return (
    <section>
      <div className="preview-card">
        {props.preview_img && (
          <div
            className="preview-card-top"
            style={{
              background: `url(${props.preview_img}) center/cover no-repeat`,
            }}
          ></div>
        )}

        <div className="preview-card-body">
          <div className="preview-title">
            {props.data["og:title"] ||
              props.data["title"] ||
              props.data.heading}
          </div>
          <div className="preview-url">{props.data["og:url"] || props.url}</div>
          <div className="preview-description">
            <p>
              {props.data.description ||
                props.data["og:description"] ||
                props.data.Description ||
                props.data.explaination}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
