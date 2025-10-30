/**
 * Ikeuchi Shakanai Service Table Block
 * タンク洗浄特別価格テーブルブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-service-table", {
  apiVersion: 3,
  title: __("タンク洗浄特別価格テーブル", "my-custom-blocks"),
  description: __("タンク洗浄サービスと特別価格テーブルを表示するブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "editor-table",
  keywords: [__("service", "my-custom-blocks"), __("table", "my-custom-blocks"), __("タンク洗浄", "my-custom-blocks"), __("特別価格", "my-custom-blocks")],
  attributes: {
    serviceName: {
      type: "string",
      default: "タンク洗浄",
    },
    servicePrice: {
      type: "string",
      default: "6,500",
    },
    servicePriceUnit: {
      type: "string",
      default: "円税込",
    },
    serviceDescription: {
      type: "string",
      default: "タンク洗浄時に\n一緒に交換するとお得です！",
    },
    header1: {
      type: "string",
      default: "品名",
    },
    header2: {
      type: "string",
      default: "通常価格（税込）",
    },
    header3: {
      type: "string",
      default: "特別価格（税込）",
    },
    rows: {
      type: "array",
      default: [
        { itemName: "ストレーナー交換", normalPrice: "10,000円", specialPrice: "3,500円", isSpecialColspan: false },
        { itemName: "カップ交換", normalPrice: "6,500円", specialPrice: "1,000円", isSpecialColspan: false },
        { itemName: "フィルター交換", normalPrice: "6,500円", specialPrice: "1,500円", isSpecialColspan: false },
        { itemName: "ケージ交換", normalPrice: "6,000円", specialPrice: "3,500円", isSpecialColspan: false },
        { itemName: "送油配管交換", normalPrice: "別途見積もり", specialPrice: "", isSpecialColspan: true },
      ],
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
