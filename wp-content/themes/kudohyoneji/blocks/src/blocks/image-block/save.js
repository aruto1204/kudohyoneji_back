/**
 * Save component for Wholesale Title Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { imageUrl, marginTop, imageAlt, align, imageMaxWidth, imageId } = attributes;

  const blockProps = useBlockProps.save({
    className: "block",
    style: {
      marginTop: marginTop,
      maxWidth: imageMaxWidth,
      display: "block",
      width: "100%",
      height: "auto",
      zIndex: 10,
      ...(align === "center" && { marginInline: "auto" }),
      ...(align === "left" && { marginRight: "auto" }),
      ...(align === "right" && { marginLeft: "auto" }),
    },
  });

  return (
    <div {...blockProps}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          loading="lazy"
        />
      )}
    </div>
  );
}
