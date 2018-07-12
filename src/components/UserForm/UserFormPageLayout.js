import React from "react";

export default function UserFormPageLayout(prop) {
  // const style = {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   marginLeft: 40
  // };
  console.log(prop, "Prop");
  return (
    <div>
      {/* <NavigationComponent {...prop} /> */}
      <div>
        {prop.children[0]}
        {prop.children[1]}
      </div>
    </div>
  );
}
