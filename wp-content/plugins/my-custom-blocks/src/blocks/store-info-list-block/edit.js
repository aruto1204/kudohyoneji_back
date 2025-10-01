import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const { storeName, address, phone, businessHours, optionalItems, marginTop } = attributes;

  // 新しいオプション項目を追加
  const addOptionalItem = () => {
    const newItems = [...optionalItems, { label: "", value: "" }];
    setAttributes({ optionalItems: newItems });
  };

  // オプション項目を削除
  const removeOptionalItem = (index) => {
    const newItems = optionalItems.filter((_, i) => i !== index);
    setAttributes({ optionalItems: newItems });
  };

  // オプション項目を更新
  const updateOptionalItem = (index, field, value) => {
    const newItems = [...optionalItems];
    newItems[index][field] = value;
    setAttributes({ optionalItems: newItems });
  };

  const containerStyle = {
    maxWidth: "702px",
    width: "100%",
    marginTop: marginTop || "42px",
    marginLeft: "auto",
    marginRight: "auto",
    listStyle: "none",
    padding: 0,
  };

  const itemStyle = {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    fontSize: "16px",
    color: "#2C2C2C",
    letterSpacing: "0.05em",
    lineHeight: "1.5",
    borderBottom: "1px dotted #9CA3AF",
    paddingTop: "10px",
    paddingBottom: "11px",
  };

  const labelStyle = {
    fontWeight: "700",
    minWidth: "72px",
    flexShrink: 0,
  };

  const valueStyle = {
    fontWeight: "500",
    flex: 1,
  };

  const blockProps = useBlockProps({
    className: "store-info-list-block-wrapper",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("固定項目設定", "my-custom-blocks")}>
          <TextControl label={__("店名", "my-custom-blocks")} value={storeName} onChange={(value) => setAttributes({ storeName: value })} placeholder="例: 大館西SS" __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("住所", "my-custom-blocks")} value={address} onChange={(value) => setAttributes({ address: value })} placeholder="例: 秋田県大館市根下戸新町１-６０" rows={2} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextControl label={__("電話", "my-custom-blocks")} value={phone} onChange={(value) => setAttributes({ phone: value })} placeholder="例: 0186-42-3149" __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("営業時間", "my-custom-blocks")} value={businessHours} onChange={(value) => setAttributes({ businessHours: value })} placeholder="例: 平日・土　7時30分~17時00分" rows={3} help={__("改行する場合は Enter キーを押してください", "my-custom-blocks")} __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("オプション項目", "my-custom-blocks")} initialOpen={false}>
          {optionalItems.map((item, index) => (
            <div key={index} style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "4px" }}>
              <TextControl label={__("項目名", "my-custom-blocks")} value={item.label} onChange={(value) => updateOptionalItem(index, "label", value)} placeholder="例: 営業時間" />

              <TextareaControl label={__("内容", "my-custom-blocks")} value={item.value} onChange={(value) => updateOptionalItem(index, "value", value)} placeholder="例: 平日・土　7時30分~17時00分" rows={2} />

              <Button isDestructive onClick={() => removeOptionalItem(index)}>
                {__("この項目を削除", "my-custom-blocks")}
              </Button>
            </div>
          ))}

          <Button variant="secondary" onClick={addOptionalItem}>
            {__("オプション項目を追加", "my-custom-blocks")}
          </Button>
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
            __next40pxDefaultSize
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <ul style={containerStyle}>
          <li style={itemStyle}>
            <p style={labelStyle}>店　　名</p>
            <p style={valueStyle}>{storeName || "（未入力）"}</p>
          </li>

          <li style={itemStyle}>
            <p style={labelStyle}>住　　所</p>
            <p style={valueStyle}>{address || "（未入力）"}</p>
          </li>

          <li style={itemStyle}>
            <p style={labelStyle}>電　　話</p>
            <p style={valueStyle}>{phone || "（未入力）"}</p>
          </li>

          <li style={itemStyle}>
            <p style={labelStyle}>営業時間</p>
            <p style={valueStyle} dangerouslySetInnerHTML={{ __html: (businessHours || "（未入力）").replace(/\n/g, "<br />") }} />
          </li>

          {optionalItems.map((item, index) => (
            <li key={index} style={itemStyle}>
              <p style={labelStyle}>{item.label || "（未入力）"}</p>
              <p style={valueStyle} dangerouslySetInnerHTML={{ __html: (item.value || "（未入力）").replace(/\n/g, "<br />") }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
