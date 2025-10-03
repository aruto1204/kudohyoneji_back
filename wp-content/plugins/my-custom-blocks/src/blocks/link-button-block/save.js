import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { buttonText, buttonUrl, backgroundColor, textColor, borderColor, hoverTextColor, hoverBackgroundColor, marginTop, marginBottom, openInNewTab, padding } = attributes;

  // コンテナのスタイル
  const containerStyle = {
    maxWidth: padding ? "416px" : "376px", // max-w-104 (104 * 0.25rem = 26rem = 416px)
    width: "100%",
    height: "66px", // h-16.5 (16.5 * 0.25rem = 4.125rem = 66px)
    marginTop: marginTop || "48px",
    marginBottom: marginBottom || "0px",
    marginLeft: "auto",
    marginRight: "auto",
    ...(padding && {
      paddingLeft: "20px",
      paddingRight: "20px",
    }),
  };

  // ボタンのスタイル
  const buttonStyle = {
    width: "100%",
    height: "100%",
    paddingLeft: "16px", // pl-4 (4 * 0.25rem = 1rem = 16px)
    paddingRight: "16px", // pr-4 (4 * 0.25rem = 1rem = 16px)
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px", // gap-2.5 (2.5 * 0.25rem = 0.625rem = 10px)
    backgroundColor: backgroundColor || "#0B8B4B",
    color: textColor || "#ffffff",
    border: `1px solid ${borderColor || "#0B8B4B"}`,
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  };

  // テキストのスタイル
  const textStyle = {
    fontSize: "18px", // text-base
    fontWeight: "600", // font-semibold
    lineHeight: "1", // leading-none
    letterSpacing: "0.05em", // tracking-[0.2em]
    margin: "0", // m-0
  };

  // SVGのスタイル
  const svgStyle = {
    width: "16px", // w-4 (4 * 0.25rem = 1rem = 16px)
    height: "18px", // h-4.5 (4.5 * 0.25rem = 1.125rem = 18px)
    fill: "currentColor",
  };

  // レスポンシブ対応のためのメディアクエリスタイル
  const responsiveStyle = `
    @media (min-width: 640px) {
      .text-responsive {
        font-size: 18px !important; /* sm:text-lg */
        line-height: 28px !important;
      }
    }
    .link-button-hover:hover {
      color: ${hoverTextColor || "#0B8B4B"} !important;
      background-color: ${hoverBackgroundColor || "#ffffff"} !important;
    }
  `;

  const blockProps = useBlockProps.save({
    className: "link-button-block-wrapper",
  });

  return (
    <div {...blockProps} style={containerStyle}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
      <a
        className="link-button-responsive link-button-hover"
        href={buttonUrl || "/"}
        style={buttonStyle}
        {...(openInNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        <p className="text-responsive" style={textStyle}>
          {buttonText || "リンクテキスト"}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={svgStyle}>
          <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
        </svg>
      </a>
    </div>
  );
}
