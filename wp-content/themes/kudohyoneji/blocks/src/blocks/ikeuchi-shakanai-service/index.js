/**
 * Ikeuchi Shakanai Service Block
 * 配送サービスブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-service", {
  apiVersion: 3,
  title: __("池内車内配送サービスブロック", "my-custom-blocks"),
  description: __("配送サービス情報を表示するブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "admin-site",
  keywords: [__("service", "my-custom-blocks"), __("配送", "my-custom-blocks"), __("サービス", "my-custom-blocks")],
  attributes: {
    marginTop: {
      type: "string",
      default: "0px",
    },
    mainText: {
      type: "string",
      default: "産業用重機、フォークリフト、ユンボなど 配達地区については、お問い合わせ ご予約くださいませ。",
    },
    smallImageUrl: {
      type: "string",
      default: "",
    },
    smallImageId: {
      type: "number",
      default: 0,
    },
    smallImageAlt: {
      type: "string",
      default: "イメージ画像",
    },
    largeImageUrl: {
      type: "string",
      default: "",
    },
    largeImageId: {
      type: "number",
      default: 0,
    },
    largeImageAlt: {
      type: "string",
      default: "イメージ画像",
    },
  },
  edit,
  save,
});
