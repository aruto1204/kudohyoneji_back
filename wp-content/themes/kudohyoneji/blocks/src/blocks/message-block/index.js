/**
 * Message Block
 * レスポンシブ対応のメッセージテキストブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/message-block", {
  apiVersion: 3,
  title: __("メッセージブロック", "my-custom-blocks"),
  description: __("メッセージテキストブロック", "my-custom-blocks"),
  category: "customBlocks",
  icon: "format-quote",
  keywords: [__("message", "my-custom-blocks"), __("text", "my-custom-blocks"), __("responsive", "my-custom-blocks")],
  attributes: {
    messageText: {
      type: "string",
      default: "テキストを入力してください",
    },
    textColor: {
      type: "string",
      default: "#0B8B4B",
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
    marginTop: {
      type: "string",
      default: "0px",
    },
    clientId: {
      type: "string",
    },
  },
  edit,
  save,
});
