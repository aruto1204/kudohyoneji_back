/**
 * Edit component for Delivery Location Table Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { header1, header2, header3, header3RedText, header4, header5, rows, marginTop } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    maxWidth: "874px",
    width: "100%",
    height: "auto",
    margin: "0 auto",
    marginTop: marginTop,
    overflowX: "scroll",
    boxSizing: "border-box",
    border: "1px dashed #ccc",
  };

  const tableStyle = {
    minWidth: "874px",
    width: "100%",
    tableLayout: "auto",
    border: "1px solid #B2B2B2",
    backgroundColor: "white",
    borderCollapse: "collapse",
  };

  const headerStyle = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    textAlign: "left",
    color: "#383838",
    padding: "8px 24px",
    border: "1px solid #B2B2B2",
  };

  const cellStyle = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    textAlign: "left",
    color: "#383838",
    padding: "8px 24px",
    border: "1px solid #B2B2B2",
  };

  const redTextStyle = {
    color: "#DF0515",
  };

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-table-editor",
  });

  // 行の追加
  const addRow = () => {
    const newRows = [
      ...rows,
      {
        location: "新しい拠点",
        area: "配送地域",
        holiday: "営業日情報",
        holidayIsRed: false,
        time: "8:00〜18:00",
        tel: "0186-00-0000",
      },
    ];
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
    newRows[index] = {
      ...newRows[index],
      [field]: value,
    };
    setAttributes({ rows: newRows });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("ヘッダー設定", "my-custom-blocks")}>
          <TextControl label={__("ヘッダー1（拠点）", "my-custom-blocks")} value={header1} onChange={(value) => setAttributes({ header1: value })} />
          <TextControl label={__("ヘッダー2（配送地域）", "my-custom-blocks")} value={header2} onChange={(value) => setAttributes({ header2: value })} />
          <TextControl label={__("ヘッダー3（営業日）", "my-custom-blocks")} value={header3} onChange={(value) => setAttributes({ header3: value })} />
          <TextControl label={__("ヘッダー3赤文字部分", "my-custom-blocks")} value={header3RedText} onChange={(value) => setAttributes({ header3RedText: value })} help={__("赤文字で表示する部分を入力", "my-custom-blocks")} />
          <TextControl label={__("ヘッダー4（時間帯）", "my-custom-blocks")} value={header4} onChange={(value) => setAttributes({ header4: value })} />
          <TextControl label={__("ヘッダー5（TEL）", "my-custom-blocks")} value={header5} onChange={(value) => setAttributes({ header5: value })} />
        </PanelBody>

        <PanelBody title={__("行データ設定", "my-custom-blocks")}>
          {rows.map((row, index) => (
            <div key={index} style={{ marginBottom: "24px", padding: "16px", border: "1px solid #ddd", borderRadius: "4px" }}>
              <h4 style={{ marginTop: 0 }}>{__(`行 ${index + 1}`, "my-custom-blocks")}</h4>
              <TextControl label={__("拠点名", "my-custom-blocks")} value={row.location} onChange={(value) => updateRow(index, "location", value)} />
              <TextControl label={__("配送地域", "my-custom-blocks")} value={row.area} onChange={(value) => updateRow(index, "area", value)} />
              <TextControl label={__("営業日情報", "my-custom-blocks")} value={row.holiday} onChange={(value) => updateRow(index, "holiday", value)} />
              <ToggleControl label={__("営業日を赤文字で表示", "my-custom-blocks")} checked={row.holidayIsRed} onChange={(value) => updateRow(index, "holidayIsRed", value)} />
              <TextControl label={__("時間帯", "my-custom-blocks")} value={row.time} onChange={(value) => updateRow(index, "time", value)} />
              <TextControl label={__("電話番号", "my-custom-blocks")} value={row.tel} onChange={(value) => updateRow(index, "tel", value)} />
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
        <div style={editorStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerStyle}>{header1}</th>
                <th style={headerStyle}>{header2}</th>
                <th style={headerStyle}>
                  <span style={redTextStyle}>{header3RedText}</span>
                  {header3.replace(header3RedText, "")}
                </th>
                <th style={headerStyle}>{header4}</th>
                <th style={headerStyle}>{header5}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td style={cellStyle}>{row.location}</td>
                  <td style={cellStyle}>{row.area}</td>
                  <td style={row.holidayIsRed ? { ...cellStyle, ...redTextStyle } : cellStyle}>{row.holiday}</td>
                  <td style={cellStyle}>{row.time}</td>
                  <td style={cellStyle}>{row.tel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
