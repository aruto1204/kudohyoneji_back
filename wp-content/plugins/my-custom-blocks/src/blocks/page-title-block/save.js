/**
 * Save component for Page Title Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { title, subtitle } = attributes;

  const blockProps = useBlockProps.save({
    className: "page-title-block",
  });

  return (
    <div {...blockProps}>
      <div className="w-full">
        <h2 className="page-title-main">{title}</h2>
        <p className="page-title-sub">{subtitle}</p>
      </div>
    </div>
  );
}
