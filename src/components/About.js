import React from "react";

function About(props) {
  const defaultImage = "https://via.placeholder.com/215";
  return (
    <div>
      <aside>
        <img src={props.image || defaultImage} alt="blog logo" />
        <p>{props.about}</p>
      </aside>
    </div>
  );
}

export default About;
