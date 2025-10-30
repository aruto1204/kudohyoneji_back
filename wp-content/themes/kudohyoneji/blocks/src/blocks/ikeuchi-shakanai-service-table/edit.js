/**
 * Edit component for Ikeuchi Shakanai Service Table Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, ToggleControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { serviceName, servicePrice, servicePriceUnit, serviceDescription, header1, header2, header3, rows, marginTop } = attributes;

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-service-table-editor",
  });

  // コンテナスタイル
  const containerStyle = {
    width: "100%",
    margin: "0 auto",
    marginTop: marginTop,
    display: "flex",
    gap: "40px",
  };

  // 左側：サービス情報スタイル
  const serviceContainerStyle = {
    maxWidth: "280px",
    width: "100%",
  };

  const serviceTitleStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    lineHeight: "1.4",
    letterSpacing: "0.05em",
    color: "#111827",
    marginBottom: "8px",
  };

  const servicePriceStyle = {
    display: "inline",
  };

  const priceNumberStyle = {
    fontSize: "50px",
  };

  const priceUnitStyle = {
    fontSize: "30px",
    marginLeft: "-12px",
  };

  const serviceDescriptionStyle = {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.38",
    letterSpacing: "0.05em",
    color: "#111827",
    marginTop: "8px",
    whiteSpace: "pre-line",
  };

  // 右側：テーブルスタイル
  const tableContainerStyle = {
    maxWidth: "546px",
    width: "100%",
    height: "auto",
    overflowX: "scroll",
  };

  const tableStyle = {
    minWidth: "546px",
    width: "100%",
    tableLayout: "auto",
    border: "1px solid #b2b2b2",
    backgroundColor: "white",
    borderCollapse: "collapse",
  };

  const headerStyle = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    textAlign: "left",
    padding: "8px 24px",
    border: "1px solid #b2b2b2",
  };

  const headerBrownStyle = {
    ...headerStyle,
    color: "#383838",
  };

  const headerRoseStyle = {
    ...headerStyle,
    color: "#DF0515",
  };

  const cellStyle = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    textAlign: "left",
    padding: "8px 24px",
    border: "1px solid #b2b2b2",
  };

  const cellBrownStyle = {
    ...cellStyle,
    color: "#383838",
  };

  const cellRoseStyle = {
    ...cellStyle,
    color: "#DF0515",
  };

  // 行の追加
  const addRow = () => {
    const newRows = [...rows, { itemName: "新しい品名", normalPrice: "0円", specialPrice: "0円", isSpecialColspan: false }];
    setAttributes({ rows: newRows });
  };

  // 行の削除
  const removeRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setAttributes({ rows: newRows });
  };

  // 行の更新
  const updateRow = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setAttributes({ rows: newRows });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("サービス情報設定", "my-custom-blocks")} initialOpen={true}>
          <TextControl label={__("サービス名", "my-custom-blocks")} value={serviceName} onChange={(value) => setAttributes({ serviceName: value })} />
          <TextControl label={__("価格", "my-custom-blocks")} value={servicePrice} onChange={(value) => setAttributes({ servicePrice: value })} help={__("例: 6,500", "my-custom-blocks")} />
          <TextControl label={__("価格単位", "my-custom-blocks")} value={servicePriceUnit} onChange={(value) => setAttributes({ servicePriceUnit: value })} help={__("例: 円税込", "my-custom-blocks")} />
          <TextareaControl label={__("説明文", "my-custom-blocks")} value={serviceDescription} onChange={(value) => setAttributes({ serviceDescription: value })} help={__("改行は \\n で入力できます", "my-custom-blocks")} rows={3} />
        </PanelBody>

        <PanelBody title={__("テーブルヘッダー設定", "my-custom-blocks")}>
          <TextControl label={__("ヘッダー1（品名）", "my-custom-blocks")} value={header1} onChange={(value) => setAttributes({ header1: value })} />
          <TextControl label={__("ヘッダー2（通常価格）", "my-custom-blocks")} value={header2} onChange={(value) => setAttributes({ header2: value })} />
          <TextControl label={__("ヘッダー3（特別価格）", "my-custom-blocks")} value={header3} onChange={(value) => setAttributes({ header3: value })} />
        </PanelBody>

        <PanelBody title={__("テーブル行設定", "my-custom-blocks")}>
          {rows.map((row, index) => (
            <div key={index} style={{ marginBottom: "20px", padding: "12px", border: "1px solid #ddd", borderRadius: "4px" }}>
              <h4 style={{ marginTop: 0 }}>{__(`行 ${index + 1}`, "my-custom-blocks")}</h4>
              <TextControl label={__("品名", "my-custom-blocks")} value={row.itemName} onChange={(value) => updateRow(index, "itemName", value)} />
              <TextControl label={__("通常価格", "my-custom-blocks")} value={row.normalPrice} onChange={(value) => updateRow(index, "normalPrice", value)} />
              {!row.isSpecialColspan && <TextControl label={__("特別価格", "my-custom-blocks")} value={row.specialPrice} onChange={(value) => updateRow(index, "specialPrice", value)} />}
              <ToggleControl label={__("通常価格を2列結合", "my-custom-blocks")} checked={row.isSpecialColspan} onChange={(value) => updateRow(index, "isSpecialColspan", value)} help={__("ONにすると「別途見積もり」などの表示に適しています", "my-custom-blocks")} />
              <Button isDestructive onClick={() => removeRow(index)} style={{ marginTop: "8px" }}>
                {__("この行を削除", "my-custom-blocks")}
              </Button>
            </div>
          ))}
          <Button isPrimary onClick={addRow}>
            {__("行を追加", "my-custom-blocks")}
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
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={containerStyle}>
          {/* 左側：サービス情報 */}
          <div style={serviceContainerStyle}>
            <p style={serviceTitleStyle}>
              <span style={{ display: "block" }}>{serviceName}</span>
              <span style={servicePriceStyle}>
                <span style={priceNumberStyle}>{servicePrice} </span>
                <span style={priceUnitStyle}>{servicePriceUnit}</span>
              </span>
            </p>
            <p style={serviceDescriptionStyle}>{serviceDescription}</p>
          </div>

          {/* 右側：テーブル */}
          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={headerBrownStyle}>{header1}</th>
                  <th style={headerBrownStyle}>{header2}</th>
                  <th style={headerRoseStyle}>{header3}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td style={cellBrownStyle}>{row.itemName}</td>
                    <td style={cellBrownStyle} colSpan={row.isSpecialColspan ? 2 : 1}>
                      {row.normalPrice}
                    </td>
                    {!row.isSpecialColspan && <td style={cellRoseStyle}>{row.specialPrice}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
