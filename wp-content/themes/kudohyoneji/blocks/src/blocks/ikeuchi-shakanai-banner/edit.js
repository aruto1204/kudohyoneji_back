/**
 * Edit component for Ikeuchi Shakanai Banner Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { mainText, highlightText, maxWidth, marginTop } = attributes;

  // エディター用のスタイル
  const containerStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    margin: "0 auto",
    marginTop: marginTop,
  };

  const bannerStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "#DF0515",
    padding: "2px 20px",
    boxSizing: "border-box",
  };

  const textStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    color: "#F7F7F7",
    margin: "0",
  };

  const highlightStyle = {
    color: "#FFE100",
  };

  const blockProps = useBlockProps({
    className: "ikeuchi-shakanai-banner-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("テキスト設定", "my-custom-blocks")}>
          <TextControl label={__("メインテキスト", "my-custom-blocks")} value={mainText} onChange={(value) => setAttributes({ mainText: value })} help={__("通常表示されるテキスト", "my-custom-blocks")} />
          <TextControl label={__("強調テキスト", "my-custom-blocks")} value={highlightText} onChange={(value) => setAttributes({ highlightText: value })} help={__("黄色で強調表示されるテキスト", "my-custom-blocks")} />
        </PanelBody>

        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
          <UnitControl
            label={__("最大幅", "my-custom-blocks")}
            value={maxWidth}
            onChange={(value) => setAttributes({ maxWidth: value })}
            help={__("例: 916px, 100%", "my-custom-blocks")}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
              { value: "%", label: "%" },
            ]}
          />
          <UnitControl
            label={__("上マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={containerStyle}>
          <div style={bannerStyle}>
            <p style={textStyle}>
              {mainText}
              <span style={highlightStyle}>{highlightText}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
