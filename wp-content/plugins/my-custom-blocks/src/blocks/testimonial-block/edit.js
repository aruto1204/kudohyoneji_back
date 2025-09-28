import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { PanelBody, Button, RangeControl, ColorPicker, TextControl, ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { testimonial, customerName, customerTitle, customerImage, rating, showRating, backgroundColor, textColor } = attributes;

  const blockProps = useBlockProps({
    className: "testimonial-block-editor",
    style: {
      backgroundColor,
      color: textColor,
      padding: "30px",
      borderRadius: "8px",
      border: "1px solid #e0e0e0",
    },
  });

  const renderStars = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= ratingValue ? "#ffc107" : "#e0e0e0",
            fontSize: "20px",
            marginRight: "2px",
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("お客様情報", "my-custom-blocks")}>
          <TextControl label={__("お客様名", "my-custom-blocks")} value={customerName} onChange={(value) => setAttributes({ customerName: value })} />
          <TextControl label={__("役職・会社名", "my-custom-blocks")} value={customerTitle} onChange={(value) => setAttributes({ customerTitle: value })} />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ customerImage: media.url })}
              allowedTypes={["image"]}
              value={customerImage}
              render={({ open }) => (
                <Button onClick={open} variant="secondary">
                  {customerImage ? "画像を変更" : "お客様の画像を選択"}
                </Button>
              )}
            />
          </MediaUploadCheck>
          {customerImage && (
            <Button onClick={() => setAttributes({ customerImage: "" })} variant="link" isDestructive>
              画像を削除
            </Button>
          )}
        </PanelBody>

        <PanelBody title={__("評価設定", "my-custom-blocks")}>
          <ToggleControl label={__("評価を表示", "my-custom-blocks")} checked={showRating} onChange={(value) => setAttributes({ showRating: value })} />
          {showRating && <RangeControl label={__("評価（星の数）", "my-custom-blocks")} value={rating} onChange={(value) => setAttributes({ rating: value })} min={1} max={5} step={1} />}
        </PanelBody>

        <PanelBody title={__("スタイル設定", "my-custom-blocks")}>
          <div>
            <label htmlFor="background-color-picker">{__("背景色", "my-custom-blocks")}</label>
            <ColorPicker id="background-color-picker" color={backgroundColor} onChange={(color) => setAttributes({ backgroundColor: color })} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="text-color-picker">{__("テキストカラー", "my-custom-blocks")}</label>
            <ColorPicker id="text-color-picker" color={textColor} onChange={(color) => setAttributes({ textColor: color })} />
          </div>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "48px",
              color: "#007cba",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          >
            &ldquo;
          </div>
          <RichText
            tagName="blockquote"
            value={testimonial}
            onChange={(newTestimonial) => setAttributes({ testimonial: newTestimonial })}
            placeholder={__("お客様の声を入力…", "my-custom-blocks")}
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              fontStyle: "italic",
              margin: "0",
              color: textColor,
            }}
          />
        </div>

        {showRating && <div style={{ marginBottom: "15px" }}>{renderStars(rating)}</div>}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {customerImage && (
            <img
              src={customerImage}
              alt={customerName}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "5px",
                color: textColor,
              }}
            >
              {customerName}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: textColor,
                opacity: 0.8,
              }}
            >
              {customerTitle}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
