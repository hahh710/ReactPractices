import React from "react";

const ApporvalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui buttons">
          <div className="ui basic green button">approved!</div>
          <div className="ui basic red button">rejected!</div>
        </div>
      </div>
    </div>
  );
};

export default ApporvalCard;
