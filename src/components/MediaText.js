import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const MediaText = (
  verticalAlignment,
  style,
  className,
  mediaPosition,
  gatsbyImage,
  children
) => {
  const content = (
    <div
      className={`flex flex-col p-4 ${
        verticalAlignment === "center" ? "items center justify-center" : ""
      } `}
    >
      {children}
    </div>
  );

  return (
    <div style={style} className={className}>
      {mediaPosition === "right" && content}
      <div>
        <GatsbyImage alt="" image={gatsbyImage} />
      </div>
      {mediaPosition !== "right" && content}
    </div>
  );
};
