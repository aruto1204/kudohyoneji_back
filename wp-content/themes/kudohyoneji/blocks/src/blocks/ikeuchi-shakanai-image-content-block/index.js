/**
 * Ikeuchi Shakanai Image Content Block
 * 画像とコンテンツを左右に配置するレイアウトブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-image-content-block", {
  apiVersion: 3,
  title: __("イメージカラムコンテンツ", "my-custom-blocks"),
  description: __("画像とコンテンツを左右に配置するレイアウトブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "images-alt2",
  keywords: [__("image", "my-custom-blocks"), __("画像", "my-custom-blocks"), __("コンテンツ", "my-custom-blocks")],
  attributes: {
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
    captionText: {
      type: "string",
      default: "灯油メーカーローリー配送",
    },
  },
  edit,
  save,
});
