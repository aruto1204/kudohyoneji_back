/**
 * Edit component for Wholesale Title Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, Button, __experimentalUnitControl as UnitControl, SelectControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { imageUrl, imageId, imageMaxWidth, marginTop, imageAlt, align } = attributes;

  const editorStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop,
    border: "1px dashed #ccc",
    padding: "24px",
    boxSizing: "border-box",
    position: "relative",
  };

  const imageWrapperStyle = {
    maxWidth: imageMaxWidth,
    display: "block",
    width: "100%",
    height: "auto",
    ...(align === "center" && { marginInline: "auto" }),
    ...(align === "left" && { marginRight: "auto" }),
    ...(align === "right" && { marginLeft: "auto" }),
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  const placeholderStyle = {
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    margin: "0 auto",
  };

  const blockProps = useBlockProps({
    className: "image-block-editor",
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

        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
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

          <SelectControl
            label={__("画像の揃え", "my-custom-blocks")}
            value={align}
            onChange={(value) => setAttributes({ align: value })}
            options={[
              { label: __("中央揃え", "my-custom-blocks"), value: "center" },
              { label: __("左揃え", "my-custom-blocks"), value: "left" },
              { label: __("右揃え", "my-custom-blocks"), value: "right" },
            ]}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} style={editorStyle}>
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
    </>
  );
}
