/**
 * Edit component for Message Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, ColorPicker, TextControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes, clientId }) {
  const { messageText, textColor, marginTop, fontSizeMd, fontSizeSm, fontSizeXs } = attributes;

  // clientIdを属性に保存（既に保持している場合は更新しない）
  useEffect(() => {
    if (clientId && !attributes.clientId) {
      setAttributes({ clientId });
    }
  }, [clientId]);

  // エディター用のスタイル
  const editorStyle = {
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
    fontSize: "30px", // base size for editor (text-xl)
    fontWeight: "700",
    color: textColor,
    letterSpacing: "0.03em",
    lineHeight: "normal",
    margin: "0",
    textAlign: "center",
  };

  const blockProps = useBlockProps({
    className: "message-block-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("設定", "my-custom-blocks")}>
          <TextareaControl label={__("メッセージテキスト", "my-custom-blocks")} value={messageText} onChange={(value) => setAttributes({ messageText: value })} help={__("改行したい場所でEnterキーを押してください", "my-custom-blocks")} rows={4} __next40pxDefaultSize __nextHasNoMarginBottom />

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>{__("テキストカラー", "my-custom-blocks")}</label>
            <ColorPicker color={textColor} onChange={(value) => setAttributes({ textColor: value })} enableAlpha />
          </div>

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
        <p style={textStyle} dangerouslySetInnerHTML={{ __html: (messageText || __("テキストを入力してください", "my-custom-blocks")).replace(/\n/g, "<br />") }} />
      </div>
    </>
  );
}
