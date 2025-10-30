/**
 * Delivery Location Table Block
 * 配送拠点テーブルブロック
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-table", {
  apiVersion: 3,
  title: __("配送拠点テーブル", "my-custom-blocks"),
  description: __("配送拠点の営業情報を表示するテーブルブロック", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "editor-table",
  keywords: [__("delivery", "my-custom-blocks"), __("配送", "my-custom-blocks"), __("拠点", "my-custom-blocks"), __("テーブル", "my-custom-blocks")],
  attributes: {
    header1: {
      type: "string",
      default: "拠点",
    },
    header2: {
      type: "string",
      default: "配送地域",
    },
    header3: {
      type: "string",
      default: "祭日：営業",
    },
    header3RedText: {
      type: "string",
      default: "祭日：",
    },
    header4: {
      type: "string",
      default: "時間帯",
    },
    header5: {
      type: "string",
      default: "ご予約TEL",
    },
    rows: {
      type: "array",
      default: [
        {
          location: "燃料センター",
          area: "大館周辺：鷹巣",
          holiday: "日曜定休日",
          holidayIsRed: true,
          time: "8:00〜17:00",
          tel: "0186-49-3311",
        },
        {
          location: "小坂SS",
          area: "小坂町周辺：一部花輪可能",
          holiday: "日曜定休日",
          holidayIsRed: true,
          time: "8:00〜18:00",
          tel: "0186-29-3680",
        },
        {
          location: "花岡SS",
          area: "花岡町周辺：一部大館市内",
          holiday: "日曜定休日",
          holidayIsRed: true,
          time: "8:00〜18:00",
          tel: "0186-46-1076",
        },
        {
          location: "ハチ公SS",
          area: "大館周辺：比内町：十二所",
          holiday: "日曜配送可能",
          holidayIsRed: false,
          time: "8:00〜18:00",
          tel: "0186-42-8500",
        },
      ],
    },
    marginTop: {
      type: "string",
      default: "24px",
    },
  },
  edit,
  save,
});
