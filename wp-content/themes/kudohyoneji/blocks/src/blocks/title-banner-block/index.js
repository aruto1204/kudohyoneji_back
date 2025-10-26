/**
 * Title Banner Block
 * 背景がブロックで囲まれたタイトルブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/title-banner-block", {
  apiVersion: 3,
  title: __("タイトルバナーブロック", "my-custom-blocks"),
  description: __("背景がブロックで囲まれたタイトルブロック", "my-custom-blocks"),
  category: "customBlocks",
  icon: "format-aside",
  keywords: [__("title", "my-custom-blocks"), __("banner", "my-custom-blocks"), __("heading", "my-custom-blocks")],
  attributes: {
    titleText: {
      type: "string",
      default: "テキストを入力してください",
    },
    backgroundColor: {
      type: "string",
      default: "#0B8B4B",
    },
    textColor: {
      type: "string",
      default: "#ffffff",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
