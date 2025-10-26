import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom } = attributes;

  const blockProps = useBlockProps.save({
    className: "container-block-wrapper",
    style: {
      width: "100%",
      height: "auto",
      backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#ffffff",
      borderRadius: borderRadius || "20px",
      marginTop: marginTop || "50px",
      marginBottom: marginBottom || "0px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: paddingTop || "48px",
      paddingBottom: paddingBottom || "100px",
      paddingInline: "20px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      // フロントエンドでは境界線なし
    },
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
