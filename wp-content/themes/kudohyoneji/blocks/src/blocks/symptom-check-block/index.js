/**
 * Symptom Check Block
 * 症状チェックブロック - レスポンシブ対応
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/symptom-check-block", {
  apiVersion: 3,
  title: __("症状チェックブロック", "my-custom-blocks"),
  description: __("症状チェックリスト表示ブロック", "my-custom-blocks"),
  category: "housing_equipment",
  icon: "list-view",
  keywords: [__("symptom", "my-custom-blocks"), __("check", "my-custom-blocks"), __("list", "my-custom-blocks")],
  attributes: {
    questionText: {
      type: "string",
      default: "こんな症状はありませんか？",
    },
    symptomList: {
      type: "string",
      default: "・サンプルテキスト",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
