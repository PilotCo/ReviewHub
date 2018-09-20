import React from "react";
import "./title.css";

//Create the Header of our homepage as a component.
const Title = props =>
  <div className="title">

	    <h1 id="siteTitle">{props.title}</h1>
	    <h2 id="logo">{props.verbiage}</h2>

  </div>

export default Title;