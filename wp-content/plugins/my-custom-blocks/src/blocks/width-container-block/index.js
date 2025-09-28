import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/width-container-block", {
  apiVersion: 3,
  title: "幅調整コンテナブロック",
  description: "最大幅を調整できるコンテナ。内部に他のブロックを配置できます。",
  category: "layout",
  icon: "align-center",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    maxWidth: {
      type: "string",
      default: "1200px",
    },
    backgroundColor: {
      type: "string",
      default: "#ffffff",
    },
    borderRadius: {
      type: "string",
      default: "20px",
    },
    marginTop: {
      type: "string",
      default: "50px",
    },
    marginBottom: {
      type: "string",
      default: "0px",
    },
    paddingTop: {
      type: "string",
      default: "20px",
    },
    paddingBottom: {
      type: "string",
      default: "20px",
    },
    paddingInline: {
      type: "string",
      default: "0px",
    },
    centerContent: {
      type: "boolean",
      default: true,
    },
  },
  edit: Edit,
  save,
});
