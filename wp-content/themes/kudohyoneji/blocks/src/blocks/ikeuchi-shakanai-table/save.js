/**
 * Save component for Delivery Location Table Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { header1, header2, header3, header3RedText, header4, header5, rows, marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-table",
    style: {
      marginTop: marginTop,
    },
  });

  return (
    <div {...blockProps}>
      <div className="table-container">
        <table className="table-element">
          <thead>
            <tr>
              <th className="table-header">{header1}</th>
              <th className="table-header">{header2}</th>
              <th className="table-header">
                <span className="red-text">{header3RedText}</span>
                {header3.replace(header3RedText, "")}
              </th>
              <th className="table-header">{header4}</th>
              <th className="table-header">{header5}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="table-cell">{row.location}</td>
                <td className="table-cell">{row.area}</td>
                <td className={row.holidayIsRed ? "table-cell red-text" : "table-cell"}>{row.holiday}</td>
                <td className="table-cell">{row.time}</td>
                <td className="table-cell">{row.tel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
