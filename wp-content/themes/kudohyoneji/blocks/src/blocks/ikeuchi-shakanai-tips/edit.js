/**
 * Edit component for Ikeuchi Shakanai Tips Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { marginTop, taglineText, titleText, bodyText, imageUrl, imageId, imageAlt } = attributes;

  const tipsStyle = {
    marginTop: marginTop,
    width: "100%",
    height: "auto",
    position: "relative",
    marginInline: "auto",
    border: "1px dashed #ccc",
    padding: "16px",
    boxSizing: "border-box",
  };

  const tipsLogoWrapperStyle = {
    width: "fit-content",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "-20px",
    zIndex: "10",
    position: "relative",
  };

  const tipsContentBoxStyle = {
    maxWidth: "964px", // max-w-241 (241 * 4 = 964px)
    width: "100%",
    height: "auto",
    padding: "32px 20px", // py-8 px-5
    border: "2px solid #0b8b4b",
    borderRadius: "21px",
    boxSizing: "border-box",
  };

  const tipsInnerWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    maxWidth: "876px",
    width: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const tipsTextAreaStyle = {
    maxWidth: "480px",
    width: "100%",
    height: "auto",
  };

  const tipsTaglineWrapperStyle = {
    width: "fit-content",
    backgroundColor: "#0b8b4b",
    padding: "4px 6px", // py-1 pl-1.5 pr-1.5
    boxSizing: "border-box",
  };

  const tipsTaglineTextStyle = {
    display: "block",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.05em",
    color: "#ffffff",
    margin: "0",
  };

  const tipsTitleTextStyle = {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "1.25",
    letterSpacing: "0.05em",
    color: "#0b8b4b",
    margin: "14px 0 0 0",
  };

  const tipsBodyTextStyle = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.66",
    color: "#383838",
    margin: "22px 0 0 0",
  };

  const tipsImageWrapperStyle = {
    display: "block",
    maxWidth: "360px", // max-w-90 (90 * 4 = 360px)
    width: "100%",
    height: "auto",
  };

  const tipsImageStyle = {
    display: "block",
    width: "100%",
    height: "auto",
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

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-tips-block",
    style: { marginTop: marginTop },
  });

  const onSelectImage = (media) => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
      imageAlt: media.alt || "イメージ画像",
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      imageUrl: "",
      imageId: 0,
      imageAlt: "イメージ画像",
    });
  };

  return (
    <>
      <InspectorControls>
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

        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextControl label={__("タグラインテキスト", "my-custom-blocks")} value={taglineText} onChange={(value) => setAttributes({ taglineText: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("タイトルテキスト", "my-custom-blocks")} value={titleText} onChange={(value) => setAttributes({ titleText: value })} rows={3} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("本文テキスト", "my-custom-blocks")} value={bodyText} onChange={(value) => setAttributes({ bodyText: value })} rows={5} __next40pxDefaultSize __nextHasNoMarginBottom />
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
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} style={tipsStyle}>
        <div style={tipsLogoWrapperStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="82.394" height="54.778" viewBox="0 0 82.394 54.778" style={{ color: "#0b8b4b" }}>
            <g transform="translate(-206.82 -319.93)">
              <path d="M214.131,326.491H206.82V320.34h22.109v6.151h-7.312v35.28h-7.485Z" transform="translate(0 -0.12)" fill="currentColor"></path>
              <path d="M243.615,319.93h7.08v7.485h-7.08Zm0,11.664h7.08v30.058h-7.08Z" transform="translate(-10.743)" fill="currentColor"></path>
              <path
                d="M261.152,336.14h5.455l.7,2.089a7.33,7.33,0,0,1,6.035-2.727c5.628,0,8.065,3.539,8.065,11.606v6.557c0,9.4-2.437,13.172-8.414,13.172a7.953,7.953,0,0,1-4.758-1.393v13.81h-7.08Zm13.172,10.445c0-3.482-.87-4.991-2.844-4.991-2.263,0-3.249,2.031-3.249,6.615v5.919c0,4.584.986,6.615,3.249,6.615,1.973,0,2.844-1.8,2.844-6.152Z"
                transform="translate(-15.863 -4.546)"
                fill="currentColor"
              ></path>
              <path
                d="M300.9,356.856c.116,3.133,1.044,4.119,3.83,4.119,2.321,0,3.481-1.16,3.481-3.423a3.225,3.225,0,0,0-1.044-2.611c-.581-.348-.581-.348-3.54-1.219-4-1.219-5.106-1.741-6.325-2.959-1.393-1.393-2.147-3.714-2.147-6.558,0-5.686,3.134-8.7,9.052-8.7,4,0,6.963,1.393,8.414,3.946.755,1.277.987,2.669,1.1,5.4h-6.556q0-3.481-2.785-3.481c-1.741,0-2.669,1.1-2.669,3.018,0,2.147.87,3.017,3.772,3.829,4.874,1.277,5.8,1.683,6.964,2.785,1.567,1.451,2.32,3.6,2.32,6.673,0,6.209-3.365,9.168-10.27,9.168-4.527,0-7.718-1.509-9.11-4.294-.7-1.335-.987-2.9-1.044-5.686Z"
                transform="translate(-25.553 -4.546)"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <div style={tipsContentBoxStyle}>
          <div style={tipsInnerWrapperStyle}>
            <div style={tipsTextAreaStyle}>
              <div style={tipsTaglineWrapperStyle}>
                <p style={tipsTaglineTextStyle}>{taglineText}</p>
              </div>
              <p style={tipsTitleTextStyle}>{titleText}</p>
              <p style={tipsBodyTextStyle}>{bodyText}</p>
            </div>
            <div style={tipsImageWrapperStyle}>{imageUrl ? <img src={imageUrl} alt={imageAlt} style={tipsImageStyle} /> : <div style={placeholderStyle}>{__("画像を選択してください", "my-custom-blocks")}</div>}</div>
          </div>
        </div>
      </div>
    </>
  );
}
