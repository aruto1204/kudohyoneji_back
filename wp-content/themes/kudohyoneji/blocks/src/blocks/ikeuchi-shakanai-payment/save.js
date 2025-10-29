/**
 * Save component for Payment Method Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { headerText, mainText, noteText, maxWidth, marginTop } = attributes;

  // インラインスタイルでカスタマイズ可能な属性を設定
  const containerStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: marginTop,
    padding: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #b2b2b2",
    boxSizing: "border-box",
  };

  const headerContainerStyle = {
    width: "fit-content",
    minWidth: "188px", // md:min-w-47
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "8px",
    backgroundColor: "#0b8b4b",
  };

  const headerTextStyle = {
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    color: "#ffffff",
    margin: "0",
  };

  const mainTextStyle = {
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.03em",
    color: "#0b8b4b",
    textAlign: "center",
    marginTop: "18px",
    marginBottom: "0",
  };

  const noteTextStyle = {
    fontWeight: "700",
    lineHeight: "1.33",
    letterSpacing: "0.03em",
    textAlign: "center",
    color: "#000000",
    marginTop: "28px",
    marginBottom: "0",
  };

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-payment",
  });

  return (
    <div {...blockProps}>
      <div style={containerStyle}>
        <div style={headerContainerStyle}>
          <p className="payment-header-text" style={headerTextStyle}>
            {headerText}
          </p>
        </div>
        <p className="payment-main-text" style={mainTextStyle}>{mainText}</p>
        <p className="payment-note-text" style={noteTextStyle}>{noteText}</p>
      </div>
    </div>
  );
}
