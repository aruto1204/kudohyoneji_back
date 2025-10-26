import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/service-container-block", {
  apiVersion: 3,
  title: "コンテナブロック",
  description: "サービスステーション内のコンテナ。内部に他のブロックを配置できます。",
  category: "station",
  icon: "admin-page",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    backgroundColor: {
      type: "string",
      default: "#ffffff",
    },
    borderRadius: {
      type: "string",
      default: "20px",
    },
    marginTop: {
      type: "string",
      default: "50px",
    },
    marginBottom: {
      type: "string",
      default: "50px",
    },
    paddingTop: {
      type: "string",
      default: "42px",
    },
    paddingBottom: {
      type: "string",
      default: "76px",
    },
  },
  deprecated: [
    {
      attributes: {
        backgroundColor: {
          type: "string",
          default: "#ffffff",
        },
        marginTop: {
          type: "string",
          default: "20px",
        },
        marginBottom: {
          type: "string",
          default: "20px",
        },
        paddingTop: {
          type: "string",
          default: "20px",
        },
        paddingBottom: {
          type: "string",
          default: "20px",
        },
      },
      save({ attributes }) {
        const { backgroundColor, marginTop, marginBottom, paddingTop, paddingBottom } = attributes;

        const blockProps = useBlockProps.save({
          className: "container-block-wrapper",
          style: {
            "--bg-color": backgroundColor,
            "--margin-top": marginTop,
            "--margin-bottom": marginBottom,
            "--padding-top": paddingTop,
            "--padding-bottom": paddingBottom,
          },
        });

        return wp.element.createElement("div", blockProps, wp.element.createElement(InnerBlocks.Content));
      },
    },
  ],
  edit: Edit,
  save,
});
