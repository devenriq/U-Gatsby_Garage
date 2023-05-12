import React from "react";
import {
  BlockRendererProvider,
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";

const Page = (props) => {
  console.log(props);
  return (
    <BlockRendererProvider
      allBlocks={props.pageContext.blocks}
      renderComponent={(block) => {
        console.log(block);
        switch (block.name) {
          case "core/media-text": {
            const content = <BlockRenderer blocks={block.innerBlocks} />;

            return (
              <div
                key={block.id}
                style={getStyles(block)}
                className={getClasses(block)}
              >
                {block.attributes.mediaPosition === "right" && (
                  <div>{content}</div>
                )}
                <div>This will be the image</div>
                {block.attributes.mediaPosition !== "right" && (
                  <div>{content}</div>
                )}
              </div>
            );
          }
        }
      }}
    />
  );
};

export default Page;
