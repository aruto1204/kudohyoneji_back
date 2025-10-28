import { __ } from "@wordpress/i18n";
import { InspectorControls, InnerBlocks, useBlockProps, ColorPalette } from "@wordpress/block-editor";
import { PanelBody, RangeControl, ToggleControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

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
];

const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];

export default function Edit({ attributes, setAttributes }) {
  const { backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, padding } = attributes;

  // 直接インラインスタイルを設定
  const blockStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#ffffff",
    borderRadius: borderRadius || "20px",
    marginTop: marginTop || "50px",
    marginBottom: marginBottom || "0px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: paddingTop || "48px",
    paddingBottom: paddingBottom || "100px",
    boxSizing: "border-box",
    border: "1px dashed #ccc",
    minHeight: "100px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const blockProps = useBlockProps({
    style: blockStyle,
    className: `container-block-wrapper ${padding ? "padding-inline" : ""}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("スタイル設定", "my-custom-blocks")}>
          <div style={{ marginBottom: "20px" }}>
            <label>{__("背景色", "my-custom-blocks")}</label>
            <ColorPalette
              value={backgroundColor}
              onChange={(color) =>
                setAttributes({
                  backgroundColor: color || "#ffffff",
                })
              }
              colors={[
                { name: "白", color: "#ffffff" },
                { name: "グレー", color: "#F7F7F7" },
                { name: "黒", color: "#2C2C2C" },
                { name: "グリーン", color: "#0B8B4B" },
              ]}
            />
          </div>

          <UnitControl
            label={__("角丸", "my-custom-blocks")}
            value={borderRadius}
            onChange={(value) => setAttributes({ borderRadius: value })}
            units={[
              { value: "px", label: "px" },
              { value: "%", label: "%" },
            ]}
            __next40pxDefaultSize
          />
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

          <ToggleControl label={__("左右パディングを有効にする", "my-custom-blocks")} checked={padding} onChange={(value) => setAttributes({ padding: value })} help={__("左右にパディングを追加します", "my-custom-blocks")} __nextHasNoMarginBottom />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
      </div>
    </>
  );
}
