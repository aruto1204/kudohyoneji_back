# テーマカスタムブロック

## 概要

プラグインからテーマへの段階的移行テスト。`page-title-block`をテーマ版として実装。

## 実装済みブロック

- **Page Title Block (Theme Version)** - `kudohyoneji-theme/page-title`
  - プラグイン版との識別のため「テーマ版」表示を追加
  - 同じ機能を持つがテーマに統合された版

## ディレクトリ構造

```
wp-content/themes/kudohyoneji/blocks/
├── src/                    # ソースファイル（将来のビルド用）
│   ├── blocks/
│   │   └── page-title-block/
│   ├── components/
│   └── utils/
├── build/                  # ビルド済みファイル
│   ├── index.js           # 手動作成版
│   ├── index.asset.php    # 依存関係定義
│   └── style-index.css    # フロントエンド用CSS
├── package.json           # npm設定
└── README.md             # このファイル
```

## 使用方法

1. WordPressエディターで「Page Title (Theme)」ブロックを検索
2. ブロックを追加してタイトルとサブタイトルを設定
3. プラグイン版と同じ見た目だが、テーマに統合されている

## 技術的詳細

- **ブロック名**: `kudohyoneji-theme/page-title`
- **カテゴリ**: common
- **依存関係**: wp-blocks, wp-i18n, wp-element, wp-block-editor, wp-components, wp-data
- **スタイル**: レスポンシブ対応、Poppinsフォント使用

## 今後の展開

1. 他のブロックの段階的移行
2. ビルドシステムの改善
3. テーマ固有機能の追加

## 注意事項

- プラグイン版と並行して動作可能
- テーマ変更時はブロックが使用不可になる
- 現在は手動ビルド版を使用（将来的にはwebpack使用予定）
