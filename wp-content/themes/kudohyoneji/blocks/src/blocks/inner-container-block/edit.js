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
  "my-custom-blocks/width-container-block",
  "my-custom-blocks/inner-container-block",
];

const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];

export default function Edit({ attributes, setAttributes }) {
  const { maxWidth, backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, paddingInline, centerContent, padding } = attributes;

  // 直接インラインスタイルを設定
  const containerStyle = {
    width: "100%",
    ...(padding
      ? {
          maxWidth: maxWidth ? `${parseInt(maxWidth) + 40}px` : "1240px",
        }
      : {
          maxWidth: maxWidth || "1200px",
        }),
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "0px",
    marginLeft: centerContent ? "auto" : "0",
    marginRight: centerContent ? "auto" : "0",
    ...(padding && {
      paddingLeft: "20px",
      paddingRight: "20px",
    }),
    boxSizing: "border-box",
    border: "1px dashed #ccc",
    minHeight: "80px",
  };

  const blockStyle = {
    width: "100%",
    height: "100%",
    borderRadius: borderRadius || "0px",
    backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#EDF9F3",
    paddingTop: paddingTop || "20px",
    paddingBottom: paddingBottom || "20px",
    paddingLeft: paddingInline || "0",
    paddingRight: paddingInline || "0",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const blockProps = useBlockProps({
    style: containerStyle,
    // blockStyle: blockStyle,
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

          <ToggleControl label={__("中央寄せ", "my-custom-blocks")} checked={centerContent} onChange={(value) => setAttributes({ centerContent: value })} help={__("コンテナを中央に配置します", "my-custom-blocks")} __nextHasNoMarginBottom />
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

          <UnitControl
            label={__("左右パディング", "my-custom-blocks")}
            value={paddingInline}
            onChange={(value) => setAttributes({ paddingInline: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
          />
          <ToggleControl label={__("左右に余白", "my-custom-blocks")} checked={padding} onChange={(value) => setAttributes({ padding: value })} help={__("コンテナを左右に余白を追加します", "my-custom-blocks")} __nextHasNoMarginBottom />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={blockStyle}>
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
        </div>
      </div>
    </>
  );
}
