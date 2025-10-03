import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps, ColorPalette } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { buttonText, buttonUrl, backgroundColor, textColor, borderColor, hoverTextColor, hoverBackgroundColor, marginTop, marginBottom, openInNewTab, padding } = attributes;

  // エディタ用のスタイル
  const blockStyle = {
    maxWidth: padding ? "416px" : "376px",
    width: "100%",
    height: "66px",
    marginTop: marginTop || "48px",
    marginBottom: marginBottom || "0px",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
    ...(padding && {
      paddingLeft: "20px",
      paddingRight: "20px",
    }),
  };

  const buttonStyle = {
    width: "100%",
    height: "100%",
    paddingLeft: "16px", // pl-4
    paddingRight: "16px", // pr-4
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px", // gap-2.5
    backgroundColor: backgroundColor || "#0B8B4B",
    color: textColor || "#ffffff",
    border: `1px solid ${borderColor || "#0B8B4B"}`,
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxSizing: "border-box",
  };

  const textStyle = {
    fontSize: "18px", // text-base
    fontWeight: "600", // font-semibold
    lineHeight: "1",
    letterSpacing: "0.05em", // tracking-[0.2em]
    margin: 0,
  };

  const blockProps = useBlockProps({
    className: "link-button-block-wrapper",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("ボタン設定", "my-custom-blocks")}>
          <TextControl label={__("ボタンテキスト", "my-custom-blocks")} value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextControl label={__("リンクURL", "my-custom-blocks")} value={buttonUrl} onChange={(value) => setAttributes({ buttonUrl: value })} help={__("リンク先のURLを入力してください", "my-custom-blocks")} __next40pxDefaultSize __nextHasNoMarginBottom />

          <ToggleControl label={__("別タブで開く", "my-custom-blocks")} checked={openInNewTab} onChange={(value) => setAttributes({ openInNewTab: value })} help={__("リンクを新しいタブで開く場合はオンにしてください", "my-custom-blocks")} __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("カラー設定", "my-custom-blocks")}>
          <div style={{ marginBottom: "20px" }}>
            <label>{__("背景色", "my-custom-blocks")}</label>
            <ColorPalette
              value={backgroundColor}
              onChange={(color) =>
                setAttributes({
                  backgroundColor: color || "#0B8B4B",
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

          <div style={{ marginBottom: "20px" }}>
            <label>{__("テキスト色", "my-custom-blocks")}</label>
            <ColorPalette
              value={textColor}
              onChange={(color) =>
                setAttributes({
                  textColor: color || "#ffffff",
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

          <div style={{ marginBottom: "20px" }}>
            <label>{__("ボーダー色", "my-custom-blocks")}</label>
            <ColorPalette
              value={borderColor}
              onChange={(color) =>
                setAttributes({
                  borderColor: color || "#0B8B4B",
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

          <div style={{ marginBottom: "20px" }}>
            <label>{__("ホバー時テキスト色", "my-custom-blocks")}</label>
            <ColorPalette
              value={hoverTextColor}
              onChange={(color) =>
                setAttributes({
                  hoverTextColor: color || "#0B8B4B",
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

          <div style={{ marginBottom: "20px" }}>
            <label>{__("ホバー時背景色", "my-custom-blocks")}</label>
            <ColorPalette
              value={hoverBackgroundColor}
              onChange={(color) =>
                setAttributes({
                  hoverBackgroundColor: color || "#ffffff",
                })
              }
              colors={[
                { name: "白", color: "#ffffff" },
                { name: "グレー", color: "#F7F7F7" },
                { name: "黒", color: "#2C2C2C" },
                { name: "グリーン", color: "#0B8B4B" },
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
          <ToggleControl label={__("余白", "my-custom-blocks")} checked={padding} onChange={(value) => setAttributes({ padding: value })} help={__("左右に余白を追加します", "my-custom-blocks")} __nextHasNoMarginBottom />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} style={blockStyle}>
        <div style={buttonStyle}>
          <p style={textStyle}>{buttonText || "リンクテキスト"}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: "16px", height: "18px" }}>
            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </>
  );
}
