/**
 * Products Results Block
 * 制作実績ブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/products-results", {
  apiVersion: 3,
  title: __("制作実績ブロック", "my-custom-blocks"),
  description: __("営業部　化工品の制作実績を表示するブロック", "my-custom-blocks"),
  category: "processed_products",
  icon: "format-quote",
  keywords: [__("text", "my-custom-blocks")],
  attributes: {
    text: {
      type: "string",
      default: "テキストを入力してください",
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
