import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { maxWidth, backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, paddingInline, centerContent, padding } = attributes;

  const containerStyle = {
    width: "100%",
    ...(padding
      ? {
          maxWidth: maxWidth ? `${parseInt(maxWidth) + 40}px` : "1240px",
        }
      : {
          maxWidth: maxWidth || "1200px",
        }),
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "0px",
    marginLeft: centerContent ? "auto" : "0",
    marginRight: centerContent ? "auto" : "0",
    ...(padding && {
      paddingLeft: "20px",
      paddingRight: "20px",
    }),
    boxSizing: "border-box",
    minHeight: "80px",
  };

  const blockStyle = {
    width: "100%",
    height: "100%",
    borderRadius: borderRadius || "0px",
    backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#EDF9F3",
    paddingTop: paddingTop || "20px",
    paddingBottom: paddingBottom || "20px",
    paddingLeft: paddingInline || "0",
    paddingRight: paddingInline || "0",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const blockProps = useBlockProps.save({
    className: "inner-container-block-wrapper",
  });

  return (
    <div style={containerStyle} {...blockProps}>
      <div style={blockStyle}>
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
