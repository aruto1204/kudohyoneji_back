import { __ } from "@wordpress/i18n";
import { InspectorControls, InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

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
  "my-custom-blocks/ikeuchi-shakanai-image-content-block",
];

const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];

export default function edit({ attributes, setAttributes }) {
  const { headerText, marginTop } = attributes;

  const containerStyle = {
    maxWidth: "964px",
    width: "100%",
    height: "auto",
    margin: "0 auto",
    marginTop: marginTop || "50px",
    paddingTop: "20px",
    paddingBottom: "72px",
    backgroundColor: "#EDF9F3",
    border: "1px dashed #ccc",
  };

  const headerStyle = {
    width: "100%",
    height: "auto",
    padding: "8px 16px",
    backgroundColor: "#0B8B4B",
    boxSizing: "border-box",
  };

  const headerTextStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#F7F7F7",
    letterSpacing: "0.03em",
    lineHeight: "1.4",
    textAlign: "center",
    margin: 0,
  };

  const contentStyle = {
    width: "100%",
    marginTop: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
    boxSizing: "border-box",
  };

  const blockProps = useBlockProps({
    style: containerStyle,
    className: "inquiry-container-wrapper",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("ヘッダー設定", "my-custom-blocks")}>
          <TextControl label={__("ヘッダーテキスト", "my-custom-blocks")} value={headerText} onChange={(value) => setAttributes({ headerText: value })} help={__("ヘッダーに表示するテキストを入力してください", "my-custom-blocks")} />
        </PanelBody>

        <PanelBody title={__("スペーシング設定", "my-custom-blocks")}>
          <UnitControl
            label={__("上マージン", "my-custom-blocks")}
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

      <div {...blockProps}>
        <div style={headerStyle}>
          <p style={headerTextStyle}>{headerText}</p>
        </div>
        <div style={contentStyle}>
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
        </div>
      </div>
    </>
  );
}
