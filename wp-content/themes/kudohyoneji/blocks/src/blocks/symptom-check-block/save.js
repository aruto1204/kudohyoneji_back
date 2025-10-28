/**
 * Save component for Symptom Check Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { questionText, symptomList, marginTop } = attributes;

  const blockProps = useBlockProps.save({
    className: "symptom-check-block",
    style: {
      marginTop: marginTop,
    },
  });

  return (
    <div {...blockProps}>
      <div className="symptom-check-container">
        <p className="symptom-question">{questionText}</p>
        <p className="symptom-list" dangerouslySetInnerHTML={{ __html: symptomList.replace(/\n/g, "<br />") }} />
      </div>
    </div>
  );
}
