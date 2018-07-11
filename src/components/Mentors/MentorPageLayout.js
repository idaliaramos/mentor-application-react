import React from "react";
// import NavigationComponent from '../nav/NavigationComponent';

export default function MentorsPageLayout(prop) {
  const style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 40
  };
  console.log(prop, "Prop");
  return (
    <div>
      {/* <NavigationComponent {...prop} /> */}
      <div style={style}>
        {prop.children[0]}
        {prop.children[1]}
        {prop.children[2]}
        {prop.children[3]}
        {prop.children[4]}
      </div>
    </div>
  );
}
