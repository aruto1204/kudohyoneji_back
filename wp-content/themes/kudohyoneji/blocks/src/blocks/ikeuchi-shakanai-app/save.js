import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { marginTop, bannerText, mainTitle, subText, leftImageUrl, leftImageAlt, leftImageMaxWidth, rightImageUrl, rightImageAlt, rightImageMaxWidth } = attributes;

  const containerStyle = {
    width: "100%",
    maxWidth: "906px",
    marginTop: marginTop,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-app-block",
    style: containerStyle,
  });

  return (
    <div {...blockProps}>
      <div className="drive-on-grid">
        {/* 左画像 */}
        {leftImageUrl && (
          <div className="drive-on-left-image" style={{ maxWidth: leftImageMaxWidth }}>
            <img src={leftImageUrl} alt={leftImageAlt} width="210" height="306" loading="lazy" />
          </div>
        )}

        {/* コンテンツエリア */}
        <div className="drive-on-content">
          <div className="drive-on-banner">
            <p className="drive-on-banner-text" dangerouslySetInnerHTML={{ __html: bannerText.replace(/\n/g, "<br />") }} />
          </div>
          <p className="drive-on-main-title" dangerouslySetInnerHTML={{ __html: mainTitle.replace(/\n/g, "<br />") }} />
          <p className="drive-on-sub-text" dangerouslySetInnerHTML={{ __html: subText.replace(/\n/g, "<br />") }} />
        </div>

        {/* 右画像 */}
        {rightImageUrl && (
          <div className="drive-on-right-image" style={{ maxWidth: rightImageMaxWidth }}>
            <img src={rightImageUrl} alt={rightImageAlt} width="163" height="327" loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );
}
