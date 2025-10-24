/**
 * Page Title Block
 * ページタイトルとサブタイトルを表示するブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/page-title", {
  apiVersion: 3,
  title: __("ページタイトルブロック", "my-custom-blocks"),
  description: __("ページタイトルとサブタイトルを表示するブロック", "my-custom-blocks"),
  category: "common",
  icon: "heading",
  keywords: [__("title", "my-custom-blocks"), __("heading", "my-custom-blocks"), __("page", "my-custom-blocks")],
  attributes: {
    title: {
      type: "string",
      default: "",
    },
    subtitle: {
      type: "string",
      default: "サブタイトル（英語）",
    },
  },
  edit,
  save,
});
