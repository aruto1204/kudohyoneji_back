/**
 * Edit component for Symptom Check Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { questionText, symptomList, marginTop } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: marginTop,
    border: "1px dashed #ccc",
    padding: "16px",
    boxSizing: "border-box",
  };

  const questionStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "2",
    textAlign: "center",
    color: "#383838",
    margin: "0",
  };

  const symptomStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "2",
    textAlign: "center",
    color: "#0b8b4b",
    margin: "0",
    whiteSpace: "pre-line",
  };

  const blockProps = useBlockProps({
    className: "symptom-check-block-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("コンテンツ設定", "my-custom-blocks")}>
          <TextareaControl label={__("質問文", "my-custom-blocks")} value={questionText} onChange={(value) => setAttributes({ questionText: value })} help={__("症状チェックの質問文を入力してください", "my-custom-blocks")} rows={2} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("症状リスト", "my-custom-blocks")} value={symptomList} onChange={(value) => setAttributes({ symptomList: value })} help={__("症状を改行区切りで入力してください", "my-custom-blocks")} rows={6} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("スペーシング設定", "my-custom-blocks")}>
          <UnitControl
            label={__("上部マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
              { value: "em", label: "em" },
            ]}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={editorStyle}>
          <p style={questionStyle}>{questionText}</p>
          <p style={symptomStyle}>{symptomList}</p>
        </div>
      </div>
    </>
  );
}
