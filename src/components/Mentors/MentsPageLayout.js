import React from "react";
// import NavigationComponent from '../nav/NavigationComponent';

export default function MentsPageLayout(prop) {
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
        {prop.children[5]}
        {prop.children[6]}
        {prop.children[7]}
      </div>
    </div>
  );
}
