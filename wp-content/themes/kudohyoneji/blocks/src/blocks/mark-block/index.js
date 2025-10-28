/**
 * Sales Maintenance Mark Block
 * 囲みテキストブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/mark-block", {
  apiVersion: 3,
  title: __("囲みテキスト", "my-custom-blocks"),
  description: __("ブラケットで囲まれたテキストブロック", "my-custom-blocks"),
  category: "customBlocks",
  icon: "heading",
  keywords: [__("bracket", "my-custom-blocks"), __("text", "my-custom-blocks"), __("囲み", "my-custom-blocks")],
  attributes: {
    text: {
      type: "string",
      default: "テキストを入力してください",
    },
    maxWidth: {
      type: "string",
      default: "642px",
    },
    fontSizeMd: {
      type: "string",
      default: "30px",
    },
    fontSizeSm: {
      type: "string",
      default: "24px",
    },
    fontSizeXs: {
      type: "string",
      default: "20px",
    },
    letterSpacing: {
      type: "string",
      default: "0.05em",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
