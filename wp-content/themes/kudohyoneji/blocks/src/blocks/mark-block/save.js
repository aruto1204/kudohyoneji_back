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
  .business-brackets {
    position: relative;
  }

  .business-brackets::before,
  .business-brackets::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 19px;
    height: calc(100% - 9px);
    border: 2px solid #b2b2b2;
  }

  .business-brackets::before {
    left: 0;
    border-right: none;
  }

  .business-brackets::after {
    right: 0;
    border-left: none;
  }
  `;

  const blockProps = useBlockProps.save({
    className: "mark-block",
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
