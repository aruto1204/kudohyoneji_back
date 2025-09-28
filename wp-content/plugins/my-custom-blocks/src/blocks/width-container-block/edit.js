import { __ } from "@wordpress/i18n";
import { InspectorControls, InnerBlocks, useBlockProps, ColorPalette } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

const ALLOWED_BLOCKS = ["core/paragraph", "core/heading", "core/image", "core/list", "core/quote", "core/separator", "core/spacer", "core/columns", "core/group", "my-custom-blocks/hero-block", "my-custom-blocks/testimonial-block", "my-custom-blocks/pricing-table", "my-custom-blocks/container-block"];

const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];

export default function Edit({ attributes, setAttributes }) {
  const { maxWidth, backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, paddingInline, centerContent } = attributes;

  // 直接インラインスタイルを設定
  const blockStyle = {
    width: "100%",
    maxWidth: maxWidth || "1200px",
    backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#ffffff",
    borderRadius: borderRadius || "0px",
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "0px",
    marginLeft: centerContent ? "auto" : "0",
    marginRight: centerContent ? "auto" : "0",
    paddingTop: paddingTop || "20px",
    paddingBottom: paddingBottom || "20px",
    paddingLeft: paddingInline || "20px",
    paddingRight: paddingInline || "20px",
    boxSizing: "border-box",
    border: "2px dashed #007cba",
    minHeight: "80px",
    position: "relative",
  };

  const blockProps = useBlockProps({
    style: blockStyle,
    className: "width-container-block-wrapper",
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
          />

          <ToggleControl label={__("中央寄せ", "my-custom-blocks")} checked={centerContent} onChange={(value) => setAttributes({ centerContent: value })} help={__("コンテナを中央に配置します", "my-custom-blocks")} />
        </PanelBody>

        <PanelBody title={__("スタイル設定", "my-custom-blocks")}>
          <div style={{ marginBottom: "20px" }}>
            <label>{__("背景色", "my-custom-blocks")}</label>
            <ColorPalette
              value={backgroundColor}
              onChange={(color) => setAttributes({ backgroundColor: color || "#ffffff" })}
              colors={[
                { name: "透明", color: "transparent" },
                { name: "白", color: "#ffffff" },
                { name: "グレー", color: "#f5f5f5" },
                { name: "ライトブルー", color: "#e3f2fd" },
                { name: "ライトグリーン", color: "#e8f5e8" },
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
          />

          <UnitControl
            label={__("下マージン", "my-custom-blocks")}
            value={marginBottom}
            onChange={(value) => setAttributes({ marginBottom: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl
            label={__("上パディング", "my-custom-blocks")}
            value={paddingTop}
            onChange={(value) => setAttributes({ paddingTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl
            label={__("下パディング", "my-custom-blocks")}
            value={paddingBottom}
            onChange={(value) => setAttributes({ paddingBottom: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />

          <UnitControl
            label={__("左右パディング", "my-custom-blocks")}
            value={paddingInline}
            onChange={(value) => setAttributes({ paddingInline: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
      </div>
    </>
  );
}
