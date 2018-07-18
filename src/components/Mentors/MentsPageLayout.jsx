import React from "react";

export default function MentsPageLayout(prop) {
  const style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 40
  };
  let cards = prop.children.map(child => child);
  return (
    <div>
      <div style={style}>{cards}</div>
    </div>
  );
}
