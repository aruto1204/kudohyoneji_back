import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/google-map-block", {
  apiVersion: 3,
  title: "Google Mapブロック",
  description: "Google Mapを埋め込むブロックです。",
  category: "embed",
  icon: "location-alt",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    mapUrl: {
      type: "string",
      default: "",
    },
    marginTop: {
      type: "string",
      default: "32px", // mt-8
    },
  },
  edit: Edit,
  save,
});
