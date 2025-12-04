# テーマカスタムブロック

## 概要

工藤米治商店のテーマに実装されたカスタムブロック集です。30個のブロックがカテゴリー別に管理されており、WordPressエディターから利用できます。

このプロジェクトは、WordPress Gutenberg Block API Version 3を使用して開発されており、`@wordpress/scripts`ビルドツールを使用してビルドされます。

## プロジェクト情報

- **プロジェクト名**: kudohyoneji-theme-blocks
- **バージョン**: 1.0.0
- **ライセンス**: GPL-2.0-or-later
- **開発者**: Hyper graphic inc.
- **ブロック総数**: 30個
- **WordPress APIバージョン**: 3

## 実装済みブロック一覧（30個）

### 基本・汎用ブロック (customBlocks - 10個)

- **コンテナブロック** (`container-block`)
  - 角丸のコンテナ。内部に他のブロックを配置できます
- **内側コンテナブロック** (`inner-container-block`)
  - 内側にコンテナを配置できるブロック
- **パディングコンテナブロック** (`padding-container-block`)
  - 左右にパディングを配置するレイアウト
- **セクションタイトルブロック** (`section-title-block`)
  - セクションのタイトルを表示するブロック
- **リンクボタンブロック** (`link-button-block`)
  - メーカーサイトへのリンクボタンを表示するブロック
- **タイトルバナーブロック** (`title-banner-block`)
  - 背景がブロックで囲まれたタイトルブロック
- **メッセージブロック** (`message-block`)
  - レスポンシブ対応のメッセージテキストブロック
- **囲みテキスト** (`mark-block`)
  - ブラケットで囲まれたテキストブロック
- **テキストブロック** (`text-block`)
  - レスポンシブ対応のテキストブロック
- **画像ブロック** (`image-block`)
  - 画像を含むブロック

### ステーション・店舗関連 (station - 5個)

- **コンテンツタイトル** (`content-title-block`)
  - 2カラムレイアウトのコンテンツタイトルブロック
- **ステーションコンテナブロック** (`service-container-block`)
  - サービスステーション内のコンテナ。内部に他のブロックを配置できます
- **Google Mapブロック** (`google-map-block`)
  - Google Mapを埋め込むブロック
- **取扱サービスリストブロック** (`services-list-block`)
  - 店舗で提供しているサービスを選択して表示するブロック
  - 幅広・全幅配置をサポート
- **店舗情報リストブロック** (`store-info-list-block`)
  - 店舗の基本情報（店名、住所、電話、営業時間など）を表示するリストブロック

### 池内石油センター特別ブロック (ikeuchi_shakanai_center - 9個)

- **配送拠点テーブル** (`ikeuchi-shakanai-table`)
  - 配送拠点の営業情報を表示するテーブルブロック
  - 複数行のデータを管理可能
- **配送サービスブロック** (`ikeuchi-shakanai-service`)
  - 配送サービス情報を表示するブロック
- **Tipsブロック** (`ikeuchi-shakanai-tips`)
  - Tips情報を表示するブロック
- **イメージカラムコンテンツ** (`ikeuchi-shakanai-image-content-block`)
  - 画像とコンテンツを左右に配置するレイアウトブロック
- **問い合わせ先コンテナブロック** (`ikeuchi-shakanai-container`)
  - 石油事業部への問い合わせセクション。内部に他のブロックを配置できます
- **Drive Onアプリブロック** (`ikeuchi-shakanai-app`)
  - Drive Onアプリを紹介するブロック
- **お支払方法ブロック** (`ikeuchi-shakanai-payment`)
  - お支払方法を表示するカード型ブロック
- **キャンペーンバナー** (`ikeuchi-shakanai-banner`)
  - 特別価格やキャンペーン情報を表示するバナーブロック
- **タンク洗浄特別価格テーブル** (`ikeuchi-shakanai-service-table`)
  - タンク洗浄サービスと特別価格テーブルを表示するブロック

### 石油課外販 (wholesale - 2個)

- **コンテンツタイトルイメージ** (`wholesale-title-block`)
  - 卸売事業用のタイトル・説明・画像を含むブロック
- **外販ポイント** (`wholesale-point-block`)
  - 施工前後の比較画像を含む外販ポイントブロック

### 営業部・メンテナンス (sales_maintenance - 2個)

- **事業者証明テーブル** (`business-certificate-table`)
  - 事業者証明テーブル表示ブロック
- **番号付きリストブロック** (`numbered-list-block`)
  - 番号付きリスト表示ブロック

### その他専門ブロック (2個)

- **制作実績ブロック** (`products-results`) - category: processed_products
  - 営業部　化工品の制作実績を表示するブロック
- **症状チェックブロック** (`symptom-check-block`) - category: housing_equipment
  - 症状チェックリスト表示ブロック

## ディレクトリ構造

```
wp-content/themes/kudohyoneji/blocks/
├── src/                          # ソースファイル
│   ├── blocks/                   # ブロック定義（30個）
│   │   ├── page-title-block/     # 各ブロックディレクトリ
│   │   │   ├── index.js          # ブロック登録定義
│   │   │   ├── edit.js           # エディター用コンポーネント
│   │   │   ├── save.js           # フロントエンド用コンポーネント
│   │   │   └── style.scss        # スタイル定義
│   │   ├── container-block/
│   │   ├── ikeuchi-shakanai-table/
│   │   └── ... （その他28個）
│   │   └── index.js              # 全ブロックのインポート統合
│   ├── components/               # 共通コンポーネント（現在未使用）
│   ├── utils/                    # ユーティリティ関数（現在未使用）
│   └── index.js                  # メインエントリーポイント
├── build/                        # ビルド済みファイル
│   ├── index.js                  # 統合ビルド版JavaScript
│   ├── index.asset.php           # 依存関係定義（PHP配列）
│   ├── style-index.css           # フロントエンド用CSS
│   └── style-index-rtl.css       # RTL対応CSS
├── node_modules/                 # npm依存パッケージ
├── package.json                  # npm設定・依存関係
├── package-lock.json             # 依存関係ロックファイル
└── README.md                     # このファイル
```

## 技術スタック

### コア技術

- **WordPress Block API**: Version 3
- **ビルドツール**: @wordpress/scripts (v30.24.0)
- **言語**: JavaScript (ES6+), JSX, SCSS
- **フレームワーク**: React (via @wordpress/element)

### 依存ライブラリ

#### 開発依存 (devDependencies)

- `@wordpress/scripts`: ^30.24.0

#### 本番依存 (dependencies)

- `@wordpress/block-editor`: ^12.0.0
- `@wordpress/blocks`: ^12.0.0
- `@wordpress/components`: ^25.0.0
- `@wordpress/core-data`: ^6.0.0
- `@wordpress/data`: ^9.0.0
- `@wordpress/editor`: ^13.0.0
- `@wordpress/element`: ^5.0.0
- `@wordpress/i18n`: ^4.0.0

### ビルドシステム

`@wordpress/scripts`を使用した標準的なWordPressブロック開発環境です。

- **エントリーポイント**: `src/index.js`
- **出力先**: `build/`
- **CSS処理**: SCSS → CSS（自動コンパイル）
- **JavaScript処理**: ES6+ → ES5（Babel変換）
- **最適化**: 本番ビルド時に自動最適化

## 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- npm または yarn
- WordPress 5.9以上（Block API Version 3対応）

### インストール手順

```bash
# プロジェクトディレクトリに移動
cd wp-content/themes/kudohyoneji/blocks

# 依存パッケージをインストール
npm install
```

### 開発コマンド

```bash
# 開発モードでビルド（ウォッチモード）
npm run start
# または
npm run dev

# 本番用ビルド
npm run build

# コードフォーマット
npm run format

# CSSリント
npm run lint:css

# JavaScriptリント
npm run lint:js
```

## WordPressテーマとの統合

ブロックは `functions.php` で以下のように登録・読み込まれています：

### エディターアセット読み込み

```php
function kudohyoneji_theme_blocks_editor_assets() {
    // build/index.js と build/index.css を読み込み
    // エディター内でのみ動作
}
add_action('enqueue_block_editor_assets', 'kudohyoneji_theme_blocks_editor_assets');
```

### フロントエンドアセット読み込み

```php
function kudohyoneji_theme_blocks_frontend_assets() {
    // build/style-index.css を読み込み
    // フロントエンド表示用
}
add_action('wp_enqueue_scripts', 'kudohyoneji_theme_blocks_frontend_assets');
```

### カスタムブロックカテゴリー登録

以下の7つのカテゴリーが登録されています：

1. **カスタムブロック** (`customBlocks`)
2. **サービスステーション** (`station`)
3. **石油課　外販** (`wholesale`)
4. **池内・釈迦内配送センター** (`ikeuchi_shakanai_center`)
5. **ガス販売／保守** (`sales_maintenance`)
6. **住設課　住宅設備** (`housing_equipment`)
7. **営業部　化工品** (`processed_products`)

## ブロックの構造

各ブロックは以下の4つのファイルで構成されています：

### 1. `index.js` - ブロック登録定義

```javascript
import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";
import "./style.scss";

registerBlockType("my-custom-blocks/block-name", {
  apiVersion: 3,
  title: "ブロック名",
  category: "customBlocks",
  // ... その他の設定
  edit,
  save,
});
```

### 2. `edit.js` - エディター用コンポーネント

- Gutenbergエディター内での表示・編集UI
- `InspectorControls`でサイドバー設定パネル
- `useBlockProps`でブロックラッパー設定

### 3. `save.js` - フロントエンド用コンポーネント

- フロントエンドに保存されるHTML構造
- `useBlockProps.save()`でブロックラッパー設定

### 4. `style.scss` - スタイル定義

- エディター用・フロントエンド用のスタイル
- レスポンシブ対応のメディアクエリを含む

## 新しいブロックの追加方法

1. **ブロックディレクトリの作成**

   ```bash
   mkdir src/blocks/new-block-name
   ```

2. **必要なファイルの作成**

   - `index.js` - ブロック登録
   - `edit.js` - エディターコンポーネント
   - `save.js` - フロントエンドコンポーネント
   - `style.scss` - スタイル定義

3. **ブロックの登録**
   `src/blocks/index.js` にインポートを追加：

   ```javascript
   import "./new-block-name";
   ```

4. **ビルド**
   ```bash
   npm run build
   ```

## 使用方法

### WordPressエディターでの使用

1. WordPressエディターを開く
2. 「ブロックを追加」をクリック
3. 各ブロック名で検索するか、カテゴリーから選択
4. ブロックを追加して、エディター上でプロパティを設定

### 検索例

- ページタイトルブロック → 「ページタイトル」で検索
- 配送拠点テーブル → 「配送拠点」で検索
- タイトルバナー → 「タイトルバナー」で検索

## ブロックの役割分類

| カテゴリー              | 用途                     | ブロック数 | エディター表示名         |
| ----------------------- | ------------------------ | ---------- | ------------------------ |
| customBlocks            | 汎用・基本構成           | 10個       | カスタムブロック         |
| station                 | ステーション・店舗情報   | 5個        | サービスステーション     |
| ikeuchi_shakanai_center | イケウチ石油センター特別 | 9個        | 池内・釈迦内配送センター |
| wholesale               | 卸売事業                 | 2個        | 石油課　外販             |
| sales_maintenance       | 営業部・メンテナンス     | 2個        | ガス販売／保守           |
| processed_products      | 制作実績                 | 1個        | 営業部　化工品           |
| housing_equipment       | 住宅設備                 | 1個        | 住設課　住宅設備         |

## 特徴・機能

### レスポンシブ対応

多くのブロックがデスクトップ・タブレット・モバイルの3つのブレークポイントに対応しています：

- **デスクトップ**: 769px以上
- **タブレット**: 481px - 768px
- **モバイル**: 480px以下

### 国際化対応

`@wordpress/i18n`を使用して翻訳対応が可能です。現在は日本語のみですが、将来的に多言語対応が可能です。

### エディター体験

- InspectorControlsによるサイドバー設定
- リアルタイムプレビュー
- ブロック属性の動的編集

## ビルド成果物

### `build/index.js`

- すべてのブロックを統合したJavaScriptファイル
- エディターとフロントエンドの両方で使用
- 依存関係は自動的に解決される

### `build/index.asset.php`

- PHP配列形式の依存関係定義
- WordPressの`wp_enqueue_script`で使用
- バージョン情報を含む

### `build/style-index.css`

- すべてのブロックのスタイルを統合
- SCSSからコンパイルされたCSS
- フロントエンド表示用

### `build/style-index-rtl.css`

- RTL（右から左）言語対応用CSS
- 自動生成

## トラブルシューティング

### ブロックが表示されない場合

1. ビルドが実行されているか確認

   ```bash
   npm run build
   ```

2. `build/index.js`が存在するか確認

3. WordPressのキャッシュをクリア

4. ブラウザのキャッシュをクリア

### スタイルが適用されない場合

1. `build/style-index.css`が存在するか確認

2. `functions.php`でスタイルが正しく読み込まれているか確認

3. ブラウザの開発者ツールでCSSの読み込みを確認

### ビルドエラーが発生する場合

1. Node.jsのバージョンを確認（18以上が必要）

2. `node_modules`を削除して再インストール

   ```bash
   rm -rf node_modules
   npm install
   ```

3. `package-lock.json`を削除して再インストール

## 今後の展開

1. **共通コンポーネントの実装**

   - `src/components/`ディレクトリに再利用可能なコンポーネントを追加

2. **ユーティリティ関数の追加**

   - `src/utils/`ディレクトリに共通関数を追加

3. **ブロック数の追加拡張**

   - 新しい要件に応じたブロックの追加

4. **テーマ固有機能の充実**

   - より高度なカスタマイズオプションの追加

5. **Gutenbergエディター統合の深化**
   - より高度なエディター機能の実装

## 注意事項

- すべてのブロックは同じテーマ内で動作します
- テーマ変更時はブロックが使用不可になります
- APIバージョン3を使用しているため、WordPress 5.9以上が必要です
- レスポンシブ対応のため、デスクトップ・タブレット・モバイルで動作確認済み
- ビルドファイル（`build/`ディレクトリ）はGitにコミットする必要があります（本番環境で使用するため）

## ライセンス

GPL-2.0-or-later

## 開発者情報

- **開発者**: Hyper graphic inc.
- **プロジェクト**: 工藤米治商店 WordPressテーマ
- **バージョン**: 1.0.0
