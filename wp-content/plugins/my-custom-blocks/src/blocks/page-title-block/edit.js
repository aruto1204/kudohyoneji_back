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
        <div className="w-full">
          <h2 className="page-title-main">{title || postTitle || __("ページタイトル", "my-custom-blocks")}</h2>
          <p className="page-title-sub">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
