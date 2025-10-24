import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/section-title-block", {
  apiVersion: 3,
  title: "セクションタイトルブロック",
  description: "セクションのタイトルを表示するブロックです。",
  category: "customBlocks",
  icon: "heading",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    titleText: {
      type: "string",
      default: "セクションタイトル",
    },
    marginTop: {
      type: "string",
      default: "106px", // mt-26.5 (26.5 * 0.25rem = 6.625rem = 106px)
    },
    marginBottom: {
      type: "string",
      default: "0px",
    },
  },
  edit: Edit,
  save,
});
