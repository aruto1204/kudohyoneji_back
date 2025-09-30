import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { mapUrl, marginTop } = attributes;

  const containerStyle = {
    maxWidth: "750px",
    width: "100%",
    height: "auto",
    aspectRatio: "750 / 328", // aspect-[750/328]
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: marginTop || "32px",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  };

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none",
  };

  const placeholderStyle = {
    padding: "40px 20px",
    textAlign: "center",
    color: "#666",
  };

  const blockProps = useBlockProps({
    className: "google-map-block-wrapper",
  });

  // Google MapのURLが有効かチェック
  const isValidMapUrl = mapUrl && (mapUrl.includes("google.com/maps") || mapUrl.includes("<iframe"));

  // iframeのsrcを抽出
  const extractSrc = (url) => {
    if (url.includes("<iframe")) {
      const match = url.match(/src="([^"]+)"/);
      return match ? match[1] : "";
    }
    return url;
  };

  const mapSrc = extractSrc(mapUrl);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Google Map設定", "my-custom-blocks")} initialOpen={true}>
          <TextareaControl label={__("Google Map埋め込みコードまたはURL", "my-custom-blocks")} value={mapUrl} onChange={(value) => setAttributes({ mapUrl: value })} placeholder="Google Mapの「共有」→「地図を埋め込む」からコードをコピーして貼り付けてください" rows={6} help={__("iframeタグ全体、またはsrcのURLのみを貼り付けてください", "my-custom-blocks")} />
        </PanelBody>
        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
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
          {isValidMapUrl && mapSrc ? (
            <iframe src={mapSrc} style={iframeStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" />
          ) : (
            <div style={placeholderStyle}>
              <div>
                <p style={{ margin: "0 0 10px 0", fontWeight: "600", fontSize: "16px" }}>{__("Google Map 未設定", "my-custom-blocks")}</p>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6", color: "#999" }}>{__("右サイドバーから Google Map の埋め込みコードを設定してください", "my-custom-blocks")}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
