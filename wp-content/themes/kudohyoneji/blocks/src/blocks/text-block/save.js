/**
 * Save component for Message Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { text, textColor, marginTop, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, maxWidth } = attributes;

  // インラインスタイルでカスタマイズ可能な属性を設定
  const containerStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    marginTop: marginTop,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const textStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: textColor,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    textAlign: textAlign,
  };

  const blockProps = useBlockProps.save({
    className: "text-block",
  });

  return (
    <div {...blockProps} style={containerStyle}>
      <p style={textStyle} dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} />
    </div>
  );
}
