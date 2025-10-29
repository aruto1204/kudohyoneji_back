import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-app", {
  apiVersion: 3,
  title: __("Drive Onアプリブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "smartphone",
  attributes: {
    marginTop: {
      type: "string",
      default: "32px",
    },
    bannerText: {
      type: "string",
      default: "新規会員募集中!!",
    },
    mainTitle: {
      type: "string",
      default: "Drive Onアプリで<br />サクッと決済。",
    },
    subText: {
      type: "string",
      default: "おサイフもクレジットカードも<br />取り出さずに給油ができる<br />アプリ決済ツールです。",
    },
    leftImageUrl: {
      type: "string",
      default: "",
    },
    leftImageId: {
      type: "number",
      default: 0,
    },
    leftImageAlt: {
      type: "string",
      default: "イメージ画像",
    },
    leftImageMaxWidth: {
      type: "string",
      default: "210px",
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
      default: "イメージ画像",
    },
    rightImageMaxWidth: {
      type: "string",
      default: "163px",
    },
  },
  edit,
  save,
});
