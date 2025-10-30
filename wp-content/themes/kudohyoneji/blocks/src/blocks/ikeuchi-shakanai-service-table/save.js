/**
 * Save component for Ikeuchi Shakanai Service Table Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { serviceName, servicePrice, servicePriceUnit, serviceDescription, header1, header2, header3, rows, marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-service-table",
    style: { marginTop },
  });

  return (
    <div {...blockProps}>
      <div className="service-table-container">
        {/* 左側：サービス情報 */}
        <div className="service-info">
          <p className="service-title">
            <span className="service-name">{serviceName}</span>
            <span className="service-price-wrapper">
              <span className="service-price-number">{servicePrice} </span>
              <span className="service-price-unit">{servicePriceUnit}</span>
            </span>
          </p>
          <p className="service-description">{serviceDescription}</p>
        </div>

        {/* 右側：テーブル */}
        <div className="table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th className="table-header header-brown">{header1}</th>
                <th className="table-header header-brown">{header2}</th>
                <th className="table-header header-rose">{header3}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="table-cell cell-brown">{row.itemName}</td>
                  <td className="table-cell cell-brown" colSpan={row.isSpecialColspan ? 2 : 1}>
                    {row.normalPrice}
                  </td>
                  {!row.isSpecialColspan && <td className="table-cell cell-rose">{row.specialPrice}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
