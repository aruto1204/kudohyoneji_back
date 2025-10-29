import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { headerText, marginTop } = attributes;

  const containerStyle = {
    maxWidth: "964px",
    width: "100%",
    height: "auto",
    margin: "0 auto",
    marginTop: marginTop,
    paddingTop: "20px",
    paddingBottom: "72px",
    backgroundColor: "#EDF9F3",
  };

  const blockProps = useBlockProps.save({
    style: containerStyle,
    className: "inquiry-container-wrapper",
  });

  return (
    <div {...blockProps}>
      <div className="inquiry-header">
        <p className="inquiry-header-text">{headerText}</p>
      </div>
      <div className="inquiry-content">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
