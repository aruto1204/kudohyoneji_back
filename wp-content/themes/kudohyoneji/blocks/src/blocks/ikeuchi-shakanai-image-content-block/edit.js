/**
 * Edit component for Ikeuchi Shakanai Image Content Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";

const ALLOWED_BLOCKS = [
  "core/paragraph",
  "core/heading",
  "core/image",
  "core/list",
  "core/quote",
  "core/separator",
  "core/spacer",
  "core/columns",
  "core/group",
  "my-custom-blocks/link-button-block",
  "my-custom-blocks/featured-image-block",
  "my-custom-blocks/store-info-list-block",
  "my-custom-blocks/services-list-block",
  "my-custom-blocks/google-map-block",
  "my-custom-blocks/inner-container-block",
  "my-custom-blocks/title-banner-block",
  "my-custom-blocks/message-block",
  "my-custom-blocks/padding-container-block",
  "my-custom-blocks/content-title-block",
  "my-custom-blocks/wholesale-title-block",
  "my-custom-blocks/wholesale-point-block",
  "my-custom-blocks/mark-block",
  "my-custom-blocks/text-block",
  "my-custom-blocks/image-block",
  "my-custom-blocks/products-results",
  "my-custom-blocks/symptom-check-block",
  "my-custom-blocks/numbered-list-block",
  "my-custom-blocks/business-certificate-table",
  "my-custom-blocks/ikeuchi-shakanai-payment",
  "my-custom-blocks/ikeuchi-shakanai-app",
  "my-custom-blocks/ikeuchi-shakanai-container",
];

const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];

export default function Edit({ attributes, setAttributes }) {
  const { imageUrl, imageId, imageAlt, captionText } = attributes;

  const blockStyle = {
    width: "100%",
    display: "flex",
    gap: "40px",
    marginInline: "auto",
    boxSizing: "border-box",
  };

  const imageContentSectionStyle = {
    maxWidth: "338px",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    boxSizing: "border-box",
  };

  const imageContentImageStyle = {
    display: "block",
    width: "100%",
    height: "auto",
  };

  const imageContentCaptionBarStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "#0b8b4b",
    paddingBlock: "4px",
    boxSizing: "border-box",
  };

  const imageContentCaptionTextStyle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#f7f7f7",
    letterSpacing: "0.03em",
    lineHeight: "normal",
    textAlign: "center",
    boxSizing: "border-box",
    margin: "0",
  };

  const placeholderStyle = {
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  };

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-image-content-block",
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
        </PanelBody>

        <PanelBody title={__("キャプション設定", "my-custom-blocks")}>
          <TextControl label={__("キャプションテキスト", "my-custom-blocks")} value={captionText} onChange={(value) => setAttributes({ captionText: value })} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} style={blockStyle}>
        <div className="image-content-inner-blocks">
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
        </div>
        <div style={imageContentSectionStyle}>
          {imageUrl ? (
            <>
              <img src={imageUrl} alt={imageAlt} style={imageContentImageStyle} />
              <div style={imageContentCaptionBarStyle}>
                <p style={imageContentCaptionTextStyle}>{captionText}</p>
              </div>
            </>
          ) : (
            <>
              <div style={placeholderStyle}>
                <p>{__("画像を選択してください", "my-custom-blocks")}</p>
              </div>
              <div className="image-content-caption-bar">
                <p className="image-content-caption-text">{captionText}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
