# テーマカスタムブロック

## 概要

工藤米治商店のテーマに実装されたカスタムブロック集です。31個のブロックがカテゴリー別に管理されており、WordPressエディターから利用できます。

## 実装済みブロック一覧（31個）

### 基本・汎用ブロック (customBlocks - 10個)

- **ページタイトルブロック** (`page-title-block`)
  - ページタイトルとサブタイトルを表示するブロック
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

### ステーション・店舗関連 (station - 5個)

- **コンテンツタイトル** (`content-title-block`)
  - 2カラムレイアウトのコンテンツタイトルブロック
- **ステーションコンテナブロック** (`service-container-block`)
  - サービスステーション内のコンテナ。内部に他のブロックを配置できます
- **Google Mapブロック** (`google-map-block`)
  - Google Mapを埋め込むブロック
- **取扱サービスリストブロック** (`services-list-block`)
  - 店舗で提供しているサービスを選択して表示するブロック
- **店舗情報リストブロック** (`store-info-list-block`)
  - 店舗の基本情報（店名、住所、電話、営業時間など）を表示するリストブロック

### イケウチ石油センター特別ブロック (ikeuchi_shakanai_center - 9個)

- **配送拠点テーブル** (`ikeuchi-shakanai-table`)
  - 配送拠点の営業情報を表示するテーブルブロック
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

### 卸売事業 (wholesale - 2個)

- **コンテンツタイトルイメージ** (`wholesale-title-block`)
  - 卸売事業用のタイトル・説明・画像を含むブロック
- **外販ポイント** (`wholesale-point-block`)
  - 施工前後の比較画像を含む外販ポイントブロック

### 営業部・メンテナンス (sales_maintenance - 2個)

- **事業者証明テーブル** (`business-certificate-table`)
  - 事業者証明テーブル表示ブロック
- **番号付きリストブロック** (`numbered-list-block`)
  - 番号付きリスト表示ブロック

### その他専門ブロック (5個)

- **画像ブロック** (`image-block`)
  - 画像を含むブロック
- **制作実績ブロック** (`products-results`) - category: processed_products
  - 営業部　化工品の制作実績を表示するブロック
- **症状チェックブロック** (`symptom-check-block`) - category: housing_equipment
  - 症状チェックリスト表示ブロック

## ディレクトリ構造

```
wp-content/themes/kudohyoneji/blocks/
├── src/                    # ソースファイル
│   ├── blocks/            # ブロック定義（31個）
│   │   ├── page-title-block/
│   │   ├── container-block/
│   │   ├── ikeuchi-shakanai-table/
│   │   └── ... （その他28個）
│   ├── components/
│   └── utils/
├── build/                  # ビルド済みファイル
│   ├── index.js           # 統合ビルド版
│   ├── index.asset.php    # 依存関係定義
│   └── style-index.css    # フロントエンド用CSS
├── package.json           # npm設定
├── package-lock.json
└── README.md             # このファイル
```

## 使用方法

1. WordPressエディターを開く
2. 「ブロックを追加」をクリック
3. 各ブロック名で検索するか、カテゴリーから選択
4. ブロックを追加して、エディター上でプロパティを設定

例：

- ページタイトルブロック → 「ページタイトル」で検索
- 配送拠点テーブル → 「配送拠点」で検索
- タイトルバナー → 「タイトルバナー」で検索

## 技術的詳細

- **APIバージョン**: 3
- **依存ライブラリ**:
  - wp-blocks
  - wp-i18n
  - wp-element
  - wp-block-editor
  - wp-components
  - wp-data
- **スタイル**: レスポンシブ対応、複数デバイスサイズ対応
- **ビルドシステム**: 手動ビルド版（将来的にはwebpack/webpack CLIへの移行予定）

## ブロック登録情報

すべてのブロックは `wp-content/themes/kudohyoneji/blocks/src/blocks/index.js` で一元管理されています。新しいブロックを追加する場合は、以下の手順に従ってください：

1. `src/blocks/`に新しいディレクトリを作成
2. `index.js`, `edit.js`, `save.js`, `style.scss`を実装
3. `src/blocks/index.js`に`import`を追加

## ブロックの役割分類

| カテゴリー              | 用途                     | ブロック数 |
| ----------------------- | ------------------------ | ---------- |
| customBlocks            | 汎用・基本構成           | 10個       |
| station                 | ステーション・店舗情報   | 5個        |
| ikeuchi_shakanai_center | イケウチ石油センター特別 | 9個        |
| wholesale               | 卸売事業                 | 2個        |
| sales_maintenance       | 営業部・メンテナンス     | 2個        |
| processed_products      | 制作実績                 | 1個        |
| housing_equipment       | 住宅設備                 | 1個        |

## 今後の展開

1. webpackビルドシステムへの移行
2. ブロック数の追加拡張
3. テーマ固有機能の充実
4. Gutenbergエディター統合の深化

## 注意事項

- すべてのブロックは同じテーマ内で動作します
- テーマ変更時はブロックが使用不可になります
- APIバージョン3を使用しているため、WordPress 5.9以上が必要です
- レスポンシブ対応のため、デスクトップ・タブレット・モバイルで動作確認済み
