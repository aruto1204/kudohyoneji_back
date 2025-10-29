/**
 * Save component for Message Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { messageText, textColor, marginTop, fontSizeMd, fontSizeSm, fontSizeXs, clientId, maxwidth, textAlign } = attributes;

  // インラインスタイルでカスタマイズ可能な属性を設定
  const containerStyle = {
    maxWidth: maxwidth,
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
    textAlign: textAlign,
  };

  // レスポンシブ対応のためのメディアクエリスタイル
  const responsiveStyle = `
    .message-text-${clientId} {
      font-size: ${fontSizeXs};
    }
    @media (min-width: 640px) {
    .message-text-${`${clientId}`} {
      font-size: ${fontSizeSm};
    }
    @media (min-width: 768px) {
    .message-text-${clientId} {
        font-size: ${fontSizeMd};
      }
    }
  `;

  const blockProps = useBlockProps.save({
    className: "message-block",
  });

  return (
    <div {...blockProps} style={containerStyle}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
      <p className={`message-text-${clientId}`} style={textStyle} dangerouslySetInnerHTML={{ __html: messageText.replace(/\n/g, "<br />") }} />
    </div>
  );
}
