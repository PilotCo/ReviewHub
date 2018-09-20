import React from "react";
import "./topicDescription.css";

const topicDescription = props =>
  <div className="topicDescription">
    <div className="head">{props.head}</div>
    <div className="homeRowDescription">
        {props.description}
    </div>
  </div>

export default topicDescription;