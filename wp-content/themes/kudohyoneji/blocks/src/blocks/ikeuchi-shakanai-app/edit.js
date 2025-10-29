import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { marginTop, bannerText, mainTitle, subText, leftImageUrl, leftImageId, leftImageAlt, leftImageMaxWidth, rightImageUrl, rightImageId, rightImageAlt, rightImageMaxWidth } = attributes;

  const editorStyle = {
    width: "100%",
    maxWidth: "906px",
    marginTop: marginTop,
    marginLeft: "auto",
    marginRight: "auto",
    border: "2px dashed #ccc",
    padding: "20px",
    boxSizing: "border-box",
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "start",
  };

  const leftImageStyle = {
    maxWidth: leftImageMaxWidth,
    width: "100%",
    height: "auto",
  };

  const contentAreaStyle = {
    width: "100%",
    maxWidth: "360px",
    paddingTop: "4px",
  };

  const bannerStyle = {
    width: "100%",
    paddingBlock: "2px",
    paddingInline: "20px",
    backgroundColor: "#DF0515",
    marginBottom: "4px",
    boxSizing: "border-box",
  };

  const bannerTextStyle = {
    fontSize: "27px",
    fontWeight: "bold",
    color: "#F7F7F7",
    margin: 0,
    letterSpacing: "0.03em",
  };

  const mainTitleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#DF0515",
    lineHeight: "1.2",
    letterSpacing: "0.03em",
    margin: 0,
    marginTop: "4px",
  };

  const subTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#383838",
    lineHeight: "1.33",
    letterSpacing: "0.03em",
    margin: 0,
    marginTop: "16px",
  };

  const rightImageStyle = {
    maxWidth: rightImageMaxWidth,
    width: "100%",
    height: "auto",
  };

  const imagePlaceholderStyle = {
    width: "100%",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
  };

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-app-editor",
  });

  const onSelectLeftImage = (media) => {
    setAttributes({
      leftImageUrl: media.url,
      leftImageId: media.id,
      leftImageAlt: media.alt || "イメージ画像",
    });
  };

  const onRemoveLeftImage = () => {
    setAttributes({
      leftImageUrl: "",
      leftImageId: 0,
      leftImageAlt: "イメージ画像",
    });
  };

  const onSelectRightImage = (media) => {
    setAttributes({
      rightImageUrl: media.url,
      rightImageId: media.id,
      rightImageAlt: media.alt || "イメージ画像",
    });
  };

  const onRemoveRightImage = () => {
    setAttributes({
      rightImageUrl: "",
      rightImageId: 0,
      rightImageAlt: "イメージ画像",
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
          />
        </PanelBody>

        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextareaControl label={__("バナーテキスト", "my-custom-blocks")} value={bannerText} onChange={(value) => setAttributes({ bannerText: value })} rows={2} __next40pxDefaultSize />

          <TextareaControl label={__("メインタイトル", "my-custom-blocks")} value={mainTitle} onChange={(value) => setAttributes({ mainTitle: value })} help={__("HTMLタグ（<br />など）が使用できます", "my-custom-blocks")} rows={3} __next40pxDefaultSize />

          <TextareaControl label={__("サブテキスト", "my-custom-blocks")} value={subText} onChange={(value) => setAttributes({ subText: value })} help={__("HTMLタグ（<br />など）が使用できます", "my-custom-blocks")} rows={4} __next40pxDefaultSize />
        </PanelBody>

        <PanelBody title={__("左画像設定", "my-custom-blocks")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectLeftImage}
              allowedTypes={["image"]}
              value={leftImageId}
              render={({ open }) => (
                <div>
                  {leftImageUrl ? (
                    <div>
                      <img src={leftImageUrl} alt={leftImageAlt} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
                      <Button onClick={open} variant="secondary" style={{ marginRight: "8px" }}>
                        {__("画像を変更", "my-custom-blocks")}
                      </Button>
                      <Button onClick={onRemoveLeftImage} variant="secondary" isDestructive>
                        {__("画像を削除", "my-custom-blocks")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} variant="primary">
                      {__("左画像を選択", "my-custom-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>

          <UnitControl
            label={__("左画像の最大幅", "my-custom-blocks")}
            value={leftImageMaxWidth}
            onChange={(value) => setAttributes({ leftImageMaxWidth: value })}
            units={[
              { value: "px", label: "px" },
              { value: "%", label: "%" },
            ]}
            __next40pxDefaultSize
          />
        </PanelBody>

        <PanelBody title={__("右画像設定", "my-custom-blocks")}>
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
                      {__("右画像を選択", "my-custom-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>

          <UnitControl
            label={__("右画像の最大幅", "my-custom-blocks")}
            value={rightImageMaxWidth}
            onChange={(value) => setAttributes({ rightImageMaxWidth: value })}
            units={[
              { value: "px", label: "px" },
              { value: "%", label: "%" },
            ]}
            __next40pxDefaultSize
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} style={editorStyle}>
        <div style={gridStyle}>
          {/* 左画像 */}
          <div style={leftImageStyle}>{leftImageUrl ? <img src={leftImageUrl} alt={leftImageAlt} style={{ width: "100%", height: "auto", display: "block" }} /> : <div style={imagePlaceholderStyle}>{__("左画像", "my-custom-blocks")}</div>}</div>

          {/* コンテンツエリア */}
          <div style={contentAreaStyle}>
            <div style={bannerStyle}>
              <p style={bannerTextStyle} dangerouslySetInnerHTML={{ __html: bannerText.replace(/\n/g, "<br />") }} />
            </div>
            <p style={mainTitleStyle} dangerouslySetInnerHTML={{ __html: mainTitle.replace(/\n/g, "<br />") }} />
            <p style={subTextStyle} dangerouslySetInnerHTML={{ __html: subText.replace(/\n/g, "<br />") }} />
          </div>

          {/* 右画像 */}
          <div style={rightImageStyle}>{rightImageUrl ? <img src={rightImageUrl} alt={rightImageAlt} style={{ width: "100%", height: "auto", display: "block" }} /> : <div style={imagePlaceholderStyle}>{__("右画像", "my-custom-blocks")}</div>}</div>
        </div>
      </div>
    </>
  );
}
