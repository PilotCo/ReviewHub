import React from "react";
import "./homeRow.css";

const HomeRow = props =>
  <div className="homeRow">

	    <div id={props.title.toLowerCase()} className="imageHolder" data-id={props.title.toLowerCase()} onClick={props.click} style={{ backgroundImage: `url(${props.image})` }}>
        <div className={props.titleClass} data-id={props.title.toLowerCase()}>{props.title}</div>
      </div>
      <div id={`${props.title.toLowerCase()}Info`} className={`information ${props.description}`} style={{display:'none'}}>
        {props.descriptionText}
      </div>
  </div>

export default HomeRow;