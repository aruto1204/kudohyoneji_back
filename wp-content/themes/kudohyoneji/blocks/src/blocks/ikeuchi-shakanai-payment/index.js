/**
 * Payment Method Block
 * お支払方法を表示するカード型ブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-payment", {
  apiVersion: 3,
  title: __("お支払方法ブロック", "my-custom-blocks"),
  description: __("お支払方法を表示するカード型ブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "money-alt",
  keywords: [__("payment", "my-custom-blocks"), __("支払", "my-custom-blocks"), __("決済", "my-custom-blocks")],
  attributes: {
    headerText: {
      type: "string",
      default: "お支払方法",
    },
    mainText: {
      type: "string",
      default: "現金、口座振替、クレジットカード",
    },
    noteText: {
      type: "string",
      default: "※クレジットカードでのお支払いには事前登録が必要です",
    },
    maxWidth: {
      type: "string",
      default: "668px",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
