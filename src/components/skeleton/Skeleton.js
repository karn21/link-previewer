import React from "react";
import "./skeleton.css";

function Skeleton() {
  return (
    <section>
      <div className="skeleton-card">
        <div className="skeleton-card-top"></div>
        <div className="skeleton-card-body">
          <div className="skeleton-title"></div>
          <div className="skeleton-url"></div>
          <div className="skeleton-description">
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skeleton;
