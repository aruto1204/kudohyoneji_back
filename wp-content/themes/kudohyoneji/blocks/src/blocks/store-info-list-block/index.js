import { registerBlockType } from "@wordpress/blocks";
// import { useBlockProps } from "@wordpress/block-editor";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/store-info-list-block", {
  apiVersion: 3,
  title: "店舗情報リストブロック",
  description: "店舗の基本情報（店名、住所、電話、営業時間など）を表示するリストブロックです。",
  category: "station",
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
  // プラグイン版からの移行対応（deprecated設定）
  // deprecated: [
  //   {
  //     attributes: {
  //       storeName: {
  //         type: "string",
  //         default: "",
  //       },
  //       address: {
  //         type: "string",
  //         default: "",
  //       },
  //       phone: {
  //         type: "string",
  //         default: "",
  //       },
  //       businessHours: {
  //         type: "string",
  //         default: "",
  //       },
  //       optionalItems: {
  //         type: "array",
  //         default: [],
  //       },
  //       marginTop: {
  //         type: "string",
  //         default: "42px",
  //       },
  //     },
  //     save({ attributes }) {
  //       const { storeName, address, phone, businessHours, optionalItems, marginTop } = attributes;

  //       const blockProps = useBlockProps.save({
  //         className: "store-info-list-block-wrapper",
  //       });

  //       return (
  //         <div {...blockProps}>
  //           <ul className="store-info-list" style={{ maxWidth: "702px", marginTop: marginTop || "42px" }}>
  //             <li className="store-info-item">
  //               <p className="store-info-label">店　　名</p>
  //               <p className="store-info-value">{storeName}</p>
  //             </li>
  //             <li className="store-info-item">
  //               <p className="store-info-label">住　　所</p>
  //               <p className="store-info-value">{address}</p>
  //             </li>
  //             <li className="store-info-item">
  //               <p className="store-info-label">電　　話</p>
  //               <p className="store-info-value">{phone}</p>
  //             </li>
  //             <li className="store-info-item">
  //               <p className="store-info-label">営業時間</p>
  //               <p className="store-info-value" dangerouslySetInnerHTML={{ __html: businessHours.replace(/\n/g, "<br />") }}></p>
  //             </li>
  //             {optionalItems.map((item, index) => (
  //               <li key={index} className="store-info-item">
  //                 <p className="store-info-label">{item.label}</p>
  //                 <p className="store-info-value" dangerouslySetInnerHTML={{ __html: item.value.replace(/\n/g, "<br />") }}></p>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       );
  //     },
  //   },
  // ],
  edit: Edit,
  save,
});
