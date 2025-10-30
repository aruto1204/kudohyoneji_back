/**
 * Numbered List Block
 * 番号付きリストブロック - レスポンシブ対応
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/numbered-list-block", {
  apiVersion: 3,
  title: __("番号付きリストブロック", "my-custom-blocks"),
  description: __("番号付きリスト表示ブロック", "my-custom-blocks"),
  category: "sales_maintenance",
  icon: "editor-ol",
  keywords: [__("numbered", "my-custom-blocks"), __("list", "my-custom-blocks"), __("ordered", "my-custom-blocks")],
  attributes: {
    item1: {
      type: "string",
      default: "日常における質の高い業務を通じ、お客さまから厚い信頼を獲得すること。",
    },
    item2: {
      type: "string",
      default: "お客さまのご要望に対し、適切なエネルギー･利用機器・サービスを提供できること。",
    },
    item3: {
      type: "string",
      default: "お客さまの一番頼れる存在になり、ファーストコールをいただける存在となること。",
    },
    maxWidth: {
      type: "string",
      default: "796px", // max-w-199 (199 * 0.25rem * 16 = 796px)
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
