/**
 * Wholesale Title Block
 * コンテンツタイトル画像ブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/wholesale-title-block", {
  apiVersion: 3,
  title: __("コンテンツタイトルイメージ", "my-custom-blocks"),
  description: __("卸売事業用のタイトル・説明・画像を含むブロック", "my-custom-blocks"),
  category: "wholesale",
  icon: "heading",
  keywords: [__("wholesale", "my-custom-blocks"), __("title", "my-custom-blocks"), __("image", "my-custom-blocks")],
  attributes: {
    title: {
      type: "string",
      default: "タイトル",
    },
    subTitle: {
      type: "string",
      default: "サブタイトル",
    },
    bodyText: {
      type: "string",
      default: "本文テキスト",
    },
    imageUrl: {
      type: "string",
      default: "",
    },
    imageId: {
      type: "number",
      default: 0,
    },
    imageAlt: {
      type: "string",
      default: "",
    },
    imageMaxWidth: {
      type: "string",
      default: "386px",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
