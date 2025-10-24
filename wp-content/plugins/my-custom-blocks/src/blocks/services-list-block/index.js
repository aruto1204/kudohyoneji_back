import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/services-list-block", {
  apiVersion: 3,
  title: "取扱サービスリストブロック(Plugin)",
  description: "店舗で提供しているサービスを選択して表示するブロックです。",
  category: "common",
  icon: "editor-ul",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    selectedServices: {
      type: "array",
      default: [],
    },
    marginTop: {
      type: "string",
      default: "48px", // mt-8
    },
  },
  edit: Edit,
  save,
});
