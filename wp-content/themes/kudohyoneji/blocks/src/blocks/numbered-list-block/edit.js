/**
 * Edit component for Numbered List Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { item1, item2, item3, maxWidth, marginTop } = attributes;

  // エディター用のスタイル
  const editorStyle = {
    maxWidth: maxWidth,
    width: "100%",
    height: "auto",
    margin: "0 auto",
    marginTop: marginTop,
    border: "1px dashed #ccc",
    padding: "16px",
    boxSizing: "border-box",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "2",
    color: "#383838",
    marginBottom: "8px",
  };

  const numberStyle = {
    margin: "0",
  };

  const blockProps = useBlockProps({
    className: "numbered-list-block-editor",
  });

  const items = [item1, item2, item3];
  const numbers = ["①", "②", "③"];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("リスト設定", "my-custom-blocks")}>
          <TextareaControl label={__("項目①", "my-custom-blocks")} value={item1} onChange={(value) => setAttributes({ item1: value })} rows={3} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("項目②", "my-custom-blocks")} value={item2} onChange={(value) => setAttributes({ item2: value })} rows={3} __next40pxDefaultSize __nextHasNoMarginBottom />

          <TextareaControl label={__("項目③", "my-custom-blocks")} value={item3} onChange={(value) => setAttributes({ item3: value })} rows={3} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>

        <PanelBody title={__("レイアウト設定", "my-custom-blocks")}>
          <UnitControl
            label={__("最大幅", "my-custom-blocks")}
            value={maxWidth}
            onChange={(value) => setAttributes({ maxWidth: value })}
            units={[
              { value: "px", label: "px" },
              { value: "%", label: "%" },
              { value: "rem", label: "rem" },
              { value: "em", label: "em" },
            ]}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />

          <UnitControl
            label={__("上部マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
              { value: "em", label: "em" },
            ]}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={editorStyle}>
          <ul style={listStyle}>
            {items.map((item, index) => (
              <li key={index} style={listItemStyle}>
                <p style={numberStyle}>{numbers[index]}</p>
                <p style={{ margin: "0" }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
