/**
 * Edit component for Sales Maintenance Mark Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, TextControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { text, marginTop, fontSizeMd, fontSizeSm, fontSizeXs, letterSpacing, maxWidth } = attributes;

  const editorStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop,
    border: "1px dashed #ccc",
    padding: "16px",
    boxSizing: "border-box",
    position: "relative",
  };

  const containerStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "0 28px",
    boxSizing: "border-box",
    position: "relative",
  };

  const textStyle = {
    fontSize: fontSizeMd,
    fontWeight: "700",
    lineHeight: "1.5",
    letterSpacing: letterSpacing,
    textAlign: "center",
    color: "#0b8b4b",
  };

  const businessBracketsStyle = `
  .business-brackets {
    position: relative;
  }

  .business-brackets::before,
  .business-brackets::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 19px;
    height: calc(100% - 9px);
    border: 2px solid #b2b2b2;
  }

  .business-brackets::before {
    left: 0;
    border-right: none;
  }

  .business-brackets::after {
    right: 0;
    border-left: none;
  }
  `;

  const blockProps = useBlockProps({
    className: "mark-block-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("設定", "my-custom-blocks")}>
          <TextareaControl label={__("テキスト", "my-custom-blocks")} value={text} onChange={(value) => setAttributes({ text: value })} help={__("改行したい場所でEnterキーを押してください", "my-custom-blocks")} rows={4} __next40pxDefaultSize __nextHasNoMarginBottom />

          <UnitControl
            label={__("最大幅", "my-custom-blocks")}
            value={maxWidth}
            onChange={(value) => setAttributes({ maxWidth: value })}
            help={__("例: 642px, 100%, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl
            label={__("フォントサイズ（PC）", "my-custom-blocks")}
            value={fontSizeMd}
            onChange={(value) => setAttributes({ fontSizeMd: value })}
            help={__("例: 30px, 2rem, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl
            label={__("フォントサイズ（スマホ）", "my-custom-blocks")}
            value={fontSizeSm}
            onChange={(value) => setAttributes({ fontSizeSm: value })}
            help={__("例: 30px, 2rem, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl
            label={__("フォントサイズ（スマホXS）", "my-custom-blocks")}
            value={fontSizeXs}
            onChange={(value) => setAttributes({ fontSizeXs: value })}
            help={__("例: 30px, 2rem, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl
            label={__("文字間隔", "my-custom-blocks")}
            value={letterSpacing}
            onChange={(value) => setAttributes({ letterSpacing: value })}
            help={__("例: 0.05em, 0.1em, 0", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "em", label: "em" },
              { value: "px", label: "px" },
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
        <style dangerouslySetInnerHTML={{ __html: businessBracketsStyle }} />
        <div className="business-brackets" style={containerStyle}>
          <p
            style={textStyle}
            dangerouslySetInnerHTML={{
              __html: (text || __("テキストを入力してください", "my-custom-blocks")).replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>
    </>
  );
}
