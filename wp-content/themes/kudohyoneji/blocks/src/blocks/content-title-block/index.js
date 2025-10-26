/**
 * Content Title Block
 * 2カラムレイアウトのコンテンツタイトルブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/content-title-block", {
  apiVersion: 3,
  title: __("コンテンツタイトル", "my-custom-blocks"),
  description: __("2カラムレイアウトのコンテンツタイトルブロック", "my-custom-blocks"),
  category: "customBlocks",
  icon: "heading",
  keywords: [__("content", "my-custom-blocks"), __("title", "my-custom-blocks"), __("2column", "my-custom-blocks")],
  attributes: {
    mainTitle: {
      type: "string",
      default: "メインタイトル",
    },
    subTitle: {
      type: "string",
      default: "サブタイトル",
    },
    bodyText: {
      type: "string",
      default: "本文テキスト",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
    enableMinWidth: {
      type: "boolean",
      default: false,
    },
    isTwoColumn: {
      type: "boolean",
      default: true,
    },
  },
  edit,
  save,
});
