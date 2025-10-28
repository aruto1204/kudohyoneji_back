/**
 * Edit component for Content Title Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, TextControl, ToggleControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { mainTitle, subTitle, bodyText, marginTop, enableMinWidth, isTwoColumn } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop,
    border: "1px dashed #ccc",
    padding: "16px",
    boxSizing: "border-box",
  };

  const containerStyle = {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: isTwoColumn ? "row" : "column",
    justifyContent: "space-between",
    gap: "40px",
    position: "relative",
  };

  const leftColumnStyle = {
    width: isTwoColumn ? "41.5%" : "100%",
    height: "auto",
    minWidth: enableMinWidth ? "fit-content" : "auto",
  };

  const rightColumnStyle = {
    width: isTwoColumn ? "54.3%" : "100%",
    height: "auto",
    display: isTwoColumn ? "block" : "none",
  };

  const mainTitleStyle = {
    fontSize: "32px", // エディター用サイズ
    color: "#0b8b4b", // green-500相当
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "0.03em",
    margin: "0 0 4px 0",
  };

  const subTitleStyle = {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "1.66",
    color: "#383838", // brown-500相当
    margin: "0",
  };

  const bodyTextStyle = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.75",
    color: "#383838", // brown-500相当
    margin: "0",
  };

  const blockProps = useBlockProps({
    className: "content-title-block-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("左カラム設定", "my-custom-blocks")}>
          <TextControl label={__("メインタイトル", "my-custom-blocks")} value={mainTitle} onChange={(value) => setAttributes({ mainTitle: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("サブタイトル", "my-custom-blocks")} value={subTitle} onChange={(value) => setAttributes({ subTitle: value })} help={__("改行したい場所でEnterキーを押してください", "my-custom-blocks")} rows={3} __next40pxDefaultSize __nextHasNoMarginBottom />

          <ToggleControl label={__("左カラムの最小幅を有効にする", "my-custom-blocks")} checked={enableMinWidth} onChange={(value) => setAttributes({ enableMinWidth: value })} help={__("左カラムの最小幅を適用します", "my-custom-blocks")} __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("右カラム設定", "my-custom-blocks")}>
          <ToggleControl label={__("右カラムを表示する", "my-custom-blocks")} checked={isTwoColumn} onChange={(value) => setAttributes({ isTwoColumn: value })} help={__("2カラムレイアウトにします", "my-custom-blocks")} __nextHasNoMarginBottom />

          <TextareaControl label={__("本文テキスト", "my-custom-blocks")} value={bodyText} onChange={(value) => setAttributes({ bodyText: value })} rows={4} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
          <UnitControl
            label={__("マージントップ", "my-custom-blocks")}
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

      <div {...blockProps} style={editorStyle}>
        <div style={containerStyle}>
          <div style={leftColumnStyle}>
            <p
              style={mainTitleStyle}
              dangerouslySetInnerHTML={{
                __html: mainTitle.replace(/\n/g, "<br />"),
              }}
            />
            <p
              style={subTitleStyle}
              dangerouslySetInnerHTML={{
                __html: subTitle.replace(/\n/g, "<br />"),
              }}
            />
          </div>
          {isTwoColumn && (
            <div style={rightColumnStyle}>
              <p style={bodyTextStyle} dangerouslySetInnerHTML={{ __html: bodyText.replace(/\n/g, "<br />") }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
