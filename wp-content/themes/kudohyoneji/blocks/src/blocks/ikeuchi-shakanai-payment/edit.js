/**
 * Edit component for Payment Method Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { headerText, mainText, noteText, maxWidth, marginTop } = attributes;

  // エディター用のスタイル
  const containerStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: marginTop,
    padding: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #b2b2b2",
    boxSizing: "border-box",
  };

  const headerContainerStyle = {
    width: "fit-content",
    minWidth: "188px", // md:min-w-47 (47 * 4 = 188px)
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "8px",
    backgroundColor: "#0b8b4b",
  };

  const headerTextStyle = {
    fontSize: "25px",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    color: "#ffffff",
    margin: "0",
  };

  const mainTextStyle = {
    fontSize: "25px",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    color: "#0b8b4b",
    textAlign: "center",
    marginTop: "18px",
    marginBottom: "0",
  };

  const noteTextStyle = {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "1.33",
    letterSpacing: "0.03em",
    textAlign: "center",
    color: "#000000",
    marginTop: "28px",
    marginBottom: "0",
  };

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-payment-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextControl label={__("ヘッダーテキスト", "my-custom-blocks")} value={headerText} onChange={(value) => setAttributes({ headerText: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextControl label={__("メインテキスト", "my-custom-blocks")} value={mainText} onChange={(value) => setAttributes({ mainText: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("注意書きテキスト", "my-custom-blocks")} value={noteText} onChange={(value) => setAttributes({ noteText: value })} rows={3} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("スペーシング設定", "my-custom-blocks")}>
          <UnitControl
            label={__("最大幅", "my-custom-blocks")}
            value={maxWidth}
            onChange={(value) => setAttributes({ maxWidth: value })}
            help={__("例: 668px, 100%, 0", "my-custom-blocks")}
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

      <div {...blockProps}>
        <div style={containerStyle}>
          <div style={headerContainerStyle}>
            <p style={headerTextStyle}>{headerText || __("ヘッダーを入力してください", "my-custom-blocks")}</p>
          </div>
          <p style={mainTextStyle}>{mainText || __("メインテキストを入力してください", "my-custom-blocks")}</p>
          <p style={noteTextStyle}>{noteText || __("注意書きを入力してください", "my-custom-blocks")}</p>
        </div>
      </div>
    </>
  );
}
