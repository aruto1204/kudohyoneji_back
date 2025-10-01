import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, Button, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const { imageUrl, imageAlt, imageId, marginTop, marginBottom, imageSize } = attributes;

  // アイキャッチ画像を取得
  const { featuredImage, featuredImageId } = useSelect((select) => {
    const { getCurrentPost } = select("core/editor");
    const { getMedia } = select("core");
    const post = getCurrentPost();

    const mediaId = post?.featured_media;
    const media = mediaId ? getMedia(mediaId) : null;

    return {
      featuredImage: media,
      featuredImageId: mediaId,
    };
  }, []);

  // アイキャッチ画像が変更されたら属性を更新
  useEffect(() => {
    if (featuredImage && featuredImageId !== imageId) {
      let selectedImageUrl = "";

      // 選択されたサイズの画像URLを取得
      if (featuredImage.media_details?.sizes) {
        const sizes = featuredImage.media_details.sizes;

        if (imageSize === "full") {
          selectedImageUrl = featuredImage.source_url;
        } else if (sizes[imageSize]) {
          selectedImageUrl = sizes[imageSize].source_url;
        } else {
          selectedImageUrl = featuredImage.source_url;
        }
      } else {
        selectedImageUrl = featuredImage.source_url;
      }

      setAttributes({
        imageUrl: selectedImageUrl,
        imageAlt: featuredImage.alt_text || "",
        imageId: featuredImageId,
      });
    }
  }, [featuredImage, featuredImageId, imageSize, imageId, setAttributes]);

  // 画像サイズが変更されたら画像URLを更新
  useEffect(() => {
    if (featuredImage && imageId === featuredImageId) {
      let selectedImageUrl = "";

      if (featuredImage.media_details?.sizes) {
        const sizes = featuredImage.media_details.sizes;

        if (imageSize === "full") {
          selectedImageUrl = featuredImage.source_url;
        } else if (sizes[imageSize]) {
          selectedImageUrl = sizes[imageSize].source_url;
        } else {
          selectedImageUrl = featuredImage.source_url;
        }
      } else {
        selectedImageUrl = featuredImage.source_url;
      }

      if (selectedImageUrl !== imageUrl) {
        setAttributes({ imageUrl: selectedImageUrl });
      }
    }
  }, [imageSize, featuredImage, featuredImageId, imageId, imageUrl, setAttributes]);

  // アイキャッチを手動で再読み込み
  const handleReload = () => {
    // console.log("handleReload");
    // console.log(featuredImage);
    // console.log(featuredImageId);
    // console.log(imageSize);
    // console.log(imageUrl);
    // console.log(setAttributes);
    if (featuredImage) {
      let selectedImageUrl = "";

      if (featuredImage.media_details?.sizes) {
        const sizes = featuredImage.media_details.sizes;

        if (imageSize === "full") {
          selectedImageUrl = featuredImage.source_url;
        } else if (sizes[imageSize]) {
          selectedImageUrl = sizes[imageSize].source_url;
        } else {
          selectedImageUrl = featuredImage.source_url;
        }
      } else {
        selectedImageUrl = featuredImage.source_url;
      }

      setAttributes({
        imageUrl: selectedImageUrl,
        imageAlt: featuredImage.alt_text || "",
        imageId: featuredImageId,
      });
    }
  };

  const containerStyle = {
    width: "100%",
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "0px",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
  };

  const placeholderStyle = {
    width: "100%",
    minHeight: "300px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "#666",
    fontSize: "16px",
    border: "2px dashed #ccc",
    borderRadius: "20px",
    padding: "40px 20px",
  };

  const blockProps = useBlockProps({
    className: "featured-image-block-wrapper",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("画像設定", "my-custom-blocks")}>
          <SelectControl
            label={__("画像サイズ", "my-custom-blocks")}
            value={imageSize}
            options={[
              { label: __("サムネイル", "my-custom-blocks"), value: "thumbnail" },
              { label: __("中", "my-custom-blocks"), value: "medium" },
              { label: __("大", "my-custom-blocks"), value: "large" },
              { label: __("フルサイズ", "my-custom-blocks"), value: "full" },
            ]}
            onChange={(value) => setAttributes({ imageSize: value })}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />

          <div style={{ marginTop: "20px" }}>
            <Button variant="secondary" onClick={handleReload}>
              {__("アイキャッチを再読み込み", "my-custom-blocks")}
            </Button>
          </div>
        </PanelBody>

        <PanelBody title={__("スペーシング設定", "my-custom-blocks")}>
          <UnitControl
            label={__("上マージン", "my-custom-blocks")}
            value={marginTop}
            onChange={(value) => setAttributes({ marginTop: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
          />

          <UnitControl
            label={__("下マージン", "my-custom-blocks")}
            value={marginBottom}
            onChange={(value) => setAttributes({ marginBottom: value })}
            units={[
              { value: "px", label: "px" },
              { value: "rem", label: "rem" },
            ]}
            __next40pxDefaultSize
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {imageUrl ? (
          <div style={containerStyle}>
            <img src={imageUrl} alt={imageAlt || __("アイキャッチ画像", "my-custom-blocks")} style={imageStyle} />
          </div>
        ) : (
          <div style={placeholderStyle}>
            <div style={{ textAlign: "center" }}>
              <p style={{ margin: "0 0 10px 0", fontWeight: "600", fontSize: "18px" }}>{__("アイキャッチ画像未設定", "my-custom-blocks")}</p>
              <p style={{ margin: "0 0 20px 0", fontSize: "14px", lineHeight: "1.6" }}>{__("右サイドバーの「投稿」→「アイキャッチ画像」から画像を設定してください", "my-custom-blocks")}</p>
              {featuredImageId && (
                <Button variant="primary" onClick={handleReload}>
                  {__("画像を読み込む", "my-custom-blocks")}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
