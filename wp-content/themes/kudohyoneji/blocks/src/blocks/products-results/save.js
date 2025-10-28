/**
 * Save component for Message Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { text, maxWidth, marginTop } = attributes;

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
    fontWeight: "bold",
    letterSpacing: "0.03em",
    color: "#383838",
    lineHeight: "2",
  };

  const blockProps = useBlockProps.save({
    className: "products-results-block",
  });

  return (
    <div {...blockProps} style={containerStyle}>
      <p style={textStyle} dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} />
    </div>
  );
}
