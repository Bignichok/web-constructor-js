import image from "../assets/image.jpg";
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from "../classes/bloks";

export const model = [
  new TitleBlock("Site constructor on JavaScript!", {
    tag: "h2",

    styles: {
      background: "linear-gradient(to right, #ff0099,#493240)",
      color: "#ffffff",
      padding: "2rem",
      "text-align": "center",
    },
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "this is image",
  }),

  new ColumnsBlock(
    ["App on pure JS without libraries", "Solid principals", "handmade UI"],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        display: "flex",
        "justify-content": "space-between",
        "text-align": "center",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),

  new TextBlock("here we go with some text", {
    styles: {
      background: "linear-gradient(to left,#f2994a,#f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
