import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { storeName, address, phone, businessHours, optionalItems, maxWidth, marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "store-info-list-block-wrapper",
  });

  return (
    <div {...blockProps}>
      <ul className="store-info-list" style={{ maxWidth: "702px", marginTop: marginTop || "42px" }}>
        <li className="store-info-item">
          <p className="store-info-label">店　　名</p>
          <p className="store-info-value">{storeName}</p>
        </li>

        <li className="store-info-item">
          <p className="store-info-label">住　　所</p>
          <p className="store-info-value">{address}</p>
        </li>

        <li className="store-info-item">
          <p className="store-info-label">電　　話</p>
          <p className="store-info-value">{phone}</p>
        </li>

        <li className="store-info-item">
          <p className="store-info-label">営業時間</p>
          <p className="store-info-value" dangerouslySetInnerHTML={{ __html: businessHours.replace(/\n/g, "<br />") }} />
        </li>

        {optionalItems.map((item, index) => (
          <li key={index} className="store-info-item">
            <p className="store-info-label">{item.label}</p>
            <p className="store-info-value" dangerouslySetInnerHTML={{ __html: item.value.replace(/\n/g, "<br />") }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
