import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/inner-container-block", {
  apiVersion: 3,
  title: "内側コンテナブロック",
  description: "内側にコンテナを配置できるブロック。",
  category: "customBlocks",
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
      default: "#EDF9F3",
    },
    borderRadius: {
      type: "string",
      default: "0px",
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
    padding: {
      type: "boolean",
      default: false,
    },
  },
  edit: Edit,
  save,
});
