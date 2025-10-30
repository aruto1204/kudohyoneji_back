/**
 * Ikeuchi Shakanai Tips Block
 * Tipsブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-tips", {
  apiVersion: 3,
  title: __("Tipsブロック", "my-custom-blocks"),
  description: __("Tips情報を表示するブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "lightbulb",
  keywords: [__("tips", "my-custom-blocks"), __("ヒント", "my-custom-blocks"), __("情報", "my-custom-blocks")],
  attributes: {
    marginTop: {
      type: "string",
      default: "64px",
    },
    taglineText: {
      type: "string",
      default: "軽油はポリタンクに給油できる！",
    },
    titleText: {
      type: "string",
      default: "ただし緑色のポリ缶で涼しく日光が当たらない場所に保管がベスト",
    },
    bodyText: {
      type: "string",
      default: "軽油は緑色のポリタンクで貯蔵が可能。青や赤色は灯油用として作られているのが多いため軽油用として作られている緑色のポリ缶を使うように。軽油の貯蔵には200L未満なら特に規制はありませんが危険物のため直射日光を避けて涼しい場所に保管。",
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
      default: "イメージ画像",
    },
  },
  edit,
  save,
});
