# WordPress カスタムブロック開発環境構築ガイド

## 🚀 現在の状況
- ✅ `@wordpress/env` 環境構築済み
- ✅ `package.json` 設定完了
- ✅ 必要なWordPress依存関係インストール済み
- 📝 次のステップ：ファイル構成とブロック開発開始

---

## 📁 推奨ディレクトリ構造

```
wp-content/plugins/my-custom-blocks/
├── package.json                    # ✅ 設定済み
├── my-custom-blocks.php           # 📝 次に作成
├── block.json                     # 📝 次に作成
├── webpack.config.js              # 📝 オプション
├── src/                          # 📝 次に作成
│   ├── index.js                  # メインエントリーポイント
│   ├── blocks/                   # 各ブロック
│   │   ├── sample-block/
│   │   │   ├── index.js
│   │   │   ├── edit.js
│   │   │   ├── save.js
│   │   │   └── style.scss
│   │   └── index.js              # ブロックまとめ
│   ├── components/               # 共通コンポーネント
│   │   └── CustomPanel.js
│   ├── hooks/                    # カスタムフック
│   │   └── usePostData.js
│   └── utils/                    # ユーティリティ
│       └── helpers.js
└── build/                        # 自動生成
    ├── index.js
    ├── index.css
    └── ...
```

---

## ⚡ 必要ファイルの作成

### 1. メインPHPファイル (`my-custom-blocks.php`)

```php
<?php
/**
 * Plugin Name: My Custom Blocks
 * Plugin URI: https://example.com
 * Description: カスタムブロックコレクション
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 * Text Domain: my-custom-blocks
 */

// 直接アクセスを防止
if (!defined('ABSPATH')) {
    exit;
}

// 定数定義
define('MY_CUSTOM_BLOCKS_VERSION', '1.0.0');
define('MY_CUSTOM_BLOCKS_PATH', plugin_dir_path(__FILE__));
define('MY_CUSTOM_BLOCKS_URL', plugin_dir_url(__FILE__));

/**
 * ブロックタイプの初期化
 */
function my_custom_blocks_init() {
    // block.jsonからブロックを登録
    register_block_type(MY_CUSTOM_BLOCKS_PATH . 'build');
}
add_action('init', 'my_custom_blocks_init');

/**
 * エディタ用アセット読み込み
 */
function my_custom_blocks_editor_assets() {
    $asset_file = include(MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php');

    wp_enqueue_script(
        'my-custom-blocks-editor',
        MY_CUSTOM_BLOCKS_URL . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_enqueue_style(
        'my-custom-blocks-editor',
        MY_CUSTOM_BLOCKS_URL . 'build/index.css',
        array('wp-edit-blocks'),
        $asset_file['version']
    );

    // 翻訳ファイル設定
    wp_set_script_translations(
        'my-custom-blocks-editor',
        'my-custom-blocks'
    );
}
add_action('enqueue_block_editor_assets', 'my_custom_blocks_editor_assets');

/**
 * フロントエンド用アセット読み込み
 */
function my_custom_blocks_frontend_assets() {
    $asset_file = include(MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php');

    wp_enqueue_style(
        'my-custom-blocks-style',
        MY_CUSTOM_BLOCKS_URL . 'build/style-index.css',
        array(),
        $asset_file['version']
    );
}
add_action('wp_enqueue_scripts', 'my_custom_blocks_frontend_assets');
```

### 2. ブロック設定ファイル (`block.json`)

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "my-custom-blocks/sample-block",
  "version": "1.0.0",
  "title": "Sample Block",
  "category": "widgets",
  "icon": "star-filled",
  "description": "サンプルカスタムブロック",
  "keywords": ["sample", "custom", "example"],
  "textdomain": "my-custom-blocks",
  "editorScript": "file:./index.js",
  "editorStyle": "file:./index.css",
  "style": "file:./style-index.css",
  "supports": {
    "html": false,
    "color": {
      "background": true,
      "text": true,
      "gradients": true
    },
    "spacing": {
      "padding": true,
      "margin": true
    },
    "typography": {
      "fontSize": true,
      "lineHeight": true
    }
  },
  "attributes": {
    "content": {
      "type": "string",
      "default": ""
    },
    "alignment": {
      "type": "string",
      "default": "left"
    },
    "showTitle": {
      "type": "boolean",
      "default": true
    }
  },
  "example": {
    "attributes": {
      "content": "サンプルテキスト",
      "alignment": "center"
    }
  }
}
```

### 3. メインエントリーファイル (`src/index.js`)

```javascript
/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './blocks';

// 追加の初期化処理があればここに記述
console.log('My Custom Blocks loaded!');
```

### 4. ブロック登録ファイル (`src/blocks/index.js`)

```javascript
/**
 * ブロック登録
 * 新しいブロックを作成したらここにimportを追加
 */
import './sample-block';

// 今後追加予定のブロック
// import './hero-block';
// import './testimonial-block';
// import './pricing-table';
```

### 5. サンプルブロック (`src/blocks/sample-block/index.js`)

```javascript
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import metadata from '../../../block.json';

registerBlockType(metadata.name, {
    ...metadata,
    edit: Edit,
    save,
});
```

### 6. ブロック編集画面 (`src/blocks/sample-block/edit.js`)

```javascript
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    AlignmentControl,
    BlockControls,
    InspectorControls,
    ColorPalette
} from '@wordpress/block-editor';
import {
    PanelBody,
    ToggleControl,
    SelectControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { content, alignment, showTitle } = attributes;
    
    const blockProps = useBlockProps({
        className: `has-text-align-${alignment}`
    });

    return (
        <>
            <BlockControls>
                <AlignmentControl
                    value={alignment}
                    onChange={(newAlignment) => setAttributes({ 
                        alignment: newAlignment || 'left' 
                    })}
                />
            </BlockControls>
            
            <InspectorControls>
                <PanelBody title={__('表示設定', 'my-custom-blocks')}>
                    <ToggleControl
                        label={__('タイトルを表示', 'my-custom-blocks')}
                        checked={showTitle}
                        onChange={(value) => setAttributes({ showTitle: value })}
                    />
                    
                    <SelectControl
                        label={__('配置', 'my-custom-blocks')}
                        value={alignment}
                        options={[
                            { label: __('左寄せ', 'my-custom-blocks'), value: 'left' },
                            { label: __('中央', 'my-custom-blocks'), value: 'center' },
                            { label: __('右寄せ', 'my-custom-blocks'), value: 'right' }
                        ]}
                        onChange={(newAlignment) => setAttributes({ alignment: newAlignment })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {showTitle && (
                    <h3>{__('サンプルブロック', 'my-custom-blocks')}</h3>
                )}
                
                <RichText
                    tagName="p"
                    value={content}
                    onChange={(newContent) => setAttributes({ content: newContent })}
                    placeholder={__('テキストを入力してください...', 'my-custom-blocks')}
                />
            </div>
        </>
    );
}
```

### 7. ブロック保存内容 (`src/blocks/sample-block/save.js`)

```javascript
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { content, alignment, showTitle } = attributes;
    
    const blockProps = useBlockProps.save({
        className: `has-text-align-${alignment}`
    });

    return (
        <div {...blockProps}>
            {showTitle && (
                <h3>サンプルブロック</h3>
            )}
            
            <RichText.Content
                tagName="p"
                value={content}
            />
        </div>
    );
}
```

### 8. スタイル (`src/blocks/sample-block/style.scss`)

```scss
.wp-block-my-custom-blocks-sample-block {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 20px 0;

    h3 {
        margin-top: 0;
        color: #333;
        font-size: 1.2em;
    }

    p {
        margin-bottom: 0;
        line-height: 1.6;
    }

    &.has-text-align-center {
        text-align: center;
    }

    &.has-text-align-right {
        text-align: right;
    }

    // エディター専用スタイル
    .block-editor & {
        border: 2px dashed #ccc;
        
        &:hover {
            border-color: #007cba;
        }
    }
}
```

---

## 🛠 開発用ユーティリティファイル

### カスタムフック (`src/hooks/usePostData.js`)

```javascript
import { useSelect } from '@wordpress/data';

/**
 * 投稿データを取得するカスタムフック
 */
export function usePostData(postType = 'post', queryArgs = {}) {
    return useSelect((select) => {
        const { getEntityRecords } = select('core');
        
        return getEntityRecords('postType', postType, {
            per_page: 10,
            status: 'publish',
            ...queryArgs
        });
    }, [postType, queryArgs]);
}

/**
 * 現在の投稿メタデータを操作するフック
 */
export function usePostMeta() {
    return useSelect((select) => {
        const { getCurrentPost } = select('core/editor');
        return getCurrentPost()?.meta || {};
    });
}
```

### 共通コンポーネント (`src/components/CustomPanel.js`)

```javascript
import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function CustomPanel({ title, children, initialOpen = false }) {
    return (
        <PanelBody title={title} initialOpen={initialOpen}>
            <PanelRow>
                {children}
            </PanelRow>
        </PanelBody>
    );
}
```

### ユーティリティ関数 (`src/utils/helpers.js`)

```javascript
/**
 * クラス名を結合するヘルパー
 */
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

/**
 * 属性の安全な更新
 */
export function updateAttribute(setAttributes, key, value) {
    setAttributes({ [key]: value });
}

/**
 * メディア情報を取得
 */
export function getMediaDetails(mediaId) {
    if (!mediaId) return null;
    
    return wp.media.attachment(mediaId).get();
}
```

---

## 🎯 開発ワークフロー

### 1. 開発開始

```bash
# WordPress環境起動
wp-env start

# 別ターミナルで開発モード開始
cd wp-content/plugins/my-custom-blocks
npm run start
```

### 2. ブラウザアクセス

- 管理画面: `http://localhost:8888/wp-admin`
- フロントエンド: `http://localhost:8888`
- デフォルトログイン: `admin` / `password`

### 3. 新しいブロック追加手順

1. `src/blocks/新ブロック名/` ディレクトリ作成
2. `index.js`, `edit.js`, `save.js`, `style.scss` 作成
3. `src/blocks/index.js` にimport追加
4. `block.json` を必要に応じて更新

### 4. デバッグとテスト

```bash
# ビルドエラーチェック
npm run build

# コード品質チェック
npm run lint:js
npm run lint:css

# コードフォーマット
npm run format
```

---

## 📋 開発チェックリスト

### 初期セットアップ
- [ ] 上記ファイル構造を作成
- [ ] `my-custom-blocks.php` 作成
- [ ] `block.json` 設定
- [ ] `src/` ディレクトリ構成
- [ ] サンプルブロック実装

### 開発中
- [ ] `npm run start` でホットリロード確認
- [ ] ブラウザでブロックエディター動作確認
- [ ] React Developer Tools でデバッグ
- [ ] コンソールエラーがないか確認

### リリース前
- [ ] `npm run build` で本番ビルド
- [ ] 各デバイスでの表示確認
- [ ] アクセシビリティチェック
- [ ] パフォーマンステスト

---

## 🚨 よくあるトラブルと対処法

### ブロックが表示されない
1. `my-custom-blocks.php` でプラグインが有効化されているか確認
2. `npm run start` が正常に動作しているか確認
3. ブラウザのコンソールでエラーをチェック

### ホットリロードが効かない
1. `--webpack-copy-php` オプション確認
2. ブラウザキャッシュクリア
3. `wp-env restart` で環境再起動

### スタイルが反映されない
1. `build/index.css` が生成されているか確認
2. `wp_enqueue_style` が正しく設定されているか確認
3. CSSセレクタの優先度を調整

---

## 🔧 便利な開発ツール

### VSCode拡張機能
- ES7+ React/Redux/React-Native snippets
- WordPress Snippets
- PHP Intelephense
- Prettier - Code formatter
- Auto Rename Tag

### ブラウザ拡張
- React Developer Tools
- WordPress Debug Objects

---

この環境でReactの知識を活かして効率的にWordPressカスタムブロック開発を進められます！