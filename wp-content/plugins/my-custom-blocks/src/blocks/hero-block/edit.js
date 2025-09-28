import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck, URLInput } from "@wordpress/block-editor";
import { PanelBody, Button, RangeControl, ColorPicker, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle, buttonText, buttonUrl, backgroundImage, textColor, overlayOpacity } = attributes;

  const blockProps = useBlockProps({
    className: "hero-block-editor",
    style: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: textColor,
      position: "relative",
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "40px 20px",
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("背景設定", "my-custom-blocks")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ backgroundImage: media.url })}
              allowedTypes={["image"]}
              value={backgroundImage}
              render={({ open }) => (
                <Button onClick={open} variant="secondary">
                  {backgroundImage ? "画像を変更" : "背景画像を選択"}
                </Button>
              )}
            />
          </MediaUploadCheck>
          {backgroundImage && (
            <Button onClick={() => setAttributes({ backgroundImage: "" })} variant="link" isDestructive>
              画像を削除
            </Button>
          )}
        </PanelBody>

        <PanelBody title={__("スタイル設定", "my-custom-blocks")}>
          <div>
            <label htmlFor="text-color-picker">{__("テキストカラー", "my-custom-blocks")}</label>
            <ColorPicker id="text-color-picker" color={textColor} onChange={(color) => setAttributes({ textColor: color })} />
          </div>
          <RangeControl label={__("オーバーレイの透明度", "my-custom-blocks")} value={overlayOpacity} onChange={(value) => setAttributes({ overlayOpacity: value })} min={0} max={1} step={0.1} />
        </PanelBody>

        <PanelBody title={__("ボタン設定", "my-custom-blocks")}>
          <TextControl label={__("ボタンテキスト", "my-custom-blocks")} value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} />
          <URLInput label={__("ボタンURL", "my-custom-blocks")} value={buttonUrl} onChange={(value) => setAttributes({ buttonUrl: value })} />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <RichText
            tagName="h1"
            value={title}
            onChange={(newTitle) => setAttributes({ title: newTitle })}
            placeholder={__("メインタイトルを入力…", "my-custom-blocks")}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: textColor,
            }}
          />
          <RichText
            tagName="p"
            value={subtitle}
            onChange={(newSubtitle) => setAttributes({ subtitle: newSubtitle })}
            placeholder={__("サブタイトルを入力…", "my-custom-blocks")}
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: textColor,
            }}
          />
          {buttonText && (
            <div
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#007cba",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              {buttonText}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
