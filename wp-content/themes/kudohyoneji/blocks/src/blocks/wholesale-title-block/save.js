/**
 * Save component for Wholesale Title Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { title, subTitle, bodyText, imageUrl, imageMaxWidth, marginTop, imageAlt } = attributes;

  const blockProps = useBlockProps.save({
    className: "wholesale-title-block",
    style: {
      marginTop: marginTop,
    },
  });

  return (
    <div {...blockProps}>
      <div className="wholesale-title-container">
        <div className="wholesale-title-content">
          <p
            className="wholesale-title"
            dangerouslySetInnerHTML={{
              __html: title.replace(/\n/g, "<br />"),
            }}
          />
          <p
            className="wholesale-subtitle"
            dangerouslySetInnerHTML={{
              __html: subTitle.replace(/\n/g, "<br />"),
            }}
          />
          <p
            className="wholesale-body"
            dangerouslySetInnerHTML={{
              __html: bodyText.replace(/\n/g, "<br />"),
            }}
          />
        </div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="wholesale-image"
            style={{
              maxWidth: imageMaxWidth,
            }}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
