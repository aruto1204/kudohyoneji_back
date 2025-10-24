import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
// saveをインポートしない
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
    // imageUrl, imageAlt, imageId は不要になる
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
  save: () => null, // Dynamic Blockなのでnullを返す
});
