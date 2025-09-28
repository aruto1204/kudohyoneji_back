import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/link-button-block", {
  apiVersion: 3,
  title: "リンクボタンブロック",
  description: "メーカーサイトへのリンクボタンを表示するブロックです。",
  category: "common",
  icon: "button",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    buttonText: {
      type: "string",
      default: "リンクテキスト",
    },
    buttonUrl: {
      type: "string",
      default: "/",
    },
    backgroundColor: {
      type: "string",
      default: "#22c55e", // green-500
    },
    textColor: {
      type: "string",
      default: "#ffffff",
    },
    borderColor: {
      type: "string",
      default: "#22c55e", // green-500
    },
    hoverTextColor: {
      type: "string",
      default: "#22c55e", // green-500
    },
    hoverBackgroundColor: {
      type: "string",
      default: "#ffffff",
    },
    marginTop: {
      type: "string",
      default: "48px", // mt-12
    },
    marginTopMd: {
      type: "string",
      default: "93px", // md:mt-23.25
    },
    openInNewTab: {
      type: "boolean",
      default: true,
    },
  },
  edit: Edit,
  save,
});
