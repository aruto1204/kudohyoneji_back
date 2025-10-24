import { registerBlockType } from "@wordpress/blocks";
// import { useBlockProps } from "@wordpress/block-editor";
import Edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/services-list-block", {
  apiVersion: 3,
  title: "取扱サービスリストブロック",
  description: "店舗で提供しているサービスを選択して表示するブロックです。",
  category: "common",
  icon: "editor-ul",
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes: {
    selectedServices: {
      type: "array",
      default: [],
    },
    marginTop: {
      type: "string",
      default: "48px", // mt-8
    },
  },
  // プラグイン版からの移行対応（deprecated設定）
  // deprecated: [
  //   {
  //     attributes: {
  //       selectedServices: {
  //         type: "array",
  //         default: [],
  //       },
  //       marginTop: {
  //         type: "string",
  //         default: "48px",
  //       },
  //     },
  //     save({ attributes }) {
  //       const { selectedServices, marginTop } = attributes;
  //       const PLUGIN_URL = "/wp-content/plugins/my-custom-blocks/";

  //       const AVAILABLE_SERVICES = [
  //         {
  //           id: "drive_one",
  //           label: "出光公式アプリ",
  //           image: `${PLUGIN_URL}assets/images/has_drive_one.webp`,
  //         },
  //         {
  //           id: "oil_change",
  //           label: "オイル交換",
  //           image: `${PLUGIN_URL}assets/images/has_oil_change.webp`,
  //         },
  //         {
  //           id: "apollostation_keeper",
  //           label: "カーコーディング",
  //           image: `${PLUGIN_URL}assets/images/has_apollostation_keeper.webp`,
  //         },
  //         {
  //           id: "auto_flat_new_car",
  //           label: "新車カーリース",
  //           image: `${PLUGIN_URL}assets/images/has_auto_flat_new_car.webp`,
  //         },
  //         {
  //           id: "auto_flat_used_car",
  //           label: "中古車カーリース",
  //           image: `${PLUGIN_URL}assets/images/has_auto_flat_used_car.webp`,
  //         },
  //         {
  //           id: "denki_tokuwari",
  //           label: "idemitsuでんき特割",
  //           image: `${PLUGIN_URL}assets/images/has_denki_tokuwari.webp`,
  //         },
  //       ];

  //       const displayedServices = AVAILABLE_SERVICES.filter((service) => selectedServices.includes(service.id));

  //       if (displayedServices.length === 0) {
  //         return null;
  //       }

  //       const blockProps = useBlockProps.save({
  //         className: "services-list-block-wrapper",
  //       });

  //       return (
  //         <div {...blockProps}>
  //           <div className="services-container" style={{ maxWidth: "702px", marginTop: marginTop || "48px" }}>
  //             <p className="services-title">取扱サービス</p>
  //             <ul className="services-list">
  //               {displayedServices.map((service) => (
  //                 <li key={service.id} className="service-item">
  //                   <img src={service.image} alt="アイコン" width="70" height="70" className="service-icon" loading="lazy" />
  //                   <p className="service-label">{service.label}</p>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ],
  edit: Edit,
  save,
});
