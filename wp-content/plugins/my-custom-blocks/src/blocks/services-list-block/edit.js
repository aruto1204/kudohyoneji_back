import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, CheckboxControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";
const PLUGIN_URL = window.myCustomBlocksPluginUrl || "/wp-content/plugins/my-custom-blocks";
// 利用可能なサービスのマスターリスト
const AVAILABLE_SERVICES = [
  {
    id: "drive_one",
    label: "出光公式アプリ",
    image: `${PLUGIN_URL}/assets/images/has_drive_one.webp`,
  },
  {
    id: "oil_change",
    label: "オイル交換",
    image: `${PLUGIN_URL}/assets/images/has_oil_change.webp`,
  },
  {
    id: "apollostation_keeper",
    label: "カーコーディング",
    image: `${PLUGIN_URL}/assets/images/has_apollostation_keeper.webp`,
  },
  {
    id: "auto_flat_new_car",
    label: "新車カーリース",
    image: `${PLUGIN_URL}/assets/images/has_auto_flat_new_car.webp`,
  },
  {
    id: "auto_flat_used_car",
    label: "中古車カーリース",
    image: `${PLUGIN_URL}/assets/images/has_auto_flat_used_car.webp`,
  },
  {
    id: "denki_tokuwari",
    label: "idemitsuでんき特割",
    image: `${PLUGIN_URL}/assets/images/has_denki_tokuwari.webp`,
  },
];

export default function Edit({ attributes, setAttributes }) {
  const { selectedServices, marginTop } = attributes;

  // サービスの選択状態を切り替え
  const toggleService = (serviceId) => {
    const newSelectedServices = selectedServices.includes(serviceId) ? selectedServices.filter((id) => id !== serviceId) : [...selectedServices, serviceId];
    setAttributes({ selectedServices: newSelectedServices });
  };

  // 選択されているサービスのみをフィルタリング
  const displayedServices = AVAILABLE_SERVICES.filter((service) => selectedServices.includes(service.id));

  const containerStyle = {
    maxWidth: "702px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: marginTop || "48px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "1.5",
    marginBottom: "20px",
  };

  const listStyle = {
    maxWidth: "660px", // 165 * 4 = 660px
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "16px",
    marginTop: "20px",
    listStyle: "none",
    padding: 0,
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const imageStyle = {
    maxWidth: "40px",
    width: "100%",
    height: "auto",
    aspectRatio: "1",
  };

  const textStyle = {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.5",
    margin: 0,
  };

  const blockProps = useBlockProps({
    className: "services-list-block-wrapper",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("表示するサービスを選択", "my-custom-blocks")} initialOpen={true}>
          <div style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
            <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{__("表示したいサービスにチェックを入れてください", "my-custom-blocks")}</p>
          </div>

          {AVAILABLE_SERVICES.map((service) => (
            <CheckboxControl key={service.id} label={service.label} checked={selectedServices.includes(service.id)} onChange={() => toggleService(service.id)} />
          ))}
        </PanelBody>

        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
          <UnitControl
            label={__("上マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={containerStyle}>
          <p style={titleStyle}>取扱サービス</p>

          {displayedServices.length > 0 ? (
            <ul style={listStyle}>
              {displayedServices.map((service) => (
                <li key={service.id} style={itemStyle}>
                  <img src={service.image} alt="アイコン" style={imageStyle} />
                  <p style={textStyle}>{service.label}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div
              style={{
                padding: "40px 20px",
                textAlign: "center",
                backgroundColor: "#f9fafb",
                border: "2px dashed #ddd",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              <p style={{ margin: 0, color: "#666" }}>{__("右サイドバーから表示するサービスを選択してください", "my-custom-blocks")}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
