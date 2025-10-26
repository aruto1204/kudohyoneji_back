import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "padding-container-block-wrapper",
    style: {
      marginTop: marginTop || "0px",
      width: "100%",
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      boxSizing: "border-box",
    },
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
