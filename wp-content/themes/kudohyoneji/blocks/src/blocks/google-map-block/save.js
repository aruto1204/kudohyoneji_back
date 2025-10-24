import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { mapUrl, marginTop } = attributes;

  // Google MapのURLが設定されていない場合は何も表示しない
  if (!mapUrl) {
    return null;
  }

  // iframeのsrcを抽出
  const extractSrc = (url) => {
    if (url.includes("<iframe")) {
      const match = url.match(/src="([^"]+)"/);
      return match ? match[1] : "";
    }
    return url;
  };

  const mapSrc = extractSrc(mapUrl);

  if (!mapSrc) {
    return null;
  }

  const blockProps = useBlockProps.save({
    className: "google-map-block-wrapper",
  });

  return (
    <div {...blockProps}>
      <div
        className="google-map-container"
        style={{
          maxWidth: "750px",
          marginTop: marginTop || "32px",
          borderRadius: "20px",
        }}
      >
        <iframe src={mapSrc} className="google-map-iframe" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" />
      </div>
    </div>
  );
}
