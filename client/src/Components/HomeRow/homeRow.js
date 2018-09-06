import React from "react";
import "./homeRow.css";

// var styling={
//   backgroundImage: `url(${Background})`
// }
//Create the Header of our homepage as a component.
const HomeRow = props =>
  <div className="homeRow">

	    <div className="imageHolder" style={{ backgroundImage: `url(${props.image})` }}>
        <p>text</p>
      </div>

  </div>

export default HomeRow;