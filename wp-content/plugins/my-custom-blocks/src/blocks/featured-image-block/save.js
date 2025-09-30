import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { imageUrl, imageAlt, marginTop, marginBottom } = attributes;

  // 画像がない場合は何も保存しない
  if (!imageUrl) {
    return null;
  }

  const containerStyle = {
    maxWidth: "880px",
    width: "100%",
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "0px",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
  };

  const blockProps = useBlockProps.save({
    className: "featured-image-block-wrapper",
    style: containerStyle,
  });

  return (
    <div {...blockProps}>
      <img src={imageUrl} alt={imageAlt || "アイキャッチ画像"} style={imageStyle} loading="lazy" />
    </div>
  );
}
