/**
 * Edit component for Message Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, ColorPicker, __experimentalUnitControl as UnitControl, SelectControl, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { text, maxWidth, marginTop } = attributes;

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
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.03em",
    color: "#383838",
    lineHeight: "2",
  };

  const blockProps = useBlockProps({
    className: "products-results-block-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextareaControl label={__("テキスト", "my-custom-blocks")} value={text} onChange={(value) => setAttributes({ text: value })} help={__("改行したい場所でEnterキーを押してください", "my-custom-blocks")} rows={4} __next40pxDefaultSize __nextHasNoMarginBottom />
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
