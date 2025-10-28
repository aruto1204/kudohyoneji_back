/**
 * Edit component for Wholesale Title Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, TextControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { title, subTitle, bodyText, imageUrl, imageId, imageMaxWidth, marginTop, imageAlt } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop,
    border: "1px dashed #ccc",
    padding: "24px",
    boxSizing: "border-box",
    position: "relative",
  };

  const containerStyle = {
    maxWidth: "964px",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "16px",
    flexWrap: "wrap",
  };

  const leftColumnStyle = {
    maxWidth: "664px",
    width: "100%",
    height: "auto",
  };

  const titleStyle = {
    fontSize: "32px",
    color: "#0b8b4b", // green-500
    fontWeight: "700",
    lineHeight: "1.4",
    letterSpacing: "0.03em",
    margin: "0 0 2px 0",
  };

  const subTitleStyle = {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "1.66",
    margin: "0 0 28px 0",
  };

  const bodyTextStyle = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.66",
    margin: "0",
  };

  const imageWrapperStyle = {
    display: "block",
    width: "100%",
    maxWidth: imageMaxWidth,
    height: "auto",
    margin: "0 auto",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  const placeholderStyle = {
    width: "100%",
    maxWidth: imageMaxWidth,
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    border: "2px dashed #ccc",
    margin: "0 auto",
  };

  const blockProps = useBlockProps({
    className: "wholesale-title-block-editor",
  });

  const onSelectImage = (media) => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
      imageAlt: media.alt,
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      imageUrl: "",
      imageId: 0,
      imageAlt: "",
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextControl label={__("タイトル", "my-custom-blocks")} value={title} onChange={(value) => setAttributes({ title: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextControl label={__("サブタイトル", "my-custom-blocks")} value={subTitle} onChange={(value) => setAttributes({ subTitle: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("本文", "my-custom-blocks")} value={bodyText} onChange={(value) => setAttributes({ bodyText: value })} help={__("改行したい場所でEnterキーを押してください", "my-custom-blocks")} rows={6} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("画像設定", "my-custom-blocks")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={imageId}
              render={({ open }) => (
                <div>
                  {imageUrl ? (
                    <div>
                      <img src={imageUrl} alt={imageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                      <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                        {__("画像を変更", "my-custom-blocks")}
                      </Button>
                      <Button onClick={onRemoveImage} variant="secondary" isDestructive>
                        {__("画像を削除", "my-custom-blocks")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} variant="primary">
                      {__("画像を選択", "my-custom-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>

          <UnitControl
            label={__("画像の最大幅", "my-custom-blocks")}
            value={imageMaxWidth}
            onChange={(value) => setAttributes({ imageMaxWidth: value })}
            help={__("例: 386px, 24rem, 100%", "my-custom-blocks")}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />
        </PanelBody>

        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
          <UnitControl
            label={__("上部マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            help={__("例: 100px, 6.25rem, 0", "my-custom-blocks")}
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
        <div style={containerStyle}>
          <div style={leftColumnStyle}>
            <p
              style={titleStyle}
              dangerouslySetInnerHTML={{
                __html: title.replace(/\n/g, "<br />"),
              }}
            />
            <p
              style={subTitleStyle}
              dangerouslySetInnerHTML={{
                __html: subTitle.replace(/\n/g, "<br />"),
              }}
            />
            <p
              style={bodyTextStyle}
              dangerouslySetInnerHTML={{
                __html: bodyText.replace(/\n/g, "<br />"),
              }}
            />
          </div>

          {imageUrl ? (
            <div style={imageWrapperStyle}>
              <img src={imageUrl} alt={imageAlt} style={imageStyle} />
            </div>
          ) : (
            <div style={placeholderStyle}>
              <p>{__("画像を選択してください", "my-custom-blocks")}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
