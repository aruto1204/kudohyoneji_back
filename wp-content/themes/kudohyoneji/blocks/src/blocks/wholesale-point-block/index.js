/**
 * Wholesale Point Block
 * 外販ポイントブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/wholesale-point-block", {
  apiVersion: 3,
  title: __("外販ポイント", "my-custom-blocks"),
  description: __("施工前後の比較画像を含む外販ポイントブロック", "my-custom-blocks"),
  category: "wholesale",
  icon: "layout",
  keywords: [__("wholesale", "my-custom-blocks"), __("point", "my-custom-blocks"), __("before", "my-custom-blocks"), __("after", "my-custom-blocks")],
  attributes: {
    bodyText: {
      type: "string",
      default: "本文テキスト",
    },
    beforeImageUrl: {
      type: "string",
      default: "",
    },
    beforeImageId: {
      type: "number",
      default: 0,
    },
    beforeImageAlt: {
      type: "string",
      default: "",
    },
    afterImageUrl: {
      type: "string",
      default: "",
    },
    afterImageId: {
      type: "number",
      default: 0,
    },
    afterImageAlt: {
      type: "string",
      default: "",
    },
    bottomImageUrl: {
      type: "string",
      default: "",
    },
    bottomImageId: {
      type: "number",
      default: 0,
    },
    bottomImageAlt: {
      type: "string",
      default: "",
    },
    rightImageUrl: {
      type: "string",
      default: "",
    },
    rightImageId: {
      type: "number",
      default: 0,
    },
    rightImageAlt: {
      type: "string",
      default: "",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
