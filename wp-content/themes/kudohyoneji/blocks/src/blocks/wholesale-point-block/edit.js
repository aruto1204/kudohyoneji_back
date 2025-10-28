import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, Button, TextControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { bodyText, beforeImageUrl, beforeImageId, beforeImageAlt, afterImageUrl, afterImageId, afterImageAlt, bottomImageUrl, bottomImageId, bottomImageAlt, rightImageUrl, rightImageId, rightImageAlt, marginTop } = attributes;

  const onSelectBeforeImage = (media) => {
    setAttributes({
      beforeImageUrl: media.url,
      beforeImageId: media.id,
      beforeImageAlt: media.alt,
    });
  };

  const onRemoveBeforeImage = () => {
    setAttributes({
      beforeImageUrl: "",
      beforeImageId: 0,
      beforeImageAlt: "",
    });
  };

  const onSelectAfterImage = (media) => {
    setAttributes({
      afterImageUrl: media.url,
      afterImageId: media.id,
      afterImageAlt: media.alt,
    });
  };

  const onRemoveAfterImage = () => {
    setAttributes({
      afterImageUrl: "",
      afterImageId: 0,
      afterImageAlt: "",
    });
  };

  const onSelectBottomImage = (media) => {
    setAttributes({
      bottomImageUrl: media.url,
      bottomImageId: media.id,
      bottomImageAlt: media.alt,
    });
  };

  const onRemoveBottomImage = () => {
    setAttributes({
      bottomImageUrl: "",
      bottomImageId: 0,
      bottomImageAlt: "",
    });
  };

  const onSelectRightImage = (media) => {
    setAttributes({
      rightImageUrl: media.url,
      rightImageId: media.id,
      rightImageAlt: media.alt,
    });
  };

  const onRemoveRightImage = () => {
    setAttributes({
      rightImageUrl: "",
      rightImageId: 0,
      rightImageAlt: "",
    });
  };

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
    justifyContent: "space-between",
    gap: "1.25rem", // 20px
    position: "relative",
  };

  const leftColumnStyle = {
    width: "51.8%",
    height: "auto",
    maxWidth: "500px", // 125 * 4 = 500px
    margin: "0",
  };

  const bodyTextStyle = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.66",
    margin: "0",
    color: "#383838",
  };

  const beforeAfterStyle = {
    width: "100%",
    height: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    marginTop: "50px",
  };

  const beforeAfterLabelStyle = {
    fontSize: "16px",
    fontWeight: "400",
    marginTop: "7px",
    color: "#383838",
    textAlign: "center",
  };

  const bottomImageStyle = {
    width: "100%",
    height: "auto",
    display: "block",

    marginBottom: "66px",
  };

  const rightColumnStyle = {
    maxWidth: "394px",
    width: "40.8%",
    height: "auto",
    display: "block",
  };

  const blockProps = useBlockProps({
    className: "wholesale-point-block",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextareaControl label={__("本文テキスト", "my-custom-blocks")} value={bodyText} onChange={(value) => setAttributes({ bodyText: value })} rows={6} />
        </PanelBody>

        <PanelBody title={__("画像設定", "my-custom-blocks")}>
          <div style={{ marginBottom: "20px" }}>
            <h3>{__("施工前画像", "my-custom-blocks")}</h3>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectBeforeImage}
                allowedTypes={["image"]}
                value={beforeImageId}
                render={({ open }) => (
                  <div>
                    {beforeImageUrl ? (
                      <div>
                        <img src={beforeImageUrl} alt={beforeImageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                        <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                          {__("画像を変更", "my-custom-blocks")}
                        </Button>
                        <Button onClick={onRemoveBeforeImage} variant="secondary" isDestructive>
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
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3>{__("施工後画像", "my-custom-blocks")}</h3>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectAfterImage}
                allowedTypes={["image"]}
                value={afterImageId}
                render={({ open }) => (
                  <div>
                    {afterImageUrl ? (
                      <div>
                        <img src={afterImageUrl} alt={afterImageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                        <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                          {__("画像を変更", "my-custom-blocks")}
                        </Button>
                        <Button onClick={onRemoveAfterImage} variant="secondary" isDestructive>
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
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3>{__("下部画像（横長）", "my-custom-blocks")}</h3>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectBottomImage}
                allowedTypes={["image"]}
                value={bottomImageId}
                render={({ open }) => (
                  <div>
                    {bottomImageUrl ? (
                      <div>
                        <img src={bottomImageUrl} alt={bottomImageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                        <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                          {__("画像を変更", "my-custom-blocks")}
                        </Button>
                        <Button onClick={onRemoveBottomImage} variant="secondary" isDestructive>
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
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3>{__("右側メイン画像", "my-custom-blocks")}</h3>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectRightImage}
                allowedTypes={["image"]}
                value={rightImageId}
                render={({ open }) => (
                  <div>
                    {rightImageUrl ? (
                      <div>
                        <img src={rightImageUrl} alt={rightImageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                        <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                          {__("画像を変更", "my-custom-blocks")}
                        </Button>
                        <Button onClick={onRemoveRightImage} variant="secondary" isDestructive>
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
          </div>
        </PanelBody>

        <PanelBody title={__("スペース設定", "my-custom-blocks")}>
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
          {/* Left */}
          <div style={leftColumnStyle}>
            <p style={bodyTextStyle} dangerouslySetInnerHTML={{ __html: bodyText.replace(/\n/g, "<br />") }} />

            <div style={beforeAfterStyle}>
              <div className="wholesale-point-block__image-item">
                {beforeImageUrl ? <img src={beforeImageUrl} alt={beforeImageAlt} style={{ display: "block", width: "100%", height: "auto" }} /> : <div className="wholesale-point-block__placeholder">{__("施工前画像", "my-custom-blocks")}</div>}
                <p style={beforeAfterLabelStyle}>施工前</p>
              </div>

              <div className="wholesale-point-block__image-item">
                {afterImageUrl ? <img src={afterImageUrl} alt={afterImageAlt} style={{ display: "block", width: "100%", height: "auto" }} /> : <div className="wholesale-point-block__placeholder">{__("施工後画像", "my-custom-blocks")}</div>}
                <p style={beforeAfterLabelStyle}>施工後</p>
              </div>
            </div>

            {bottomImageUrl ? <img src={bottomImageUrl} alt={bottomImageAlt} style={bottomImageStyle} /> : <div className="wholesale-point-block__placeholder wholesale-point-block__bottom-image">{__("下部画像", "my-custom-blocks")}</div>}
          </div>

          {/* Right */}
          <div style={rightColumnStyle}>{rightImageUrl ? <img src={rightImageUrl} alt={rightImageAlt} style={{ display: "block", width: "100%", height: "auto" }} /> : <div className="wholesale-point-block__placeholder">{__("右側メイン画像", "my-custom-blocks")}</div>}</div>
        </div>
      </div>
    </>
  );
}
