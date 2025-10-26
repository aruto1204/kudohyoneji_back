/**
 * Save component for Message Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { messageText, textColor, marginTop } = attributes;

  // インラインスタイルでカスタマイズ可能な属性を設定
  const containerStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const textStyle = {
    fontWeight: "700",
    color: textColor,
    letterSpacing: "0.03em",
    lineHeight: "normal",
    margin: "0",
    textAlign: "center",
  };

  const blockProps = useBlockProps.save({
    className: "message-block",
  });

  return (
    <div {...blockProps} style={containerStyle}>
      <p className="message-text" style={textStyle} dangerouslySetInnerHTML={{ __html: messageText.replace(/\n/g, "<br />") }} />
    </div>
  );
}
