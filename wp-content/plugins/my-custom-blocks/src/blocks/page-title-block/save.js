/**
 * Save component for Page Title Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { title, subtitle } = attributes;

  // コンテナのスタイル
  const containerStyle = {
    width: "100%",
  };

  // メインタイトルのスタイル
  const mainTitleStyle = {
    color: "#2c2c2c",
    fontFamily: "inherit", // 既存のフォントファミリーを継承
    fontWeight: "700",
    lineHeight: "1",
    letterSpacing: "0.05em",
    textAlign: "center",
  };

  // サブタイトルのスタイル
  const subTitleStyle = {
    color: "#0b8b4b",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "500",
    lineHeight: "1.5",
    letterSpacing: "0.05em",
    textAlign: "center",
    marginTop: "10px",
  };

  // レスポンシブ対応のためのメディアクエリスタイル
  const responsiveStyle = `
		@media (min-width: 769px) {
			.page-title-main-responsive {
				font-size: 40px !important;
			}
		}
		@media (max-width: 768px) {
			.page-title-main-responsive {
				font-size: 30px !important;
			}
		}
		@media (max-width: 480px) {
			.page-title-main-responsive {
				font-size: 24px !important;
				letter-spacing: 0 !important;
			}
			.page-title-sub-responsive {
				letter-spacing: 0 !important;
			}
		}
		.page-title-sub-responsive {
			font-size: 16px !important;
		}
	`;

  const blockProps = useBlockProps.save({
    className: "page-title-block",
  });

  return (
    <div {...blockProps}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
      <div style={containerStyle}>
        <h2 className="page-title-main-responsive" style={mainTitleStyle}>
          {title}
        </h2>
        <p className="page-title-sub-responsive" style={subTitleStyle}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
