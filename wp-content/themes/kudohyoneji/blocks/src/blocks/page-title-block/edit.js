/**
 * Edit component for Page Title Block
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle } = attributes;

  // 現在の投稿/固定ページのタイトルを取得
  const postTitle = useSelect((select) => {
    const { getCurrentPost } = select("core/editor");
    const post = getCurrentPost();
    return post?.title || "";
  }, []);

  // 初回読み込み時に投稿タイトルをセット
  useEffect(() => {
    if (!title && postTitle) {
      setAttributes({ title: postTitle });
    }
  }, [postTitle, title, setAttributes]);

  // コンテナのスタイル
  const containerStyle = {
    width: "100%",
    border: "1px dashed #ccc",
    borderRadius: "4px",
  };

  // メインタイトルのスタイル（エディタ用）
  const mainTitleStyle = {
    color: "#2c2c2c",
    fontFamily: "inherit", // 既存のフォントファミリーを継承
    fontWeight: "700",
    lineHeight: "1",
    letterSpacing: "0.05em",
    textAlign: "center",
    margin: "0",
  };

  // サブタイトルのスタイル（エディタ用）
  const subTitleStyle = {
    color: "#0b8b4b",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "500",
    lineHeight: "1.5",
    letterSpacing: "0.05em",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "0",
  };

  // レスポンシブ対応のためのメディアクエリスタイル（エディタ用）
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

  const blockProps = useBlockProps({
    className: "page-title-block",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("設定", "my-custom-blocks")}>
          <TextControl label={__("タイトル", "my-custom-blocks")} value={title} onChange={(value) => setAttributes({ title: value })} help={__("空の場合は投稿/固定ページのタイトルが使用されます", "my-custom-blocks")} __next40pxDefaultSize __nextHasNoMarginBottom />
          <TextControl label={__("サブタイトル（英語）", "my-custom-blocks")} value={subtitle} onChange={(value) => setAttributes({ subtitle: value })} __next40pxDefaultSize __nextHasNoMarginBottom />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
        <div style={containerStyle}>
          <h2 className="page-title-main-responsive" style={mainTitleStyle}>
            {title || postTitle || __("ページタイトル", "my-custom-blocks")}
          </h2>
          <p className="page-title-sub-responsive" style={subTitleStyle}>
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
}
