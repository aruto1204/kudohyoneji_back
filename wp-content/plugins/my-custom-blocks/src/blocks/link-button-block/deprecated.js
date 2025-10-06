import { useBlockProps } from "@wordpress/block-editor";

const deprecated = [
  {
    attributes: {
      buttonText: { type: "string", default: "リンクテキスト" },
      buttonUrl: { type: "string", default: "/" },
      backgroundColor: { type: "string", default: "#0B8B4B" },
      textColor: { type: "string", default: "#ffffff" },
      borderColor: { type: "string", default: "#0B8B4B" },
      hoverTextColor: { type: "string", default: "#0B8B4B" },
      hoverBackgroundColor: { type: "string", default: "#ffffff" },
      marginTop: { type: "string", default: "48px" },
      marginBottom: { type: "string", default: "0px" },
      openInNewTab: { type: "boolean", default: true },
      padding: { type: "boolean", default: false },
      // uniqueIdは含まない（古いバージョン）
    },
    save({ attributes }) {
      const { buttonText, buttonUrl, backgroundColor, textColor, borderColor, hoverTextColor, hoverBackgroundColor, marginTop, marginBottom, openInNewTab, padding } = attributes;

      const containerStyle = {
        maxWidth: padding ? "416px" : "376px",
        width: "100%",
        height: "66px",
        marginTop: marginTop || "48px",
        marginBottom: marginBottom || "0px",
        marginLeft: "auto",
        marginRight: "auto",
        ...(padding && {
          paddingLeft: "20px",
          paddingRight: "20px",
        }),
      };

      const buttonStyle = {
        width: "100%",
        height: "100%",
        paddingLeft: "16px",
        paddingRight: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        backgroundColor: backgroundColor || "#0B8B4B",
        color: textColor || "#ffffff",
        border: `1px solid ${borderColor || "#0B8B4B"}`,
        textDecoration: "none",
        transition: "all 0.3s ease",
        boxSizing: "border-box",
      };

      const textStyle = {
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "1",
        letterSpacing: "0.05em",
        margin: "0",
      };

      const svgStyle = {
        width: "16px",
        height: "18px",
        fill: "currentColor",
      };

      // 古いバージョン：uniqueIdなし
      const responsiveStyle = `
    @media (min-width: 640px) {
      .text-responsive {
        font-size: 18px !important;
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
    },
  },
];

export default deprecated;
