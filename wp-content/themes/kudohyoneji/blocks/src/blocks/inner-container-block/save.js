import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { maxWidth, backgroundColor, marginTop, marginBottom, paddingTop, paddingBottom } = attributes;

  const containerStyle = {
    width: "100%",
    maxWidth: maxWidth || "964px",
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "0px",
    marginInline: "auto",
    backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#EDF9F3",
    boxSizing: "border-box",
    paddingInline: "20px",
    paddingTop: paddingTop || "20px",
    paddingBottom: paddingBottom || "20px",
    minHeight: "80px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const blockProps = useBlockProps.save({
    className: "inner-container-block-wrapper",
    style: containerStyle,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
