/**
 * Save component for Ikeuchi Shakanai Banner Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { mainText, highlightText, maxWidth, marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-banner",
    style: {
      marginTop: marginTop,
    },
  });

  return (
    <div {...blockProps}>
      <div className="banner-container" style={{ maxWidth: maxWidth }}>
        <div className="banner-inner">
          <p className="banner-text">
            {mainText}
            <span className="highlight-text">{highlightText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
