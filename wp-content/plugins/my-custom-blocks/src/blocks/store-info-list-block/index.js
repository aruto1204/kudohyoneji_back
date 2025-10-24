import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/store-info-list-block", {
  apiVersion: 3,
  title: "店舗情報リストブロック(Plugin)",
  description: "店舗の基本情報（店名、住所、電話、営業時間など）を表示するリストブロックです。",
  category: "common",
  icon: "list-view",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    storeName: {
      type: "string",
      default: "",
    },
    address: {
      type: "string",
      default: "",
    },
    phone: {
      type: "string",
      default: "",
    },
    businessHours: {
      type: "string",
      default: "",
    },
    optionalItems: {
      type: "array",
      default: [],
    },
    marginTop: {
      type: "string",
      default: "42px",
    },
  },
  edit: Edit,
  save,
});
