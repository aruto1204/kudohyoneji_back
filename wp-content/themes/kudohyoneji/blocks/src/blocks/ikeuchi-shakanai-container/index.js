import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/ikeuchi-shakanai-container", {
  apiVersion: 3,
  title: __("問い合わせ先コンテナブロック", "my-custom-blocks"),
  description: __("石油事業部への問い合わせセクション。内部に他のブロックを配置できます。", "my-custom-blocks"),
  category: "ikeuchi_shakanai_center",
  icon: "email",
  supports: {
    html: false,
  },
  attributes: {
    headerText: {
      type: "string",
      default: "ご不明な点は、石油事業部まで",
    },
    marginTop: {
      type: "string",
      default: "50px",
    },
  },
  edit,
  save,
});
