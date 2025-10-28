/**
 * Edit component for Title Banner Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, ColorPicker, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { titleText, backgroundColor, textColor, marginTop, maxWidth } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    width: "100%",
    height: "auto",
    padding: "8px 16px",
    backgroundColor: backgroundColor,
    marginTop: marginTop,
    maxWidth: maxWidth,
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
  };

  const textStyle = {
    fontSize: "24px", // base size for editor
    fontWeight: "700",
    color: textColor,
    letterSpacing: "0.03em",
    lineHeight: "1.25",
    margin: "0",
    textAlign: "left",
  };

  const blockProps = useBlockProps({
    className: "title-banner-block-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("設定", "my-custom-blocks")}>
          <TextControl label={__("タイトルテキスト", "my-custom-blocks")} value={titleText} onChange={(value) => setAttributes({ titleText: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <UnitControl
            label={__("最大幅", "my-custom-blocks")}
            value={maxWidth}
            onChange={(value) => setAttributes({ maxWidth: value })}
            help={__("例: 964px, 100%, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{__("背景色", "my-custom-blocks")}</label>
            <ColorPicker color={backgroundColor} onChange={(value) => setAttributes({ backgroundColor: value })} enableAlpha />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{__("テキストカラー", "my-custom-blocks")}</label>
            <ColorPicker color={textColor} onChange={(value) => setAttributes({ textColor: value })} enableAlpha />
          </div>

          <UnitControl
            label={__("マージントップ", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            help={__("例: 20px, 2rem, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={editorStyle}>
          <p style={textStyle}>{titleText || __("タイトルを入力してください", "my-custom-blocks")}</p>
        </div>
      </div>
    </>
  );
}
