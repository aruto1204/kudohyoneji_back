/**
 * Save component for Content Title Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { mainTitle, subTitle, bodyText, marginTop, enableMinWidth, isTwoColumn } = attributes;

  const blockProps = useBlockProps.save({
    className: "content-title-block",
    style: {
      marginTop: marginTop,
    },
  });

  return (
    <div {...blockProps}>
      <div className={`content-title-container ${isTwoColumn ? "two-column" : "one-column"}`}>
        <div className={`left-column ${enableMinWidth && isTwoColumn ? "min-width-fit" : ""}`}>
          <p
            className="main-title"
            dangerouslySetInnerHTML={{
              __html: mainTitle.replace(/\n/g, "<br />"),
            }}
          />
          <p
            className="sub-title"
            dangerouslySetInnerHTML={{
              __html: subTitle.replace(/\n/g, "<br />"),
            }}
          />
        </div>
        {isTwoColumn && (
          <div className="right-column">
            <p className="body-text" dangerouslySetInnerHTML={{ __html: bodyText.replace(/\n/g, "<br />") }} />
          </div>
        )}
      </div>
    </div>
  );
}
