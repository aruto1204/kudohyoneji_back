/**
 * Save component for Numbered List Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { item1, item2, item3, maxWidth, marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "numbered-list-block",
    style: {
      maxWidth: maxWidth,
      marginTop: marginTop,
    },
  });

  const items = [item1, item2, item3];
  const numbers = ["①", "②", "③"];

  return (
    <div {...blockProps}>
      <ul className="numbered-list-container">
        {items.map((item, index) => (
          <li key={index} className="numbered-list-item">
            <p className="number-symbol">{numbers[index]}</p>
            <p
              className="item-text"
              dangerouslySetInnerHTML={{
                __html: item.replace(/\n/g, "<br />"),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
