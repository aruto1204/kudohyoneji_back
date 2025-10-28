/**
 * Table Block
 * 事業者証明テーブルブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/business-certificate-table", {
  apiVersion: 3,
  title: __("事業者証明テーブル", "my-custom-blocks"),
  description: __("事業者証明テーブル表示ブロック", "my-custom-blocks"),
  category: "sales_maintenance",
  icon: "editor-table",
  keywords: [__("table", "my-custom-blocks"), __("テーブル", "my-custom-blocks"), __("表", "my-custom-blocks")],
  attributes: {
    tableTitle: {
      type: "string",
      default: "液化石油ガス販売事業者証",
    },
    row1Label: {
      type: "string",
      default: "登録番号",
    },
    row1Value: {
      type: "string",
      default: "秋田県知事　05A2008号",
    },
    row2Label: {
      type: "string",
      default: "登録年月日",
    },
    row2Value: {
      type: "string",
      default: "平成9年4月1日",
    },
    row3Label: {
      type: "string",
      default: "氏名又は名称",
    },
    row3Value: {
      type: "string",
      default: "株式会社工藤米治商店",
    },
    row4Label: {
      type: "string",
      default: "代表者の氏名",
    },
    row4Value: {
      type: "string",
      default: "代表取締役　田山洋平",
    },
    row5Label: {
      type: "string",
      default: "販売所の名称及び所在地",
    },
    row5Value: {
      type: "string",
      default: "㈱工藤米治商店　大館市常盤木町8-9",
    },
    marginTop: {
      type: "string",
      default: "0px",
    },
  },
  edit,
  save,
});
