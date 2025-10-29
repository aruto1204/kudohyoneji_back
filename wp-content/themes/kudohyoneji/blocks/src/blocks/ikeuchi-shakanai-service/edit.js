/**
 * Edit component for Ikeuchi Shakanai Service Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { marginTop, mainText, smallImageUrl, smallImageId, smallImageAlt, largeImageUrl, largeImageId, largeImageAlt } = attributes;

  const serviceStyle = {
    marginTop: marginTop,
    width: "100%",
    height: "auto",
    position: "relative",
    marginInline: "auto",
    border: "1px dashed #ccc",
    padding: "16px",
    boxSizing: "border-box",
  };

  const serviceContentAreaStyle = {
    maxWidth: "480px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    position: "absolute",
    zIndex: "10",
    bottom: "0",
    left: "20px",
  };

  const serviceMainTextStyle = {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.05em",
    color: "#171717",
  };

  const serviceSmallImageWrapperStyle = {
    display: "block",
    maxWidth: "208px",
    width: "100%",
    height: "auto",
  };

  const serviceLargeImageWrapperStyle = {
    display: "block",
    maxWidth: "708px",
    width: "100%",
    height: "fit-content",
    marginLeft: "auto",
  };

  const placeholderStyle = {
    width: "100%",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
  };

  const serviceImageStyle = {
    display: "block",
    width: "100%",
    height: "auto",
  };

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-service-block",
  });

  const serviceBusinessGradientStyle = `
    .business-gradient {
      position: relative;
      z-index: 0;
    }

    @media (min-width: 1024px) {
      .business-gradient::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: linear-gradient(to right, white 0%, white 13%, transparent 62%, transparent 100%);
      }
    }
  `;

  const onSelectSmallImage = (media) => {
    setAttributes({
      smallImageUrl: media.url,
      smallImageId: media.id,
      smallImageAlt: media.alt || "イメージ画像",
    });
  };

  const onRemoveSmallImage = () => {
    setAttributes({
      smallImageUrl: "",
      smallImageId: 0,
      smallImageAlt: "イメージ画像",
    });
  };

  const onSelectLargeImage = (media) => {
    setAttributes({
      largeImageUrl: media.url,
      largeImageId: media.id,
      largeImageAlt: media.alt || "イメージ画像",
    });
  };

  const onRemoveLargeImage = () => {
    setAttributes({
      largeImageUrl: "",
      largeImageId: 0,
      largeImageAlt: "イメージ画像",
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextareaControl label={__("メインテキスト", "my-custom-blocks")} value={mainText} onChange={(value) => setAttributes({ mainText: value })} rows={4} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("小画像設定", "my-custom-blocks")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectSmallImage}
              allowedTypes={["image"]}
              value={smallImageId}
              render={({ open }) => (
                <div>
                  {smallImageUrl ? (
                    <div>
                      <img src={smallImageUrl} alt={smallImageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                      <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                        {__("画像を変更", "my-custom-blocks")}
                      </Button>
                      <Button onClick={onRemoveSmallImage} variant="secondary" isDestructive>
                        {__("画像を削除", "my-custom-blocks")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} variant="primary">
                      {__("小画像を選択", "my-custom-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title={__("大画像設定", "my-custom-blocks")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectLargeImage}
              allowedTypes={["image"]}
              value={largeImageId}
              render={({ open }) => (
                <div>
                  {largeImageUrl ? (
                    <div>
                      <img src={largeImageUrl} alt={largeImageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                      <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                        {__("画像を変更", "my-custom-blocks")}
                      </Button>
                      <Button onClick={onRemoveLargeImage} variant="secondary" isDestructive>
                        {__("画像を削除", "my-custom-blocks")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} variant="primary">
                      {__("大画像を選択", "my-custom-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
          <UnitControl
            label={__("上部マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} style={serviceStyle}>
        <div style={serviceContentAreaStyle}>
          <p style={serviceMainTextStyle} dangerouslySetInnerHTML={{ __html: mainText.replace(/\n/g, "<br />") }}></p>
          <div style={serviceSmallImageWrapperStyle}>{smallImageUrl ? <img src={smallImageUrl} alt={smallImageAlt} style={serviceImageStyle} /> : <div style={placeholderStyle}>{__("小画像", "my-custom-blocks")}</div>}</div>
        </div>
        <style>{serviceBusinessGradientStyle}</style>
        <div style={serviceLargeImageWrapperStyle} className="business-gradient">
          {largeImageUrl ? <img src={largeImageUrl} alt={largeImageAlt} style={serviceImageStyle} /> : <div style={placeholderStyle}>{__("大画像", "my-custom-blocks")}</div>}
        </div>
      </div>
    </>
  );
}
