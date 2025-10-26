/**
 * Save component for Title Banner Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { titleText, backgroundColor, textColor, marginTop } = attributes;

  // インラインスタイルでカスタマイズ可能な属性を設定
  const containerStyle = {
    width: "100%",
    height: "auto",
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "2px",
    paddingBottom: "2px",
    backgroundColor: backgroundColor,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: marginTop,
    maxWidth: "964px", // max-w-241 equivalent (241 * 4 = 964px)
  };

  const textStyle = {
    fontWeight: "700",
    color: textColor,
    letterSpacing: "0.03em",
    lineHeight: "1.25",
    margin: "0",
  };

  const blockProps = useBlockProps.save({
    className: "title-banner-block",
  });

  return (
    <div {...blockProps}>
      <div style={containerStyle}>
        <p className="title-banner-text" style={textStyle}>
          {titleText}
        </p>
      </div>
    </div>
  );
}
