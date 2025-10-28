/**
 * Text Block
 * レスポンシブ対応のメッセージテキストブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/text-block", {
  apiVersion: 3,
  title: __("テキストブロック", "my-custom-blocks"),
  description: __("テキストブロック", "my-custom-blocks"),
  category: "customBlocks",
  icon: "format-quote",
  keywords: [__("text", "my-custom-blocks")],
  attributes: {
    text: {
      type: "string",
      default: "テキストを入力してください",
    },
    textColor: {
      type: "string",
      default: "#383838",
    },
    fontSize: {
      type: "string",
      default: "18px",
    },
    fontWeight: {
      type: "string",
      default: "500",
    },
    lineHeight: {
      type: "string",
      default: "1.66",
    },
    letterSpacing: {
      type: "string",
      default: "0em",
    },
    textAlign: {
      type: "string",
      default: "left",
    },
    maxWidth: {
      type: "string",
      default: "100%",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
