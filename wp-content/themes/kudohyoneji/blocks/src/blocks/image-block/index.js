/**
 * Image Block
 * 画像ブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/image-block", {
  apiVersion: 3,
  title: __("画像ブロック", "my-custom-blocks"),
  description: __("画像を含むブロック", "my-custom-blocks"),
  category: "customBlocks",
  icon: "format-image",
  supports: {
    align: ["wide", "full"],
  },
  attributes: {
    imageUrl: {
      type: "string",
      default: "",
    },
    imageId: {
      type: "number",
      default: 0,
    },
    imageAlt: {
      type: "string",
      default: "",
    },
    imageMaxWidth: {
      type: "string",
      default: "386px",
    },
    align: {
      type: "string",
      default: "center",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
