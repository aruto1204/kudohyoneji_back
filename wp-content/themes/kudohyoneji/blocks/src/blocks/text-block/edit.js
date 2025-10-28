/**
 * Edit component for Message Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, ColorPicker, __experimentalUnitControl as UnitControl, SelectControl, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { text, textColor, marginTop, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, maxWidth } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    marginTop: marginTop,
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px dashed #ccc",
    padding: "16px",
    boxSizing: "border-box",
  };

  const textStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: textColor,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    textAlign: textAlign,
  };

  const blockProps = useBlockProps({
    className: "message-block-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextareaControl label={__("テキスト", "my-custom-blocks")} value={text} onChange={(value) => setAttributes({ text: value })} help={__("改行したい場所でEnterキーを押してください", "my-custom-blocks")} rows={4} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("フォント設定", "my-custom-blocks")}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>{__("テキストカラー", "my-custom-blocks")}</label>
            <ColorPicker color={textColor} onChange={(value) => setAttributes({ textColor: value })} enableAlpha />
          </div>

          <UnitControl
            label={__("フォントサイズ", "my-custom-blocks")}
            value={fontSize}
            onChange={(value) => setAttributes({ fontSize: value })}
            help={__("例: 30px, 2rem, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl label={__("フォントウェイト", "my-custom-blocks")} value={fontWeight} onChange={(value) => setAttributes({ fontWeight: value })} help={__("例: 400, 500, 600", "my-custom-blocks")} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextControl label={__("行間", "my-custom-blocks")} value={lineHeight} onChange={(value) => setAttributes({ lineHeight: value })} help={__("例: 1.66, 1.5, 2", "my-custom-blocks")} __next40pxDefaultSize __nextHasNoMarginBottom />

          <UnitControl label={__("文字間", "my-custom-blocks")} value={letterSpacing} onChange={(value) => setAttributes({ letterSpacing: value })} help={__("例: 0em, 0.03em, 0.05em", "my-custom-blocks")} __next40pxDefaultSize __nextHasNoMarginBottom />

          <SelectControl
            label={__("テキスト揃え", "my-custom-blocks")}
            options={[
              { label: __("左寄せ", "my-custom-blocks"), value: "left" },
              { label: __("中央寄せ", "my-custom-blocks"), value: "center" },
              { label: __("右寄せ", "my-custom-blocks"), value: "right" },
            ]}
            onChange={(value) => setAttributes({ textAlign: value })}
          />
        </PanelBody>

        <PanelBody title={__("スペース設定", "my-custom-blocks")}>
          <UnitControl
            label={__("最大幅", "my-custom-blocks")}
            value={maxWidth}
            onChange={(value) => setAttributes({ maxWidth: value })}
            help={__("例: 100%, 1000px, 100%", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

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

      <div {...blockProps} style={editorStyle}>
        <p style={textStyle} dangerouslySetInnerHTML={{ __html: (text || __("テキストを入力してください", "my-custom-blocks")).replace(/\n/g, "<br />") }} />
      </div>
    </>
  );
}
