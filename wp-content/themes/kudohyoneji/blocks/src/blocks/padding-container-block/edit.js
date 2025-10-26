import { __ } from "@wordpress/i18n";
import { InspectorControls, InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { marginTop } = attributes;

  const blockProps = useBlockProps({
    className: "padding-container-block-wrapper",
    style: {
      marginTop: marginTop || "0px",
      width: "100%",
      height: "auto",
      border: "1px dashed #ccc",
      minHeight: "100px",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      boxSizing: "border-box",
    },
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("スペーシング設定", "my-custom-blocks")}>
          <UnitControl
            label={__("上マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <InnerBlocks templateLock={false} />
      </div>
    </>
  );
}
