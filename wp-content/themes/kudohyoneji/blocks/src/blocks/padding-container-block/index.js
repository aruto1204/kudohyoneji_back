import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/padding-container-block", {
  apiVersion: 3,
  title: "パディングコンテナブロック",
  description: "左右にパディングを配置するレイアウト",
  category: "customBlocks",
  icon: "layout",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit: Edit,
  save,
});
