/**
 * Save component for Sales Maintenance Mark Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { text, marginTop, fontSizeMd, fontSizeSm, fontSizeXs, letterSpacing, maxWidth } = attributes;

  const blockStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop,
  };

  const containerStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "0 28px",
    boxSizing: "border-box",
    position: "relative",
  };

  // レスポンシブ対応のためのメディアクエリスタイル
  const responsiveStyle = `
    .mark-block-text {
      font-size: ${fontSizeXs};
      letter-spacing: ${letterSpacing};
      font-weight: 700;
      line-height: 1.5;
      text-align: center;
      color: #0b8b4b;
    }
    @media (min-width: 640px) {
    .mark-block-text {
      font-size: ${fontSizeSm};
    }
    @media (min-width: 768px) {
    .mark-block-text {
        font-size: ${fontSizeMd};
      }
    }
  `;

  const blockProps = useBlockProps.save({
    className: "sales-maintenance-mark",
  });

  return (
    <div {...blockProps} style={blockStyle}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
      <div className="business-brackets" style={containerStyle}>
        <p
          className="mark-block-text"
          dangerouslySetInnerHTML={{
            __html: text.replace(/\n/g, "<br />"),
          }}
        />
      </div>
    </div>
  );
}
