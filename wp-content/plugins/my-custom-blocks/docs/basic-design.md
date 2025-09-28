# My Custom Blocks - 基本設計書

## 📋 プロジェクト概要

### プロジェクト名

**My Custom Blocks** - WordPressカスタムブロックプラグイン

### 目的

工藤米治商店のWebサイト用にカスタマイズされたGutenbergブロックを提供し、コンテンツ編集の効率化と統一されたデザインを実現する。

### 技術スタック

- **フロントエンド**: React, JavaScript (ES6+)
- **バックエンド**: PHP 7.4+
- **ビルドツール**: @wordpress/scripts (Webpack)
- **スタイル**: SCSS/CSS
- **開発環境**: @wordpress/env

---

## 🏗 アーキテクチャ設計

### ディレクトリ構造

```
wp-content/plugins/my-custom-blocks/
├── 📄 my-custom-blocks.php      # メインプラグインファイル
├── 📄 block.json               # ブロック設定ファイル
├── 📄 package.json             # 依存関係とスクリプト
├── 📄 basic-design.md          # 基本設計書（このファイル）
├── 📄 wordpress-block-dev-guide.md # 開発ガイド
├── 📁 src/                     # ソースコード
│   ├── 📄 index.js             # メインエントリーポイント
│   ├── 📁 blocks/              # ブロック定義
│   │   ├── 📄 index.js         # ブロック登録まとめ
│   │   └── 📁 sample-block/    # サンプルブロック
│   │       ├── 📄 index.js     # ブロック登録
│   │       ├── 📄 edit.js      # エディター画面
│   │       ├── 📄 save.js      # 保存内容
│   │       └── 📄 style.scss   # スタイル
│   ├── 📁 components/          # 共通コンポーネント
│   │   └── 📄 CustomPanel.js   # カスタムパネル
│   ├── 📁 hooks/               # カスタムフック
│   │   └── 📄 usePostData.js   # 投稿データフック
│   └── 📁 utils/               # ユーティリティ
│       └── 📄 helpers.js       # ヘルパー関数
├── 📁 build/                   # ビルド成果物（自動生成）
│   ├── 📄 index.js
│   ├── 📄 index.css
│   └── 📄 index.asset.php
└── 📁 node_modules/            # 依存関係
```

---

## 🎯 ブロック設計方針

### 基本原則

1. **再利用性**: 共通コンポーネントとユーティリティの活用
2. **保守性**: 明確なファイル構造と命名規則
3. **拡張性**: 新しいブロックの追加が容易
4. **パフォーマンス**: 最適化されたビルドプロセス
5. **アクセシビリティ**: WCAG準拠のUI実装

### ブロック分類

- **レイアウトブロック**: セクション、カラム、コンテナ
- **コンテンツブロック**: テキスト、画像、動画
- **インタラクティブブロック**: ボタン、フォーム、アコーディオン
- **ビジネス固有ブロック**: 会社情報、サービス紹介、採用情報

---

## 🔧 技術仕様

### 開発環境

```json
{
  "node": ">=16.0.0",
  "npm": ">=8.0.0",
  "php": ">=7.4",
  "wordpress": ">=6.0"
}
```

### 主要依存関係

```json
{
  "devDependencies": {
    "@wordpress/scripts": "^30.24.0"
  },
  "dependencies": {
    "@wordpress/block-editor": "^15.4.0",
    "@wordpress/blocks": "^15.4.0",
    "@wordpress/components": "^30.4.0",
    "@wordpress/core-data": "^7.31.0",
    "@wordpress/data": "^10.31.0",
    "@wordpress/editor": "^14.31.0",
    "@wordpress/element": "^6.31.0"
  }
}
```

### ビルドスクリプト

- `npm run start`: 開発モード（ホットリロード）
- `npm run build`: 本番ビルド
- `npm run lint:js`: JavaScript品質チェック
- `npm run lint:css`: CSS品質チェック
- `npm run format`: コードフォーマット

---

## 📦 ブロック仕様

### サンプルブロック仕様

```json
{
  "name": "my-custom-blocks/sample-block",
  "title": "Sample Block",
  "category": "widgets",
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
  "supports": {
    "color": true,
    "spacing": true,
    "typography": true
  }
}
```

### 共通属性設計

- **レイアウト**: alignment, spacing, width
- **スタイル**: color, background, typography
- **表示制御**: visibility, responsive settings
- **アニメーション**: transition, hover effects

---

## 🎨 デザインシステム

### カラーパレット

```scss
$primary-color: #007cba;
$secondary-color: #333;
$accent-color: #ddd;
$text-color: #333;
$background-color: #fff;
```

### タイポグラフィ

```scss
$font-family-base: "Helvetica Neue", Arial, sans-serif;
$font-size-base: 16px;
$line-height-base: 1.6;
```

### スペーシング

```scss
$spacing-xs: 8px;
$spacing-sm: 16px;
$spacing-md: 24px;
$spacing-lg: 32px;
$spacing-xl: 48px;
```

---

## 🔄 開発ワークフロー

### 1. 環境セットアップ

```bash
# WordPress環境起動
wp-env start

# 依存関係インストール
npm install

# 開発モード開始
npm run start
```

### 2. 新ブロック開発手順

1. `src/blocks/新ブロック名/` ディレクトリ作成
2. 必要ファイル作成（index.js, edit.js, save.js, style.scss）
3. `src/blocks/index.js` にimport追加
4. `block.json` 更新（必要に応じて）
5. テストとデバッグ

### 3. 品質管理

- ESLint/Prettier による自動フォーマット
- React Developer Tools でのデバッグ
- ブラウザ互換性テスト
- アクセシビリティチェック

---

## 🚀 デプロイメント

### ビルドプロセス

1. `npm run build` で本番ビルド実行
2. `build/` ディレクトリの成果物確認
3. プラグインファイルの圧縮
4. WordPress環境へのアップロード

### 本番環境要件

- PHP 7.4以上
- WordPress 6.0以上
- モダンブラウザサポート（IE11除く）

---

## 📋 開発チェックリスト

### 初期セットアップ

- [ ] ディレクトリ構造作成
- [ ] `my-custom-blocks.php` 完成
- [ ] `block.json` 設定
- [ ] `src/` ディレクトリ構成
- [ ] サンプルブロック実装

### 開発中

- [ ] ホットリロード動作確認
- [ ] ブロックエディター表示確認
- [ ] React Developer Tools デバッグ
- [ ] コンソールエラーチェック
- [ ] レスポンシブ対応確認

### リリース前

- [ ] 本番ビルド成功
- [ ] 各デバイス表示確認
- [ ] アクセシビリティテスト
- [ ] パフォーマンステスト
- [ ] ブラウザ互換性確認

---

## 🚨 トラブルシューティング

### よくある問題と対処法

#### ブロックが表示されない

1. プラグイン有効化確認
2. `npm run start` 動作確認
3. ブラウザコンソールエラーチェック
4. `build/` ディレクトリ存在確認

#### ホットリロードが効かない

1. `--webpack-copy-php` オプション確認
2. ブラウザキャッシュクリア
3. `wp-env restart` で環境再起動

#### スタイルが反映されない

1. `build/index.css` 生成確認
2. `wp_enqueue_style` 設定確認
3. CSSセレクタ優先度調整

---

## 📚 参考資料

- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Gutenberg Components](https://wordpress.github.io/gutenberg/)
- [@wordpress/scripts Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
- [React Documentation](https://reactjs.org/docs/)

---

## 📝 更新履歴

| バージョン | 日付       | 変更内容 |
| ---------- | ---------- | -------- |
| 1.0.0      | 2024-XX-XX | 初版作成 |

---

**作成者**: 開発チーム  
**最終更新**: 2024年XX月XX日  
**ドキュメントバージョン**: 1.0.0
