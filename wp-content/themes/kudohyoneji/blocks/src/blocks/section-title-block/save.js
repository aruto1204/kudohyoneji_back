import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { titleText, marginTop, marginBottom, paddingInline } = attributes;

  // コンテナのスタイル
  const containerStyle = {
    width: "100%",
    height: "auto",
    marginTop: marginTop || "106px",
    marginBottom: marginBottom || "0px",
  };

  // タイトルのスタイル
  const titleStyle = {
    color: "#0B8B4B", // text-green-500
    fontWeight: "700", // font-bold
    lineHeight: "1", // leading-none
    textAlign: "center",
    margin: "0",
  };

  // レスポンシブ対応のためのメディアクエリスタイル
  const responsiveStyle = `
    @media (min-width: 768px) {
      .section-title-responsive {
        font-size: 40px !important; /* md:text-[40px] */
        letter-spacing: 0.1em !important; /* sm:tracking-wider */
      }
    }
    @media (min-width: 640px) and (max-width: 767px) {
      .section-title-responsive {
        font-size: 30px !important; /* sm:text-3xl */
        letter-spacing: 0.1em !important; /* sm:tracking-wider */
      }
    }
    @media (max-width: 639px) {
      .section-title-responsive {
        font-size: 24px !important; /* text-2xl */
        letter-spacing: 0 !important;
      }
    }
  `;

  const blockProps = useBlockProps.save({
    className: "section-title-block-wrapper",
  });

  return (
    <div {...blockProps}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
      <div style={containerStyle}>
        <h3 className="section-title-responsive" style={titleStyle}>
          {titleText || "セクションタイトル"}
        </h3>
      </div>
    </div>
  );
}
