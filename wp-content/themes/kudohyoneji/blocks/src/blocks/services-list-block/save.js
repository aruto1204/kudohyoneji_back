import { useBlockProps } from "@wordpress/block-editor";

// テーマ版用のアセットパス（プラグインからテーマに移行）
const THEME_URL = window.location.origin + "/wp-content/themes/kudohyoneji/";

// 利用可能なサービスのマスターリスト（テーマ版）
const AVAILABLE_SERVICES = [
  {
    id: "drive_one",
    label: "出光公式アプリ",
    image: `${THEME_URL}assets/images/07_station/has_drive_one.webp`,
  },
  {
    id: "oil_change",
    label: "オイル交換",
    image: `${THEME_URL}assets/images/07_station/has_oil_change.webp`,
  },
  {
    id: "apollostation_keeper",
    label: "カーコーディング",
    image: `${THEME_URL}assets/images/07_station/has_apollostation_keeper.webp`,
  },
  {
    id: "auto_flat_new_car",
    label: "新車カーリース",
    image: `${THEME_URL}assets/images/07_station/has_auto_flat_new_car.webp`,
  },
  {
    id: "auto_flat_used_car",
    label: "中古車カーリース",
    image: `${THEME_URL}assets/images/07_station/has_auto_flat_used_car.webp`,
  },
  {
    id: "denki_tokuwari",
    label: "idemitsuでんき特割",
    image: `${THEME_URL}assets/images/07_station/has_denki_tokuwari.webp`,
  },
];

export default function save({ attributes }) {
  const { selectedServices, marginTop } = attributes;

  // 選択されているサービスのみをフィルタリング
  const displayedServices = AVAILABLE_SERVICES.filter((service) => selectedServices.includes(service.id));

  // サービスが選択されていない場合は何も表示しない
  if (displayedServices.length === 0) {
    return null;
  }

  const blockProps = useBlockProps.save({
    className: "services-list-block-wrapper",
  });

  return (
    <div {...blockProps}>
      <div className="services-container" style={{ maxWidth: "702px", marginTop: marginTop || "48px" }}>
        <p className="services-title">取扱サービス</p>
        <ul className="services-list">
          {displayedServices.map((service) => (
            <li key={service.id} className="service-item">
              <img src={service.image} alt="アイコン" width="70" height="70" className="service-icon" loading="lazy" />
              <p className="service-label">{service.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
