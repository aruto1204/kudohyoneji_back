/**
 * Edit component for Table Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { tableTitle, row1Label, row1Value, row2Label, row2Value, row3Label, row3Value, row4Label, row4Value, row5Label, row5Value, marginTop } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    maxWidth: "804px",
    width: "100%",
    height: "auto",
    margin: "0 auto",
    marginTop: marginTop,
    overflowX: "scroll",
  };

  const tableStyle = {
    minWidth: "804px", // max-w-201
    width: "100%",
    tableLayout: "auto",
    border: "1px solid #B2B2B2", // border-gray-900
    backgroundColor: "white",
    borderCollapse: "collapse",
  };

  const headerStyle = {
    fontSize: "20px", // text-xl
    color: "#383838",
    fontWeight: "bold",
    lineHeight: "normal",
    textAlign: "center",
    color: "black",
    padding: "8px 24px", // px-6 py-2
    border: "1px solid #B2B2B2",
  };

  const cellStyle = {
    fontSize: "18px", // text-lg
    color: "#383838",
    fontWeight: "600", // font-semibold
    lineHeight: "normal",
    textAlign: "left",
    color: "black",
    padding: "10px 44px", // px-11 py-2.5
    border: "1px solid #B2B2B2",
  };

  const blockProps = useBlockProps({
    className: "business-certificate-table-editor",
  });

  const rows = [
    { label: row1Label, value: row1Value, labelKey: "row1Label", valueKey: "row1Value" },
    { label: row2Label, value: row2Value, labelKey: "row2Label", valueKey: "row2Value" },
    { label: row3Label, value: row3Value, labelKey: "row3Label", valueKey: "row3Value" },
    { label: row4Label, value: row4Value, labelKey: "row4Label", valueKey: "row4Value" },
    { label: row5Label, value: row5Value, labelKey: "row5Label", valueKey: "row5Value" },
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テーブル設定", "my-custom-blocks")}>
          <TextControl label={__("テーブルタイトル", "my-custom-blocks")} value={tableTitle} onChange={(value) => setAttributes({ tableTitle: value })} />
        </PanelBody>

        <PanelBody title={__("テーブル行設定", "my-custom-blocks")}>
          {rows.map((row, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <h4>{__(`行 ${index + 1}`, "my-custom-blocks")}</h4>
              <TextControl label={__("項目名", "my-custom-blocks")} value={row.label} onChange={(value) => setAttributes({ [row.labelKey]: value })} />
              <TextControl label={__("内容", "my-custom-blocks")} value={row.value} onChange={(value) => setAttributes({ [row.valueKey]: value })} />
            </div>
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
        <div style={editorStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerStyle} colSpan="2">
                  {tableTitle}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td style={cellStyle}>{row.label}</td>
                  <td style={cellStyle}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
