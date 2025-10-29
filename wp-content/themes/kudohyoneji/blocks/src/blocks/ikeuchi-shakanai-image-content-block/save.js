/**
 * Save component for Ikeuchi Shakanai Image Content Block
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { imageUrl, imageAlt, captionText } = attributes;

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-image-content-block",
  });

  return (
    <div {...blockProps}>
      <div className="image-content-inner-blocks">
        <InnerBlocks.Content />
      </div>
      <div className="image-content-section">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt} width="338" height="262" className="image-content-image" loading="lazy" />
        ) : (
          <div style={{ width: "100%", height: "262px", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p>No Image</p>
          </div>
        )}
        <div className="image-content-caption-bar">
          <p className="image-content-caption-text">{captionText}</p>
        </div>
      </div>
    </div>
  );
}
