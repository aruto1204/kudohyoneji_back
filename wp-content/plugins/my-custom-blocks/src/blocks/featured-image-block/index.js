import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/featured-image-block", {
  apiVersion: 3,
  title: "アイキャッチ画像ブロック",
  description: "投稿/固定ページのアイキャッチ画像を表示するブロックです。",
  category: "media",
  icon: "format-image",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    imageUrl: {
      type: "string",
      default: "",
    },
    imageAlt: {
      type: "string",
      default: "",
    },
    imageId: {
      type: "number",
      default: 0,
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
    marginBottom: {
      type: "string",
      default: "0px",
    },
    imageSize: {
      type: "string",
      default: "full",
    },
  },
  edit: Edit,
  save,
});
