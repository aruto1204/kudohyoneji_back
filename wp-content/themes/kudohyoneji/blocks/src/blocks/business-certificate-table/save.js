/**
 * Save component for Table Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { tableTitle, row1Label, row1Value, row2Label, row2Value, row3Label, row3Value, row4Label, row4Value, row5Label, row5Value, marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "business-certificate-table",
    style: {
      marginTop: marginTop,
    },
  });

  const rows = [
    { label: row1Label, value: row1Value },
    { label: row2Label, value: row2Value },
    { label: row3Label, value: row3Value },
    { label: row4Label, value: row4Value },
    { label: row5Label, value: row5Value },
  ];

  return (
    <div {...blockProps}>
      <div className="table-container">
        <table className="table-element">
          <thead>
            <tr>
              <th className="table-header" colSpan="2">
                {tableTitle}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="table-cell">{row.label}</td>
                <td className="table-cell">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
