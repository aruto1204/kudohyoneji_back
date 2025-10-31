import { __ } from "@wordpress/i18n";
import { InspectorControls, InnerBlocks, useBlockProps, ColorPalette } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

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
  "my-custom-blocks/hero-block",
  "my-custom-blocks/testimonial-block",
  "my-custom-blocks/pricing-table",
  "my-custom-blocks/container-block",
  "my-custom-blocks/link-button-block",
  "my-custom-blocks/inner-container-block",
  "my-custom-blocks/title-banner-block",
  "my-custom-blocks/message-block",
  "my-custom-blocks/text-block",
  "my-custom-blocks/image-block",
  "my-custom-blocks/products-results",
  "my-custom-blocks/symptom-check-block",
  "my-custom-blocks/numbered-list-block",
  "my-custom-blocks/business-certificate-table",
  "my-custom-blocks/mark-block",
  "my-custom-blocks/ikeuchi-shakanai-payment",
  "my-custom-blocks/ikeuchi-shakanai-app",
  "my-custom-blocks/ikeuchi-shakanai-container",
  "my-custom-blocks/ikeuchi-shakanai-service",
  "my-custom-blocks/ikeuchi-shakanai-tips",
  "my-custom-blocks/ikeuchi-shakanai-table",
  "my-custom-blocks/ikeuchi-shakanai-banner",
  "my-custom-blocks/ikeuchi-shakanai-service-table",
];

// const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];

export default function Edit({ attributes, setAttributes }) {
  const { maxWidth, backgroundColor, marginTop, marginBottom, paddingTop, paddingBottom } = attributes;

  // 直接インラインスタイルを設定
  const containerStyle = {
    width: "100%",
    backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#EDF9F3",
    maxWidth: maxWidth || "964px",
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "0px",
    boxSizing: "border-box",
    border: "1px dashed #ccc",
    paddingInline: "20px",
    paddingTop: paddingTop || "20px",
    paddingBottom: paddingBottom || "20px",
    minHeight: "80px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const blockProps = useBlockProps({
    style: containerStyle,
    className: "inner-container-block-wrapper",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("幅設定", "my-custom-blocks")}>
          <UnitControl
            label={__("最大幅", "my-custom-blocks")}
            value={maxWidth}
            onChange={(value) => setAttributes({ maxWidth: value })}
            units={[
              { value: "px", label: "px" },
              { value: "%", label: "%" },
              { value: "rem", label: "rem" },
              { value: "em", label: "em" },
              { value: "vw", label: "vw" },
            ]}
            __next40pxDefaultSize
          />
        </PanelBody>

        <PanelBody title={__("スタイル設定", "my-custom-blocks")}>
          <div style={{ marginBottom: "20px" }}>
            <label>{__("背景色", "my-custom-blocks")}</label>
            <ColorPalette
              value={backgroundColor}
              onChange={(color) =>
                setAttributes({
                  backgroundColor: color || "#EDF9F3",
                })
              }
              colors={[
                { name: "白", color: "#ffffff" },
                { name: "グレー", color: "#F7F7F7" },
                { name: "黒", color: "#2C2C2C" },
                { name: "グリーン", color: "#0B8B4B" },
                { name: "ライトグリーン", color: "#EDF9F3" },
                { name: "透明", color: "transparent" },
              ]}
            />
          </div>
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

          <UnitControl
            label={__("下マージン", "my-custom-blocks")}
            value={marginBottom}
            onChange={(value) => setAttributes({ marginBottom: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
          />

          <UnitControl
            label={__("上パディング", "my-custom-blocks")}
            value={paddingTop}
            onChange={(value) => setAttributes({ paddingTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
          />

          <UnitControl
            label={__("下パディング", "my-custom-blocks")}
            value={paddingBottom}
            onChange={(value) => setAttributes({ paddingBottom: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} templateLock={false} />
      </div>
    </>
  );
}
