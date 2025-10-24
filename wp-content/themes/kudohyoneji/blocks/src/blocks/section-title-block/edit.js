import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { titleText, marginTop, marginBottom, paddingInline } = attributes;

  // コンテナのスタイル（エディタ用）
  const containerStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop || "106px",
    marginBottom: marginBottom || "0px",
    border: "1px dashed #ccc",
    borderRadius: "4px",
  };

  // タイトルのスタイル（エディタ用）
  const titleStyle = {
    color: "#0b8b4b", // text-green-500
    fontWeight: "700", // font-bold
    lineHeight: "1", // leading-none
    textAlign: "center",
    margin: "0",
  };

  // レスポンシブ対応のためのメディアクエリスタイル（エディタ用）
  const responsiveStyle = `
    @media (min-width: 768px) {
      .section-title-responsive {
        font-size: 40px !important; /* md:text-[40px] */
        letter-spacing: 0.1em !important; /* sm:tracking-wider */
      }
    }
    @media (min-width: 640px) and (max-width: 767px) {
      .section-title-responsive {
        font-size: 30px !important; /* sm:text-3xl */
        letter-spacing: 0.1em !important; /* sm:tracking-wider */
      }
    }
    @media (max-width: 639px) {
      .section-title-responsive {
        font-size: 24px !important; /* text-2xl */
        letter-spacing: 0 !important;
      }
    }
  `;

  const blockProps = useBlockProps({
    className: "section-title-block-wrapper",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("セクションタイトル設定", "my-custom-blocks")}>
          <TextControl label={__("タイトルテキスト", "my-custom-blocks")} value={titleText} onChange={(value) => setAttributes({ titleText: value })} __next40pxDefaultSize __nextHasNoMarginBottom />
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
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
        <div style={containerStyle}>
          <h3 className="section-title-responsive" style={titleStyle}>
            {titleText || "セクションタイトル"}
          </h3>
        </div>
      </div>
    </>
  );
}
