/**
 * Ikeuchi Shakanai Banner Block
 * キャンペーンバナーブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-banner", {
  apiVersion: 3,
  title: __("キャンペーンバナー", "my-custom-blocks"),
  description: __("特別価格やキャンペーン情報を表示するバナーブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "megaphone",
  keywords: [__("banner", "my-custom-blocks"), __("campaign", "my-custom-blocks"), __("キャンペーン", "my-custom-blocks")],
  attributes: {
    mainText: {
      type: "string",
      default: "期間中だけの特別価格　",
    },
    highlightText: {
      type: "string",
      default: "今なら水抜き剤付き♪",
    },
    maxWidth: {
      type: "string",
      default: "915px",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
