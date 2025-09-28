import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import save from "./save";

registerBlockType("my-custom-blocks/hero-block", {
  apiVersion: 3,
  title: "ヒーローブロック",
  description: "大きな見出しと背景画像を持つヒーローセクション",
  category: "common",
  icon: "format-image",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    title: {
      type: "string",
      default: "ようこそ",
    },
    subtitle: {
      type: "string",
      default: "サブタイトルをここに入力",
    },
    buttonText: {
      type: "string",
      default: "詳しく見る",
    },
    buttonUrl: {
      type: "string",
      default: "#",
    },
    backgroundImage: {
      type: "string",
      default: "",
    },
    textColor: {
      type: "string",
      default: "#ffffff",
    },
    overlayOpacity: {
      type: "number",
      default: 0.5,
    },
  },
  edit: Edit,
  save,
});
