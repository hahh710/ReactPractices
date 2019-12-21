import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "it's HOT",
    iconName: "sun"
  },
  winter: {
    text: "It's CHILLY",
    iconName: "snowflake"
  }
};
/*
Northern Hemisphere
Winter = 9- 2

Southern Hemisphere 
Winter = 3,4,5,6,7,8 
*/
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, props.date);
  console.log(season);
  //ES6 syntax
  const { text, iconName } = seasonConfig[season]; // it will pull out the variables depends on the season.

  //putting Logic into the JSX it could give spaghetti code,Therefore, Let's make new variable
  return (
      
/* className can contain multiple Names depends on the logic that's why we are using ``(templateLiteral) with ${} to decide   */
    <div className={`season-display ${season}`}>
      {/* `${variable name }  this is called as template literal  */}
      <i className={`icon-left massive ${iconName} icon `} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
