/**
 * Save component for Ikeuchi Shakanai Service Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { marginTop, mainText, smallImageUrl, smallImageAlt, largeImageUrl, largeImageAlt } = attributes;

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-service-block",
    style: { marginTop: marginTop },
  });

  return (
    <div {...blockProps}>
      <div className="service-content-area">
        <p className="service-main-text">{mainText}</p>
        {smallImageUrl && <img src={smallImageUrl} alt={smallImageAlt} width="208" height="208" className="service-small-image" loading="lazy" />}
      </div>
      <div className="service-large-image-wrapper business-gradient">{largeImageUrl && <img src={largeImageUrl} alt={largeImageAlt} width="709" height="360" className="service-large-image" loading="lazy" />}</div>
    </div>
  );
}
