└── wp-content
└── plugins
└── my-custom-blocks
├── assets
└── images
│ ├── has_apollostation_keeper.webp
│ ├── has_auto_flat_new_car.webp
│ ├── has_auto_flat_used_car.webp
│ ├── has_denki_tokuwari.webp
│ ├── has_drive_one.webp
│ └── has_oil_change.webp
├── block.json
├── docs
├── basic-design.md
├── task-list.md
└── wordpress-block-dev-guide.md
├── my-custom-blocks.php
├── package-lock.json
├── package.json
└── src
├── blocks
├── container-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── featured-image-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── google-map-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── index.js
├── link-button-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── page-title-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── section-title-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── services-list-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── store-info-list-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
└── width-container-block
│ ├── edit.js
│ ├── index.js
│ ├── save.js
│ └── style.scss
├── components
└── CustomPanel.js
├── hooks
└── usePostData.js
├── index.js
└── utils
└── helpers.js

## /wp-content/plugins/my-custom-blocks/assets/images/has_apollostation_keeper.webp:

https://raw.githubusercontent.com/aruto1204/kudohyoneji_back/main/wp-content/plugins/my-custom-blocks/assets/images/has_apollostation_keeper.webp

---

## /wp-content/plugins/my-custom-blocks/assets/images/has_auto_flat_new_car.webp:

https://raw.githubusercontent.com/aruto1204/kudohyoneji_back/main/wp-content/plugins/my-custom-blocks/assets/images/has_auto_flat_new_car.webp

---

## /wp-content/plugins/my-custom-blocks/assets/images/has_auto_flat_used_car.webp:

https://raw.githubusercontent.com/aruto1204/kudohyoneji_back/main/wp-content/plugins/my-custom-blocks/assets/images/has_auto_flat_used_car.webp

---

## /wp-content/plugins/my-custom-blocks/assets/images/has_denki_tokuwari.webp:

https://raw.githubusercontent.com/aruto1204/kudohyoneji_back/main/wp-content/plugins/my-custom-blocks/assets/images/has_denki_tokuwari.webp

---

## /wp-content/plugins/my-custom-blocks/assets/images/has_drive_one.webp:

https://raw.githubusercontent.com/aruto1204/kudohyoneji_back/main/wp-content/plugins/my-custom-blocks/assets/images/has_drive_one.webp

---

## /wp-content/plugins/my-custom-blocks/assets/images/has_oil_change.webp:

https://raw.githubusercontent.com/aruto1204/kudohyoneji_back/main/wp-content/plugins/my-custom-blocks/assets/images/has_oil_change.webp

---

## /wp-content/plugins/my-custom-blocks/block.json:

1 | {
2 | "$schema": "https://schemas.wp.org/trunk/block.json",
3 | "apiVersion": 3,
4 | "name": "my-custom-blocks/sample-block",
5 | "version": "1.0.0",
6 | "title": "Sample Block",
7 | "category": "widgets",
8 | "icon": "star-filled",
9 | "description": "サンプルカスタムブロック",
10 | "keywords": [ "sample", "custom", "example" ],
11 | "textdomain": "my-custom-blocks",
12 | "editorScript": "file:./index.js",
13 | "editorStyle": "file:./index.css",
14 | "style": "file:./style-index.css",
15 | "supports": {
16 | "html": false,
17 | "color": {
18 | "background": true,
19 | "text": true,
20 | "gradients": true
21 | },
22 | "spacing": {
23 | "padding": true,
24 | "margin": true
25 | },
26 | "typography": {
27 | "fontSize": true,
28 | "lineHeight": true
29 | }
30 | },
31 | "attributes": {
32 | "content": {
33 | "type": "string",
34 | "default": ""
35 | },
36 | "alignment": {
37 | "type": "string",
38 | "default": "left"
39 | },
40 | "showTitle": {
41 | "type": "boolean",
42 | "default": true
43 | }
44 | },
45 | "example": {
46 | "attributes": {
47 | "content": "サンプルテキスト",
48 | "alignment": "center"
49 | }
50 | }
51 | }
52 |

---

## /wp-content/plugins/my-custom-blocks/docs/basic-design.md:

1 | # My Custom Blocks - 基本設計書
2 |
3 | ## 📋 プロジェクト概要
4 |
5 | ### プロジェクト名
6 |
7 | **My Custom Blocks** - WordPress カスタムブロックプラグイン
8 |
9 | ### 目的
10 |
11 | 工藤米治商店の Web サイト用にカスタマイズされた Gutenberg ブロックを提供し、コンテンツ編集の効率化と統一されたデザインを実現する。
12 |
13 | ### 技術スタック
14 |
15 | - **フロントエンド**: React, JavaScript (ES6+)
16 | - **バックエンド**: PHP 7.4+
17 | - **ビルドツール**: @wordpress/scripts (Webpack)
18 | - **スタイル**: SCSS/CSS
19 | - **開発環境**: @wordpress/env
20 |
21 | ---
22 |
23 | ## 🏗 アーキテクチャ設計
24 |
25 | ### ディレクトリ構造
26 |
27 | ` 28 | wp-content/plugins/my-custom-blocks/
 29 | ├── 📄 my-custom-blocks.php      # メインプラグインファイル
 30 | ├── 📄 block.json               # ブロック設定ファイル
 31 | ├── 📄 package.json             # 依存関係とスクリプト
 32 | ├── 📄 basic-design.md          # 基本設計書（このファイル）
 33 | ├── 📄 wordpress-block-dev-guide.md # 開発ガイド
 34 | ├── 📁 src/                     # ソースコード
 35 | │   ├── 📄 index.js             # メインエントリーポイント
 36 | │   ├── 📁 blocks/              # ブロック定義
 37 | │   │   ├── 📄 index.js         # ブロック登録まとめ
 38 | │   │   └── 📁 sample-block/    # サンプルブロック
 39 | │   │       ├── 📄 index.js     # ブロック登録
 40 | │   │       ├── 📄 edit.js      # エディター画面
 41 | │   │       ├── 📄 save.js      # 保存内容
 42 | │   │       └── 📄 style.scss   # スタイル
 43 | │   ├── 📁 components/          # 共通コンポーネント
 44 | │   │   └── 📄 CustomPanel.js   # カスタムパネル
 45 | │   ├── 📁 hooks/               # カスタムフック
 46 | │   │   └── 📄 usePostData.js   # 投稿データフック
 47 | │   └── 📁 utils/               # ユーティリティ
 48 | │       └── 📄 helpers.js       # ヘルパー関数
 49 | ├── 📁 build/                   # ビルド成果物（自動生成）
 50 | │   ├── 📄 index.js
 51 | │   ├── 📄 index.css
 52 | │   └── 📄 index.asset.php
 53 | └── 📁 node_modules/            # 依存関係
 54 |`
55 |
56 | ---
57 |
58 | ## 🎯 ブロック設計方針
59 |
60 | ### 基本原則
61 |
62 | 1. **再利用性**: 共通コンポーネントとユーティリティの活用
63 | 2. **保守性**: 明確なファイル構造と命名規則
64 | 3. **拡張性**: 新しいブロックの追加が容易
65 | 4. **パフォーマンス**: 最適化されたビルドプロセス
66 | 5. **アクセシビリティ**: WCAG 準拠の UI 実装
67 |
68 | ### ブロック分類
69 |
70 | - **レイアウトブロック**: セクション、カラム、コンテナ
71 | - **コンテンツブロック**: テキスト、画像、動画
72 | - **インタラクティブブロック**: ボタン、フォーム、アコーディオン
73 | - **ビジネス固有ブロック**: 会社情報、サービス紹介、採用情報
74 |
75 | ---
76 |
77 | ## 🔧 技術仕様
78 |
79 | ### 開発環境
80 |
81 | `json
 82 | {
 83 |   "node": ">=16.0.0",
 84 |   "npm": ">=8.0.0",
 85 |   "php": ">=7.4",
 86 |   "wordpress": ">=6.0"
 87 | }
 88 | `
89 |
90 | ### 主要依存関係
91 |
92 | `json
 93 | {
 94 |   "devDependencies": {
 95 |     "@wordpress/scripts": "^30.24.0"
 96 |   },
 97 |   "dependencies": {
 98 |     "@wordpress/block-editor": "^15.4.0",
 99 |     "@wordpress/blocks": "^15.4.0",
100 |     "@wordpress/components": "^30.4.0",
101 |     "@wordpress/core-data": "^7.31.0",
102 |     "@wordpress/data": "^10.31.0",
103 |     "@wordpress/editor": "^14.31.0",
104 |     "@wordpress/element": "^6.31.0"
105 |   }
106 | }
107 | `
108 |
109 | ### ビルドスクリプト
110 |
111 | - `npm run start`: 開発モード（ホットリロード）
112 | - `npm run build`: 本番ビルド
113 | - `npm run lint:js`: JavaScript 品質チェック
114 | - `npm run lint:css`: CSS 品質チェック
115 | - `npm run format`: コードフォーマット
116 |
117 | ---
118 |
119 | ## 📦 ブロック仕様
120 |
121 | ### サンプルブロック仕様
122 |
123 | `json
124 | {
125 |   "name": "my-custom-blocks/sample-block",
126 |   "title": "Sample Block",
127 |   "category": "widgets",
128 |   "attributes": {
129 |     "content": {
130 |       "type": "string",
131 |       "default": ""
132 |     },
133 |     "alignment": {
134 |       "type": "string",
135 |       "default": "left"
136 |     },
137 |     "showTitle": {
138 |       "type": "boolean",
139 |       "default": true
140 |     }
141 |   },
142 |   "supports": {
143 |     "color": true,
144 |     "spacing": true,
145 |     "typography": true
146 |   }
147 | }
148 | `
149 |
150 | ### 共通属性設計
151 |
152 | - **レイアウト**: alignment, spacing, width
153 | - **スタイル**: color, background, typography
154 | - **表示制御**: visibility, responsive settings
155 | - **アニメーション**: transition, hover effects
156 |
157 | ---
158 |
159 | ## 🎨 デザインシステム
160 |
161 | ### カラーパレット
162 |
163 | `scss
164 | $primary-color: #007cba;
165 | $secondary-color: #333;
166 | $accent-color: #ddd;
167 | $text-color: #333;
168 | $background-color: #fff;
169 | `
170 |
171 | ### タイポグラフィ
172 |
173 | `scss
174 | $font-family-base: "Helvetica Neue", Arial, sans-serif;
175 | $font-size-base: 16px;
176 | $line-height-base: 1.6;
177 | `
178 |
179 | ### スペーシング
180 |
181 | `scss
182 | $spacing-xs: 8px;
183 | $spacing-sm: 16px;
184 | $spacing-md: 24px;
185 | $spacing-lg: 32px;
186 | $spacing-xl: 48px;
187 | `
188 |
189 | ---
190 |
191 | ## 🔄 開発ワークフロー
192 |
193 | ### 1. 環境セットアップ
194 |
195 | `bash
196 | # WordPress環境起動
197 | wp-env start
198 | 
199 | # 依存関係インストール
200 | npm install
201 | 
202 | # 開発モード開始
203 | npm run start
204 | `
205 |
206 | ### 2. 新ブロック開発手順
207 |
208 | 1. `src/blocks/新ブロック名/` ディレクトリ作成
209 | 2. 必要ファイル作成（index.js, edit.js, save.js, style.scss）
210 | 3. `src/blocks/index.js` に import 追加
211 | 4. `block.json` 更新（必要に応じて）
212 | 5. テストとデバッグ
213 |
214 | ### 3. 品質管理
215 |
216 | - ESLint/Prettier による自動フォーマット
217 | - React Developer Tools でのデバッグ
218 | - ブラウザ互換性テスト
219 | - アクセシビリティチェック
220 |
221 | ---
222 |
223 | ## 🚀 デプロイメント
224 |
225 | ### ビルドプロセス
226 |
227 | 1. `npm run build` で本番ビルド実行
228 | 2. `build/` ディレクトリの成果物確認
229 | 3. プラグインファイルの圧縮
230 | 4. WordPress 環境へのアップロード
231 |
232 | ### 本番環境要件
233 |
234 | - PHP 7.4 以上
235 | - WordPress 6.0 以上
236 | - モダンブラウザサポート（IE11 除く）
237 |
238 | ---
239 |
240 | ## 📋 開発チェックリスト
241 |
242 | ### 初期セットアップ
243 |
244 | - [ ] ディレクトリ構造作成
245 | - [ ] `my-custom-blocks.php` 完成
246 | - [ ] `block.json` 設定
247 | - [ ] `src/` ディレクトリ構成
248 | - [ ] サンプルブロック実装
249 |
250 | ### 開発中
251 |
252 | - [ ] ホットリロード動作確認
253 | - [ ] ブロックエディター表示確認
254 | - [ ] React Developer Tools デバッグ
255 | - [ ] コンソールエラーチェック
256 | - [ ] レスポンシブ対応確認
257 |
258 | ### リリース前
259 |
260 | - [ ] 本番ビルド成功
261 | - [ ] 各デバイス表示確認
262 | - [ ] アクセシビリティテスト
263 | - [ ] パフォーマンステスト
264 | - [ ] ブラウザ互換性確認
265 |
266 | ---
267 |
268 | ## 🚨 トラブルシューティング
269 |
270 | ### よくある問題と対処法
271 |
272 | #### ブロックが表示されない
273 |
274 | 1. プラグイン有効化確認
275 | 2. `npm run start` 動作確認
276 | 3. ブラウザコンソールエラーチェック
277 | 4. `build/` ディレクトリ存在確認
278 |
279 | #### ホットリロードが効かない
280 |
281 | 1. `--webpack-copy-php` オプション確認
282 | 2. ブラウザキャッシュクリア
283 | 3. `wp-env restart` で環境再起動
284 |
285 | #### スタイルが反映されない
286 |
287 | 1. `build/index.css` 生成確認
288 | 2. `wp_enqueue_style` 設定確認
289 | 3. CSS セレクタ優先度調整
290 |
291 | ---
292 |
293 | ## 📚 参考資料
294 |
295 | - [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
296 | - [Gutenberg Components](https://wordpress.github.io/gutenberg/)
297 | - [@wordpress/scripts Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
298 | - [React Documentation](https://reactjs.org/docs/)
299 |
300 | ---
301 |
302 | ## 📝 更新履歴
303 |
304 | | バージョン | 日付 | 変更内容 |
305 | | ---------- | ---------- | -------- |
306 | | 1.0.0 | 2024-XX-XX | 初版作成 |
307 |
308 | ---
309 |
310 | **作成者**: 開発チーム  
311 | **最終更新**: 2024 年 XX 月 XX 日  
312 | **ドキュメントバージョン**: 1.0.0
313 |

---

## /wp-content/plugins/my-custom-blocks/docs/task-list.md:

1 | # My Custom Blocks - 開発タスクリスト
2 |
3 | ## 📋 プロジェクト概要
4 |
5 | **プロジェクト名**: My Custom Blocks  
 6 | **目的**: 工藤米治商店の Web サイト用 WordPress カスタムブロックプラグイン開発  
 7 | **開始日**: 2024 年 XX 月 XX 日  
 8 | **担当者**: 開発チーム
9 |
10 | ---
11 |
12 | ## 🎯 開発フェーズ別タスクリスト
13 |
14 | ### Phase 1: 初期セットアップ 🚀
15 |
16 | #### 1.1 環境構築
17 |
18 | - [x] **WordPress 開発環境確認**
19 | - [x] `@wordpress/env` 動作確認
20 | - [x] Node.js (>=16.0.0) インストール確認
21 | - [x] npm (>=8.0.0) インストール確認
22 | - [x] PHP (>=7.4) インストール確認
23 |
24 | #### 1.2 プロジェクト基盤
25 |
26 | - [x] **ディレクトリ構造作成**
27 | - [x] `src/` ディレクトリ作成
28 | - [x] `src/blocks/` ディレクトリ作成
29 | - [x] `src/components/` ディレクトリ作成
30 | - [x] `src/hooks/` ディレクトリ作成
31 | - [x] `src/utils/` ディレクトリ作成
32 |
33 | #### 1.3 設定ファイル
34 |
35 | - [x] **メインプラグインファイル完成**
36 |
37 | - [x] `my-custom-blocks.php` 基本構造実装
38 | - [x] プラグインヘッダー情報設定
39 | - [x] セキュリティ対策（直接アクセス防止）
40 | - [x] 定数定義（VERSION, PATH, URL）
41 | - [x] ブロック初期化関数実装
42 | - [x] アセット読み込み関数実装
43 |
44 | - [x] **ブロック設定ファイル作成**
45 | - [x] `block.json` 基本設定
46 | - [x] スキーマ設定
47 | - [x] ブロック属性定義
48 | - [x] サポート機能設定
49 | - [x] 例示データ設定
50 |
51 | #### 1.4 依存関係確認
52 |
53 | - [x] **package.json 設定確認**
54 | - [x] 必要な依存関係インストール済み確認
55 | - [x] ビルドスクリプト動作確認
56 | - [x] 開発スクリプト動作確認
57 |
58 | ---
59 |
60 | ### Phase 2: 基本ブロック開発 🔧
61 |
62 | #### 2.1 エントリーポイント作成
63 |
64 | - [x] **メインエントリーファイル**
65 | - [x] `src/index.js` 作成
66 | - [x] WordPress 依存関係インポート
67 | - [x] ブロック登録インポート
68 | - [x] 初期化処理実装
69 |
70 | #### 2.2 ブロック登録システム
71 |
72 | - [x] **ブロック登録ファイル**
73 | - [x] `src/blocks/index.js` 作成
74 | - [x] サンプルブロックインポート
75 | - [x] 将来のブロック用コメント追加
76 |
77 | #### 2.3 サンプルブロック実装
78 |
79 | - [x] **サンプルブロックディレクトリ作成**
80 |
81 | - [x] `src/blocks/sample-block/` ディレクトリ作成
82 |
83 | - [x] **ブロック登録ファイル**
84 |
85 | - [x] `src/blocks/sample-block/index.js` 作成
86 | - [x] registerBlockType 実装
87 | - [x] メタデータインポート
88 |
89 | - [x] **エディター画面コンポーネント**
90 |
91 | - [x] `src/blocks/sample-block/edit.js` 作成
92 | - [x] useBlockProps 実装
93 | - [x] RichText 実装
94 | - [x] BlockControls 実装
95 | - [x] InspectorControls 実装
96 | - [x] 属性管理実装
97 |
98 | - [x] **保存コンポーネント**
99 |
100 | - [x] `src/blocks/sample-block/save.js` 作成
101 | - [x] useBlockProps.save 実装
102 | - [x] RichText.Content 実装
103 | - [x] 属性出力実装
104 |
105 | - [x] **スタイル実装**
106 | - [x] `src/blocks/sample-block/style.scss` 作成
107 | - [x] 基本スタイル定義
108 | - [x] レスポンシブ対応
109 | - [x] エディター専用スタイル
110 | - [x] ホバー効果実装
111 |
112 | ---
113 |
114 | ### Phase 3: 共通システム開発 🛠
115 |
116 | #### 3.1 ユーティリティ開発
117 |
118 | - [x] **ヘルパー関数**
119 | - [x] `src/utils/helpers.js` 作成
120 | - [x] classNames 関数実装
121 | - [x] updateAttribute 関数実装
122 | - [x] getMediaDetails 関数実装
123 |
124 | #### 3.2 カスタムフック開発
125 |
126 | - [x] **投稿データフック**
127 | - [x] `src/hooks/usePostData.js` 作成
128 | - [x] usePostData 関数実装
129 | - [x] usePostMeta 関数実装
130 |
131 | #### 3.3 共通コンポーネント開発
132 |
133 | - [x] **カスタムパネル**
134 | - [x] `src/components/CustomPanel.js` 作成
135 | - [x] 再利用可能なパネルコンポーネント実装
136 |
137 | ---
138 |
139 | ### Phase 4: 開発環境整備 ⚙️
140 |
141 | #### 4.1 ビルドシステム
142 |
143 | - [x] **開発モード確認**
144 |
145 | - [x] `npm run start` 動作確認
146 | - [x] ホットリロード動作確認
147 | - [x] `--webpack-copy-php` オプション確認
148 |
149 | - [x] **本番ビルド確認**
150 | - [x] `npm run build` 動作確認
151 | - [x] `build/` ディレクトリ生成確認
152 | - [x] `index.asset.php` 生成確認
153 |
154 | #### 4.2 品質管理ツール
155 |
156 | - [x] **コード品質チェック**
157 | - [x] `npm run lint:js` 動作確認
158 | - [x] `npm run lint:css` 動作確認
159 | - [x] `npm run format` 動作確認
160 |
161 | #### 4.3 開発ツール設定
162 |
163 | - [x] **VSCode 拡張機能**
164 |
165 | - [x] ES7+ React/Redux/React-Native snippets
166 | - [x] WordPress Snippets
167 | - [x] PHP Intelephense
168 | - [x] Prettier - Code formatter
169 | - [x] Auto Rename Tag
170 |
171 | - [x] **ブラウザ拡張機能**
172 | - [x] React Developer Tools
173 | - [x] WordPress Debug Objects
174 |
175 | ---
176 |
177 | ### Phase 5: テスト・デバッグ 🧪
178 |
179 | #### 5.1 機能テスト
180 |
181 | - [x] **ブロックエディター動作確認**
182 | - [x] ブロック挿入テスト
183 | - [x] 属性変更テスト
184 | - [x] プレビュー表示テスト
185 | - [x] 保存・読み込みテスト
186 |
187 | #### 5.2 表示テスト
188 |
189 | - [x] **フロントエンド表示確認**
190 | - [x] デスクトップ表示確認
191 | - [x] タブレット表示確認
192 | - [x] スマートフォン表示確認
193 |
194 | #### 5.3 互換性テスト
195 |
196 | - [x] **ブラウザ互換性**
197 | - [x] Chrome 最新版
198 | - [x] Firefox 最新版
199 | - [x] Safari 最新版
200 | - [x] Edge 最新版
201 |
202 | #### 5.4 デバッグ
203 |
204 | - [x] **エラーチェック**
205 | - [x] ブラウザコンソールエラーなし
206 | - [x] PHP エラーログ確認
207 | - [x] WordPress デバッグログ確認
208 |
209 | ---
210 |
211 | ### Phase 6: パフォーマンス・アクセシビリティ 🚀
212 |
213 | #### 6.1 パフォーマンス最適化
214 |
215 | - [ ] **ビルド最適化**
216 | - [ ] バンドルサイズ確認
217 | - [ ] 不要な依存関係削除
218 | - [ ] コード分割検討
219 |
220 | #### 6.2 アクセシビリティ
221 |
222 | - [ ] **WCAG 準拠チェック**
223 | - [ ] キーボードナビゲーション
224 | - [ ] スクリーンリーダー対応
225 | - [ ] カラーコントラスト確認
226 | - [ ] フォーカス表示確認
227 |
228 | ---
229 |
230 | ### Phase 7: ドキュメント・リリース準備 📚
231 |
232 | #### 7.1 ドキュメント整備
233 |
234 | - [ ] **README.md 作成**
235 |
236 | - [ ] インストール手順
237 | - [ ] 使用方法
238 | - [ ] 開発者向け情報
239 |
240 | - [ ] **CHANGELOG.md 作成**
241 | - [ ] バージョン履歴
242 | - [ ] 変更内容記録
243 |
244 | #### 7.2 リリース準備
245 |
246 | - [ ] **最終チェック**
247 |
248 | - [ ] 全機能動作確認
249 | - [ ] セキュリティチェック
250 | - [ ] パフォーマンステスト
251 |
252 | - [ ] **パッケージング**
253 | - [ ] 不要ファイル除外
254 | - [ ] プラグイン ZIP 作成
255 | - [ ] インストールテスト
256 |
257 | ---
258 |
259 | ## 🚨 トラブルシューティングチェックリスト
260 |
261 | ### ブロックが表示されない場合
262 |
263 | - [ ] プラグイン有効化確認
264 | - [ ] `npm run start` 動作確認
265 | - [ ] ブラウザコンソールエラーチェック
266 | - [ ] `build/` ディレクトリ存在確認
267 | - [ ] `my-custom-blocks.php` 構文エラーチェック
268 |
269 | ### ホットリロードが効かない場合
270 |
271 | - [ ] `--webpack-copy-php` オプション確認
272 | - [ ] ブラウザキャッシュクリア
273 | - [ ] `wp-env restart` で環境再起動
274 | - [ ] ポート競合確認
275 | - [ ] ファイル権限確認
276 |
277 | ### スタイルが反映されない場合
278 |
279 | - [ ] `build/index.css` 生成確認
280 | - [ ] `wp_enqueue_style` 設定確認
281 | - [ ] CSS セレクタ優先度調整
282 | - [ ] ブラウザキャッシュクリア
283 | - [ ] SCSS コンパイルエラーチェック
284 |
285 | ---
286 |
287 | ## 📊 進捗管理
288 |
289 | ### 完了率計算
290 |
291 | - **Phase 1 (初期セットアップ)**: **16/16 タスク完了 (100%)**
292 | - **Phase 2 (基本ブロック開発)**: **15/15 タスク完了 (100%)**
293 | - **Phase 3 (共通システム開発)**: **6/6 タスク完了 (100%)**
294 | - **Phase 4 (開発環境整備)**: **11/11 タスク完了 (100%)**
295 | - **Phase 5 (テスト・デバッグ)**: **12/12 タスク完了 (100%)**
296 | - **Phase 6 (パフォーマンス・アクセシビリティ)**: **0/7 タスク完了 (0%)**
297 | - **Phase 7 (ドキュメント・リリース準備)**: **0/8 タスク完了 (0%)**
298 |
299 | **全体進捗**: **60/75 タスク完了 (80%)**
300 |
301 | ---
302 |
303 | ## 📅 マイルストーン
304 |
305 | | マイルストーン | 予定日 | 完了日 | ステータス |
306 | | -------------- | -------------- | ---------- | ------------- |
307 | | Phase 1 完了 | 2024-XX-XX | 2024-09-27 | ✅ 完了 |
308 | | Phase 2 完了 | 2024-XX-XX | 2024-09-27 | ✅ 完了 |
309 | | Phase 3 完了 | 2024-XX-XX | 2024-09-27 | ✅ 完了 |
310 | | Phase 4 完了 | 2024-XX-XX | 2024-09-27 | ✅ 完了 |
311 | | Phase 5 完了 | 2024-XX-XX | 2024-09-27 | ✅ 完了 |
312 | | Phase 6 完了 | 2024-XX-XX | - | ⏳ 待機中 |
313 | | Phase 7 完了 | 2024-XX-XX | - | ⏳ 待機中 |
314 | | **リリース** | **2024-XX-XX** | **-** | **⏳ 待機中** |
315 |
316 | ---
317 |
318 | ## 📝 メモ・課題
319 |
320 | ### 技術的課題
321 |
322 | - [ ]
323 |
324 | ### デザイン課題
325 |
326 | - [ ]
327 |
328 | ### その他
329 |
330 | - [ ]
331 |
332 | ---
333 |
334 | **作成日**: 2024 年 XX 月 XX 日  
335 | **最終更新**: 2024 年 XX 月 XX 日  
336 | **バージョン**: 1.0.0  
337 | **担当者**: 開発チーム
338 |

---

## /wp-content/plugins/my-custom-blocks/docs/wordpress-block-dev-guide.md:

1 | # WordPress カスタムブロック開発環境構築ガイド
2 |
3 | ## 🚀 現在の状況
4 | - ✅ `@wordpress/env` 環境構築済み
5 | - ✅ `package.json` 設定完了
6 | - ✅ 必要な WordPress 依存関係インストール済み
7 | - 📝 次のステップ：ファイル構成とブロック開発開始
8 |
9 | ---
10 |
11 | ## 📁 推奨ディレクトリ構造
12 |
13 | ` 14 | wp-content/plugins/my-custom-blocks/
 15 | ├── package.json                    # ✅ 設定済み
 16 | ├── my-custom-blocks.php           # 📝 次に作成
 17 | ├── block.json                     # 📝 次に作成
 18 | ├── webpack.config.js              # 📝 オプション
 19 | ├── src/                          # 📝 次に作成
 20 | │   ├── index.js                  # メインエントリーポイント
 21 | │   ├── blocks/                   # 各ブロック
 22 | │   │   ├── sample-block/
 23 | │   │   │   ├── index.js
 24 | │   │   │   ├── edit.js
 25 | │   │   │   ├── save.js
 26 | │   │   │   └── style.scss
 27 | │   │   └── index.js              # ブロックまとめ
 28 | │   ├── components/               # 共通コンポーネント
 29 | │   │   └── CustomPanel.js
 30 | │   ├── hooks/                    # カスタムフック
 31 | │   │   └── usePostData.js
 32 | │   └── utils/                    # ユーティリティ
 33 | │       └── helpers.js
 34 | └── build/                        # 自動生成
 35 |     ├── index.js
 36 |     ├── index.css
 37 |     └── ...
 38 |`
39 |
40 | ---
41 |
42 | ## ⚡ 必要ファイルの作成
43 |
44 | ### 1. メイン PHP ファイル (`my-custom-blocks.php`)
45 |
46 | `php
 47 | <?php
 48 | /**
 49 |  * Plugin Name: My Custom Blocks
 50 |  * Plugin URI: https://example.com
 51 |  * Description: カスタムブロックコレクション
 52 |  * Version: 1.0.0
 53 |  * Author: Your Name
 54 |  * License: GPL v2 or later
 55 |  * Text Domain: my-custom-blocks
 56 |  */
 57 | 
 58 | // 直接アクセスを防止
 59 | if (!defined('ABSPATH')) {
 60 |     exit;
 61 | }
 62 | 
 63 | // 定数定義
 64 | define('MY_CUSTOM_BLOCKS_VERSION', '1.0.0');
 65 | define('MY_CUSTOM_BLOCKS_PATH', plugin_dir_path(__FILE__));
 66 | define('MY_CUSTOM_BLOCKS_URL', plugin_dir_url(__FILE__));
 67 | 
 68 | /**
 69 |  * ブロックタイプの初期化
 70 |  */
 71 | function my_custom_blocks_init() {
 72 |     // block.jsonからブロックを登録
 73 |     register_block_type(MY_CUSTOM_BLOCKS_PATH . 'build');
 74 | }
 75 | add_action('init', 'my_custom_blocks_init');
 76 | 
 77 | /**
 78 |  * エディタ用アセット読み込み
 79 |  */
 80 | function my_custom_blocks_editor_assets() {
 81 |     $asset_file = include(MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php');
 82 | 
 83 |     wp_enqueue_script(
 84 |         'my-custom-blocks-editor',
 85 |         MY_CUSTOM_BLOCKS_URL . 'build/index.js',
 86 |         $asset_file['dependencies'],
 87 |         $asset_file['version']
 88 |     );
 89 | 
 90 |     wp_enqueue_style(
 91 |         'my-custom-blocks-editor',
 92 |         MY_CUSTOM_BLOCKS_URL . 'build/index.css',
 93 |         array('wp-edit-blocks'),
 94 |         $asset_file['version']
 95 |     );
 96 | 
 97 |     // 翻訳ファイル設定
 98 |     wp_set_script_translations(
 99 |         'my-custom-blocks-editor',
100 |         'my-custom-blocks'
101 |     );
102 | }
103 | add_action('enqueue_block_editor_assets', 'my_custom_blocks_editor_assets');
104 | 
105 | /**
106 |  * フロントエンド用アセット読み込み
107 |  */
108 | function my_custom_blocks_frontend_assets() {
109 |     $asset_file = include(MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php');
110 | 
111 |     wp_enqueue_style(
112 |         'my-custom-blocks-style',
113 |         MY_CUSTOM_BLOCKS_URL . 'build/style-index.css',
114 |         array(),
115 |         $asset_file['version']
116 |     );
117 | }
118 | add_action('wp_enqueue_scripts', 'my_custom_blocks_frontend_assets');
119 | `
120 |
121 | ### 2. ブロック設定ファイル (`block.json`)
122 |
123 | `json
124 | {
125 |   "$schema": "https://schemas.wp.org/trunk/block.json",
126 |   "apiVersion": 3,
127 |   "name": "my-custom-blocks/sample-block",
128 |   "version": "1.0.0",
129 |   "title": "Sample Block",
130 |   "category": "widgets",
131 |   "icon": "star-filled",
132 |   "description": "サンプルカスタムブロック",
133 |   "keywords": ["sample", "custom", "example"],
134 |   "textdomain": "my-custom-blocks",
135 |   "editorScript": "file:./index.js",
136 |   "editorStyle": "file:./index.css",
137 |   "style": "file:./style-index.css",
138 |   "supports": {
139 |     "html": false,
140 |     "color": {
141 |       "background": true,
142 |       "text": true,
143 |       "gradients": true
144 |     },
145 |     "spacing": {
146 |       "padding": true,
147 |       "margin": true
148 |     },
149 |     "typography": {
150 |       "fontSize": true,
151 |       "lineHeight": true
152 |     }
153 |   },
154 |   "attributes": {
155 |     "content": {
156 |       "type": "string",
157 |       "default": ""
158 |     },
159 |     "alignment": {
160 |       "type": "string",
161 |       "default": "left"
162 |     },
163 |     "showTitle": {
164 |       "type": "boolean",
165 |       "default": true
166 |     }
167 |   },
168 |   "example": {
169 |     "attributes": {
170 |       "content": "サンプルテキスト",
171 |       "alignment": "center"
172 |     }
173 |   }
174 | }
175 | `
176 |
177 | ### 3. メインエントリーファイル (`src/index.js`)
178 |
179 | `javascript
180 | /**
181 |  * WordPress dependencies
182 |  */
183 | import { registerBlockType } from '@wordpress/blocks';
184 | 
185 | /**
186 |  * Internal dependencies
187 |  */
188 | import './blocks';
189 | 
190 | // 追加の初期化処理があればここに記述
191 | console.log('My Custom Blocks loaded!');
192 | `
193 |
194 | ### 4. ブロック登録ファイル (`src/blocks/index.js`)
195 |
196 | `javascript
197 | /**
198 |  * ブロック登録
199 |  * 新しいブロックを作成したらここにimportを追加
200 |  */
201 | import './sample-block';
202 | 
203 | // 今後追加予定のブロック
204 | // import './hero-block';
205 | // import './testimonial-block';
206 | // import './pricing-table';
207 | `
208 |
209 | ### 5. サンプルブロック (`src/blocks/sample-block/index.js`)
210 |
211 | `javascript
212 | import { registerBlockType } from '@wordpress/blocks';
213 | import { __ } from '@wordpress/i18n';
214 | 
215 | import Edit from './edit';
216 | import save from './save';
217 | import metadata from '../../../block.json';
218 | 
219 | registerBlockType(metadata.name, {
220 |     ...metadata,
221 |     edit: Edit,
222 |     save,
223 | });
224 | `
225 |
226 | ### 6. ブロック編集画面 (`src/blocks/sample-block/edit.js`)
227 |
228 | `` javascript
229 | import { __ } from '@wordpress/i18n';
230 | import {
231 |     useBlockProps,
232 |     RichText,
233 |     AlignmentControl,
234 |     BlockControls,
235 |     InspectorControls,
236 |     ColorPalette
237 | } from '@wordpress/block-editor';
238 | import {
239 |     PanelBody,
240 |     ToggleControl,
241 |     SelectControl
242 | } from '@wordpress/components';
243 | 
244 | export default function Edit({ attributes, setAttributes }) {
245 |     const { content, alignment, showTitle } = attributes;
246 |     
247 |     const blockProps = useBlockProps({
248 |         className: `has-text-align-${alignment}`
249 |     });
250 | 
251 |     return (
252 |         <>
253 |             <BlockControls>
254 |                 <AlignmentControl
255 |                     value={alignment}
256 |                     onChange={(newAlignment) => setAttributes({ 
257 |                         alignment: newAlignment || 'left' 
258 |                     })}
259 |                 />
260 |             </BlockControls>
261 |             
262 |             <InspectorControls>
263 |                 <PanelBody title={__('表示設定', 'my-custom-blocks')}>
264 |                     <ToggleControl
265 |                         label={__('タイトルを表示', 'my-custom-blocks')}
266 |                         checked={showTitle}
267 |                         onChange={(value) => setAttributes({ showTitle: value })}
268 |                     />
269 |                     
270 |                     <SelectControl
271 |                         label={__('配置', 'my-custom-blocks')}
272 |                         value={alignment}
273 |                         options={[
274 |                             { label: __('左寄せ', 'my-custom-blocks'), value: 'left' },
275 |                             { label: __('中央', 'my-custom-blocks'), value: 'center' },
276 |                             { label: __('右寄せ', 'my-custom-blocks'), value: 'right' }
277 |                         ]}
278 |                         onChange={(newAlignment) => setAttributes({ alignment: newAlignment })}
279 |                     />
280 |                 </PanelBody>
281 |             </InspectorControls>
282 | 
283 |             <div {...blockProps}>
284 |                 {showTitle && (
285 |                     <h3>{__('サンプルブロック', 'my-custom-blocks')}</h3>
286 |                 )}
287 |                 
288 |                 <RichText
289 |                     tagName="p"
290 |                     value={content}
291 |                     onChange={(newContent) => setAttributes({ content: newContent })}
292 |                     placeholder={__('テキストを入力してください...', 'my-custom-blocks')}
293 |                 />
294 |             </div>
295 |         </>
296 |     );
297 | }
298 |  ``
299 |
300 | ### 7. ブロック保存内容 (`src/blocks/sample-block/save.js`)
301 |
302 | `` javascript
303 | import { useBlockProps, RichText } from '@wordpress/block-editor';
304 | 
305 | export default function save({ attributes }) {
306 |     const { content, alignment, showTitle } = attributes;
307 |     
308 |     const blockProps = useBlockProps.save({
309 |         className: `has-text-align-${alignment}`
310 |     });
311 | 
312 |     return (
313 |         <div {...blockProps}>
314 |             {showTitle && (
315 |                 <h3>サンプルブロック</h3>
316 |             )}
317 |             
318 |             <RichText.Content
319 |                 tagName="p"
320 |                 value={content}
321 |             />
322 |         </div>
323 |     );
324 | }
325 |  ``
326 |
327 | ### 8. スタイル (`src/blocks/sample-block/style.scss`)
328 |
329 | `scss
330 | .wp-block-my-custom-blocks-sample-block {
331 |     padding: 20px;
332 |     border: 1px solid #ddd;
333 |     border-radius: 8px;
334 |     margin: 20px 0;
335 | 
336 |     h3 {
337 |         margin-top: 0;
338 |         color: #333;
339 |         font-size: 1.2em;
340 |     }
341 | 
342 |     p {
343 |         margin-bottom: 0;
344 |         line-height: 1.6;
345 |     }
346 | 
347 |     &.has-text-align-center {
348 |         text-align: center;
349 |     }
350 | 
351 |     &.has-text-align-right {
352 |         text-align: right;
353 |     }
354 | 
355 |     // エディター専用スタイル
356 |     .block-editor & {
357 |         border: 2px dashed #ccc;
358 |         
359 |         &:hover {
360 |             border-color: #007cba;
361 |         }
362 |     }
363 | }
364 | `
365 |
366 | ---
367 |
368 | ## 🛠 開発用ユーティリティファイル
369 |
370 | ### カスタムフック (`src/hooks/usePostData.js`)
371 |
372 | `javascript
373 | import { useSelect } from '@wordpress/data';
374 | 
375 | /**
376 |  * 投稿データを取得するカスタムフック
377 |  */
378 | export function usePostData(postType = 'post', queryArgs = {}) {
379 |     return useSelect((select) => {
380 |         const { getEntityRecords } = select('core');
381 |         
382 |         return getEntityRecords('postType', postType, {
383 |             per_page: 10,
384 |             status: 'publish',
385 |             ...queryArgs
386 |         });
387 |     }, [postType, queryArgs]);
388 | }
389 | 
390 | /**
391 |  * 現在の投稿メタデータを操作するフック
392 |  */
393 | export function usePostMeta() {
394 |     return useSelect((select) => {
395 |         const { getCurrentPost } = select('core/editor');
396 |         return getCurrentPost()?.meta || {};
397 |     });
398 | }
399 | `
400 |
401 | ### 共通コンポーネント (`src/components/CustomPanel.js`)
402 |
403 | `javascript
404 | import { PanelBody, PanelRow } from '@wordpress/components';
405 | import { __ } from '@wordpress/i18n';
406 | 
407 | export default function CustomPanel({ title, children, initialOpen = false }) {
408 |     return (
409 |         <PanelBody title={title} initialOpen={initialOpen}>
410 |             <PanelRow>
411 |                 {children}
412 |             </PanelRow>
413 |         </PanelBody>
414 |     );
415 | }
416 | `
417 |
418 | ### ユーティリティ関数 (`src/utils/helpers.js`)
419 |
420 | `javascript
421 | /**
422 |  * クラス名を結合するヘルパー
423 |  */
424 | export function classNames(...classes) {
425 |     return classes.filter(Boolean).join(' ');
426 | }
427 | 
428 | /**
429 |  * 属性の安全な更新
430 |  */
431 | export function updateAttribute(setAttributes, key, value) {
432 |     setAttributes({ [key]: value });
433 | }
434 | 
435 | /**
436 |  * メディア情報を取得
437 |  */
438 | export function getMediaDetails(mediaId) {
439 |     if (!mediaId) return null;
440 |     
441 |     return wp.media.attachment(mediaId).get();
442 | }
443 | `
444 |
445 | ---
446 |
447 | ## 🎯 開発ワークフロー
448 |
449 | ### 1. 開発開始
450 |
451 | `bash
452 | # WordPress環境起動
453 | wp-env start
454 | 
455 | # 別ターミナルで開発モード開始
456 | cd wp-content/plugins/my-custom-blocks
457 | npm run start
458 | `
459 |
460 | ### 2. ブラウザアクセス
461 |
462 | - 管理画面: `http://localhost:8888/wp-admin`
463 | - フロントエンド: `http://localhost:8888`
464 | - デフォルトログイン: `admin` / `password`
465 |
466 | ### 3. 新しいブロック追加手順
467 |
468 | 1. `src/blocks/新ブロック名/` ディレクトリ作成
469 | 2. `index.js`, `edit.js`, `save.js`, `style.scss` 作成
470 | 3. `src/blocks/index.js` に import 追加
471 | 4. `block.json` を必要に応じて更新
472 |
473 | ### 4. デバッグとテスト
474 |
475 | `bash
476 | # ビルドエラーチェック
477 | npm run build
478 | 
479 | # コード品質チェック
480 | npm run lint:js
481 | npm run lint:css
482 | 
483 | # コードフォーマット
484 | npm run format
485 | `
486 |
487 | ---
488 |
489 | ## 📋 開発チェックリスト
490 |
491 | ### 初期セットアップ
492 | - [ ] 上記ファイル構造を作成
493 | - [ ] `my-custom-blocks.php` 作成
494 | - [ ] `block.json` 設定
495 | - [ ] `src/` ディレクトリ構成
496 | - [ ] サンプルブロック実装
497 |
498 | ### 開発中
499 | - [ ] `npm run start` でホットリロード確認
500 | - [ ] ブラウザでブロックエディター動作確認
501 | - [ ] React Developer Tools でデバッグ
502 | - [ ] コンソールエラーがないか確認
503 |
504 | ### リリース前
505 | - [ ] `npm run build` で本番ビルド
506 | - [ ] 各デバイスでの表示確認
507 | - [ ] アクセシビリティチェック
508 | - [ ] パフォーマンステスト
509 |
510 | ---
511 |
512 | ## 🚨 よくあるトラブルと対処法
513 |
514 | ### ブロックが表示されない
515 | 1. `my-custom-blocks.php` でプラグインが有効化されているか確認
516 | 2. `npm run start` が正常に動作しているか確認
517 | 3. ブラウザのコンソールでエラーをチェック
518 |
519 | ### ホットリロードが効かない
520 | 1. `--webpack-copy-php` オプション確認
521 | 2. ブラウザキャッシュクリア
522 | 3. `wp-env restart` で環境再起動
523 |
524 | ### スタイルが反映されない
525 | 1. `build/index.css` が生成されているか確認
526 | 2. `wp_enqueue_style` が正しく設定されているか確認
527 | 3. CSS セレクタの優先度を調整
528 |
529 | ---
530 |
531 | ## 🔧 便利な開発ツール
532 |
533 | ### VSCode 拡張機能
534 | - ES7+ React/Redux/React-Native snippets
535 | - WordPress Snippets
536 | - PHP Intelephense
537 | - Prettier - Code formatter
538 | - Auto Rename Tag
539 |
540 | ### ブラウザ拡張
541 | - React Developer Tools
542 | - WordPress Debug Objects
543 |
544 | ---
545 |
546 | この環境で React の知識を活かして効率的に WordPress カスタムブロック開発を進められます！

---

## /wp-content/plugins/my-custom-blocks/my-custom-blocks.php:

1 | <?php
2 | /**
3 | _ Plugin Name: My Custom Blocks
4 | _ Plugin URI: https://example.com
5 | _ Description: カスタムブロックコレクション
6 | _ Version: 1.0.0
7 | _ Author: Your Name
8 | _ License: GPL v2 or later
9 | _ Text Domain: my-custom-blocks
10 | _/
11 |
12 | // 直接アクセスを防止
13 | if (!defined('ABSPATH')) {
14 | exit;
15 | }
16 |
17 | // 定数定義
18 | define('MY_CUSTOM_BLOCKS_VERSION', '1.0.0');
19 | define('MY_CUSTOM_BLOCKS_PATH', plugin_dir_path(**FILE**));
20 | define('MY_CUSTOM_BLOCKS_URL', plugin_dir_url(**FILE**));
21 |
22 | /**
23 | _ ブロックタイプの初期化
24 | _/
25 | function my_custom_blocks_init() {
26 | // block.json からブロックを登録
27 | register_block_type(MY_CUSTOM_BLOCKS_PATH . 'build');
28 | }
29 | add_action('init', 'my_custom_blocks_init');
30 |
31 | /**
32 | _ エディタ用アセット読み込み
33 | _/
34 | function my_custom_blocks_editor_assets() {
35 | $asset_file_path = MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php';
 36 | 
 37 |     if (!file_exists($asset_file_path)) {
38 | return;
39 | }
40 |
41 | $asset_file = include($asset_file_path);
42 |
43 | wp_enqueue_script(
44 | 'my-custom-blocks-editor',
45 | MY_CUSTOM_BLOCKS_URL . 'build/index.js',
46 | $asset_file['dependencies'],
 47 |         $asset_file['version']
 48 |     );
 49 | 
 50 |     // エディター用スタイル（存在する場合のみ読み込み）
 51 |     $editor_css_path = MY_CUSTOM_BLOCKS_PATH . 'build/index.css';
 52 |     if (file_exists($editor_css_path)) {
53 | wp_enqueue_style(
54 | 'my-custom-blocks-editor',
55 | MY_CUSTOM_BLOCKS_URL . 'build/index.css',
56 | array('wp-edit-blocks'),
57 | $asset_file['version']
58 | );
59 | }
60 |
61 | // 注意: エディター用の個別 CSS ファイルは通常不要です
62 | // ブロックのスタイルは style-index.css に含まれ、フロントエンドとエディターの両方で使用されます
63 |
64 | // 翻訳ファイル設定
65 | wp_set_script_translations(
66 | 'my-custom-blocks-editor',
67 | 'my-custom-blocks'
68 | );
69 |
70 | // プラグイン URL を JavaScript に渡す
71 | wp_localize_script(
72 | 'my-custom-blocks-editor',
73 | 'myCustomBlocksData',
74 | array(
75 | 'pluginUrl' => MY_CUSTOM_BLOCKS_URL,
76 | )
77 | );
78 | }
79 | add_action('enqueue_block_editor_assets', 'my_custom_blocks_editor_assets');
80 |
81 | /**
82 | _ フロントエンド用アセット読み込み
83 | _/
84 | function my_custom_blocks_frontend_assets() {
85 | $asset_file_path = MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php';
 86 | 
 87 |     if (!file_exists($asset_file_path)) {
88 | return;
89 | }
90 |
91 | $asset_file = include($asset_file_path);
92 |
93 | wp_enqueue_style(
94 | 'my-custom-blocks-style',
95 | MY_CUSTOM_BLOCKS_URL . 'build/style-index.css',
96 | array(),
97 | $asset_file['version']
98 | );
99 | }
100 | add_action('wp_enqueue_scripts', 'my_custom_blocks_frontend_assets');
101 |

---

## /wp-content/plugins/my-custom-blocks/package.json:

1 | {
2 | "name": "my-custom-blocks",
3 | "version": "1.0.0",
4 | "main": "index.js",
5 | "scripts": {
6 | "build": "wp-scripts build",
7 | "start": "wp-scripts start --webpack-copy-php",
8 | "dev": "wp-scripts start",
9 | "format": "wp-scripts format",
10 | "lint:css": "wp-scripts lint-style",
11 | "lint:js": "wp-scripts lint-js"
12 | },
13 | "keywords": [],
14 | "author": "",
15 | "license": "ISC",
16 | "description": "",
17 | "devDependencies": {
18 | "@wordpress/scripts": "^30.24.0"
19 | },
20 | "dependencies": {
21 | "@wordpress/block-editor": "^15.4.0",
22 | "@wordpress/blocks": "^15.4.0",
23 | "@wordpress/components": "^30.4.0",
24 | "@wordpress/core-data": "^7.31.0",
25 | "@wordpress/data": "^10.31.0",
26 | "@wordpress/editor": "^14.31.0",
27 | "@wordpress/element": "^6.31.0"
28 | }
29 | }
30 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/container-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { InspectorControls, InnerBlocks, useBlockProps, ColorPalette } from "@wordpress/block-editor";
3 | import { PanelBody, RangeControl, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 |
5 | const ALLOWED_BLOCKS = [
6 | "core/paragraph",
7 | "core/heading",
8 | "core/image",
9 | "core/list",
10 | "core/quote",
11 | "core/separator",
12 | "core/spacer",
13 | "core/columns",
14 | "core/group",
15 | "my-custom-blocks/hero-block",
16 | "my-custom-blocks/testimonial-block",
17 | "my-custom-blocks/pricing-table",
18 | "my-custom-blocks/width-container-block",
19 | "my-custom-blocks/link-button-block",
20 | "my-custom-blocks/featured-image-block",
21 | "my-custom-blocks/store-info-list-block",
22 | "my-custom-blocks/services-list-block",
23 | "my-custom-blocks/google-map-block",
24 | ];
25 |
26 | const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];
27 |
28 | export default function Edit({ attributes, setAttributes }) {
29 | const { backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, paddingInline, maxWidth } = attributes;
30 |
31 | // 直接インラインスタイルを設定
32 | const blockStyle = {
33 | width: "100%",
34 | height: "auto",
35 | backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#ffffff",
36 | borderRadius: borderRadius || "20px",
37 | marginTop: marginTop || "50px",
38 | marginBottom: marginBottom || "0px",
39 | marginLeft: "auto",
40 | marginRight: "auto",
41 | paddingTop: paddingTop || "48px",
42 | paddingBottom: paddingBottom || "100px",
43 | paddingLeft: paddingInline || "0px",
44 | paddingRight: paddingInline || "0px",
45 | boxSizing: "border-box",
46 | border: "1px dashed #ccc",
47 | minHeight: "100px",
48 | position: "relative",
49 | display: "flex",
50 | justifyContent: "center",
51 | flexDirection: "column",
52 | };
53 |
54 | const blockProps = useBlockProps({
55 | style: blockStyle,
56 | className: "container-block-wrapper",
57 | });
58 |
59 | return (
60 | <>
61 | <InspectorControls>
62 | <PanelBody title={**("スタイル設定", "my-custom-blocks")}>
63 | <div style={{ marginBottom: "20px" }}>
64 | <label>{**("背景色", "my-custom-blocks")}</label>
65 | <ColorPalette
66 | value={backgroundColor}
67 | onChange={(color) =>
68 | setAttributes({
69 | backgroundColor: color || "#ffffff",
70 | })
71 | }
72 | colors={[
73 | { name: "白", color: "#ffffff" },
74 | { name: "グレー", color: "#F7F7F7" },
75 | { name: "黒", color: "#2C2C2C" },
76 | { name: "グリーン", color: "#0B8B4B" },
77 | ]}
78 | />
79 | </div>
80 |
81 | <UnitControl
82 | label={**("角丸", "my-custom-blocks")}
83 | value={borderRadius}
84 | onChange={(value) => setAttributes({ borderRadius: value })}
85 | units={[
86 | { value: "px", label: "px" },
87 | { value: "%", label: "%" },
88 | ]}
89 | **next40pxDefaultSize
90 | />
91 | </PanelBody>
92 |
93 | <PanelBody title={**("スペーシング設定", "my-custom-blocks")}>
94 | <UnitControl
95 | label={**("上マージン", "my-custom-blocks")}
96 | value={marginTop}
97 | onChange={(value) => setAttributes({ marginTop: value })}
98 | units={[
99 | { value: "px", label: "px" },
100 | { value: "rem", label: "rem" },
101 | ]}
102 | **next40pxDefaultSize
103 | />
104 |
105 | <UnitControl
106 | label={**("下マージン", "my-custom-blocks")}
107 | value={marginBottom}
108 | onChange={(value) => setAttributes({ marginBottom: value })}
109 | units={[
110 | { value: "px", label: "px" },
111 | { value: "rem", label: "rem" },
112 | ]}
113 | **next40pxDefaultSize
114 | />
115 |
116 | <UnitControl
117 | label={**("上パディング", "my-custom-blocks")}
118 | value={paddingTop}
119 | onChange={(value) => setAttributes({ paddingTop: value })}
120 | units={[
121 | { value: "px", label: "px" },
122 | { value: "rem", label: "rem" },
123 | ]}
124 | **next40pxDefaultSize
125 | />
126 |
127 | <UnitControl
128 | label={**("下パディング", "my-custom-blocks")}
129 | value={paddingBottom}
130 | onChange={(value) => setAttributes({ paddingBottom: value })}
131 | units={[
132 | { value: "px", label: "px" },
133 | { value: "rem", label: "rem" },
134 | ]}
135 | **next40pxDefaultSize
136 | />
137 |
138 | <UnitControl
139 | label={**("左右パディング", "my-custom-blocks")}
140 | value={paddingInline}
141 | onChange={(value) => setAttributes({ paddingInline: value })}
142 | units={[
143 | { value: "px", label: "px" },
144 | { value: "rem", label: "rem" },
145 | ]}
146 | \_\_next40pxDefaultSize
147 | />
148 | </PanelBody>
149 | </InspectorControls>
150 |
151 | <div {...blockProps}>
152 | <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
153 | </div>
154 | </>
155 | );
156 | }
157 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/container-block/index.js:

1 | import { registerBlockType } from '@wordpress/blocks';
2 | import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
3 |
4 | import Edit from './edit';
5 | import save from './save';
6 | import './style.scss';
7 |
8 | registerBlockType( 'my-custom-blocks/container-block', {
9 | apiVersion: 3,
10 | title: 'コンテナブロック',
11 | description: '角丸のコンテナ。内部に他のブロックを配置できます。',
12 | category: 'layout',
13 | icon: 'admin-page',
14 | supports: {
15 | align: [ 'wide', 'full' ],
16 | html: false,
17 | },
18 | attributes: {
19 | backgroundColor: {
20 | type: 'string',
21 | default: '#ffffff',
22 | },
23 | borderRadius: {
24 | type: 'string',
25 | default: '20px',
26 | },
27 | marginTop: {
28 | type: 'string',
29 | default: '50px',
30 | },
31 | marginBottom: {
32 | type: 'string',
33 | default: '0px',
34 | },
35 | paddingTop: {
36 | type: 'string',
37 | default: '48px',
38 | },
39 | paddingBottom: {
40 | type: 'string',
41 | default: '100px',
42 | },
43 | paddingInline: {
44 | type: 'string',
45 | default: '0px',
46 | },
47 | },
48 | deprecated: [
49 | {
50 | attributes: {
51 | backgroundColor: {
52 | type: 'string',
53 | default: '#ffffff',
54 | },
55 | marginTop: {
56 | type: 'string',
57 | default: '20px',
58 | },
59 | marginBottom: {
60 | type: 'string',
61 | default: '20px',
62 | },
63 | paddingTop: {
64 | type: 'string',
65 | default: '20px',
66 | },
67 | paddingBottom: {
68 | type: 'string',
69 | default: '20px',
70 | },
71 | paddingInline: {
72 | type: 'string',
73 | default: '20px',
74 | },
75 | },
76 | save( { attributes } ) {
77 | const {
78 | backgroundColor,
79 | marginTop,
80 | marginBottom,
81 | paddingTop,
82 | paddingBottom,
83 | paddingInline,
84 | } = attributes;
85 |
86 | const blockProps = useBlockProps.save( {
87 | className: 'container-block-wrapper',
88 | style: {
89 | '--bg-color': backgroundColor,
90 | '--margin-top': marginTop,
91 | '--margin-bottom': marginBottom,
92 | '--padding-top': paddingTop,
93 | '--padding-bottom': paddingBottom,
94 | '--padding-inline': paddingInline,
95 | },
96 | } );
97 |
98 | return wp.element.createElement(
99 | 'div',
100 | blockProps,
101 | wp.element.createElement( InnerBlocks.Content )
102 | );
103 | },
104 | },
105 | ],
106 | edit: Edit,
107 | save,
108 | } );
109 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/container-block/save.js:

1 | import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
2 |
3 | export default function save({ attributes }) {
4 | const { backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, paddingInline, maxWidth } = attributes;
5 |
6 | const blockProps = useBlockProps.save({
7 | className: "container-block-wrapper",
8 | style: {
9 | width: "100%",
10 | height: "auto",
11 | backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#ffffff",
12 | borderRadius: borderRadius || "20px",
13 | marginTop: marginTop || "50px",
14 | marginBottom: marginBottom || "0px",
15 | marginLeft: "auto",
16 | marginRight: "auto",
17 | paddingTop: paddingTop || "48px",
18 | paddingBottom: paddingBottom || "100px",
19 | paddingLeft: paddingInline || "0px",
20 | paddingRight: paddingInline || "0px",
21 | boxSizing: "border-box",
22 | display: "flex",
23 | justifyContent: "center",
24 | flexDirection: "column",
25 | // フロントエンドでは境界線なし
26 | },
27 | });
28 |
29 | return (
30 | <div {...blockProps}>
31 | <InnerBlocks.Content />
32 | </div>
33 | );
34 | }
35 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/container-block/style.scss:

1 | /\*_
2 | _ コンテナブロックのスタイル
3 | _ フロントエンドとエディタの両方で適用される
4 | _/
5 |
6 | .container-block-wrapper {
7 | width: 100%;
8 | height: auto;
9 | background-color: var(--bg-color, #ffffff);
10 | border-radius: var(--border-radius, 20px);
11 | margin-top: var(--margin-top, 50px);
12 | margin-bottom: var(--margin-bottom, 20px);
13 | padding-top: var(--padding-top, 20px);
14 | padding-bottom: var(--padding-bottom, 20px);
15 | padding-inline: var(--padding-inline, 0px);
16 | max-width: var(--max-width, none);
17 | margin-left: auto;
18 | margin-right: auto;
19 | box-sizing: border-box;
20 |
21 | /_ エディタ内での表示調整 _/
22 | .wp-block-editor & {
23 | border: 1px dashed #ccc;
24 | min-height: 100px;
25 |
26 | &:hover {
27 | border-color: #007cba;
28 | }
29 | }
30 |
31 | /_ 内部ブロックのスタイル調整 _/
32 | .wp-block {
33 | max-width: none;
34 | }
35 |
36 | /_ InnerBlocks のスタイル調整 _/
37 | .block-editor-inner-blocks {
38 | width: 100%;
39 | }
40 |
41 | .block-editor-block-list\_\_layout {
42 | margin: 0;
43 | padding: 0;
44 | }
45 | }
46 |
47 | /_ エディタ専用のスタイル _/
48 | .wp-block-my-custom-blocks-container-block {
49 | .container-block-wrapper {
50 | position: relative;
51 |
52 | &::before {
53 | content: "コンテナブロック";
54 | position: absolute;
55 | top: -20px;
56 | left: 0;
57 | font-size: 12px;
58 | color: #666;
59 | background: #fff;
60 | padding: 2px 8px;
61 | border-radius: 3px;
62 | border: 1px solid #ddd;
63 | z-index: 1;
64 | }
65 | }
66 | }
67 |
68 | /_ フロントエンド専用のスタイル _/
69 | .wp-site-blocks .container-block-wrapper {
70 | /_ フロントエンドでのみ適用される追加スタイル _/
71 | box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
72 | transition: box-shadow 0.3s ease;
73 |
74 | &:hover {
75 | box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
76 | }
77 | }
78 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/featured-image-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
3 | import { PanelBody, SelectControl, Button, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 | import { useSelect } from "@wordpress/data";
5 | import { useEffect } from "@wordpress/element";
6 |
7 | export default function Edit({ attributes, setAttributes }) {
8 | const { imageUrl, imageAlt, imageId, marginTop, marginBottom, imageSize } = attributes;
9 |
10 | // アイキャッチ画像を取得
11 | const { featuredImage, featuredImageId } = useSelect((select) => {
12 | const { getCurrentPost } = select("core/editor");
13 | const { getMedia } = select("core");
14 | const post = getCurrentPost();
15 |
16 | const mediaId = post?.featured_media;
17 | const media = mediaId ? getMedia(mediaId) : null;
18 |
19 | return {
20 | featuredImage: media,
21 | featuredImageId: mediaId,
22 | };
23 | }, []);
24 |
25 | // アイキャッチ画像が変更されたら属性を更新
26 | useEffect(() => {
27 | if (featuredImage && featuredImageId !== imageId) {
28 | let selectedImageUrl = "";
29 |
30 | // 選択されたサイズの画像 URL を取得
31 | if (featuredImage.media_details?.sizes) {
32 | const sizes = featuredImage.media_details.sizes;
33 |
34 | if (imageSize === "full") {
35 | selectedImageUrl = featuredImage.source_url;
36 | } else if (sizes[imageSize]) {
37 | selectedImageUrl = sizes[imageSize].source_url;
38 | } else {
39 | selectedImageUrl = featuredImage.source_url;
40 | }
41 | } else {
42 | selectedImageUrl = featuredImage.source_url;
43 | }
44 |
45 | setAttributes({
46 | imageUrl: selectedImageUrl,
47 | imageAlt: featuredImage.alt_text || "",
48 | imageId: featuredImageId,
49 | });
50 | }
51 | }, [featuredImage, featuredImageId, imageSize, imageId, setAttributes]);
52 |
53 | // 画像サイズが変更されたら画像 URL を更新
54 | useEffect(() => {
55 | if (featuredImage && imageId === featuredImageId) {
56 | let selectedImageUrl = "";
57 |
58 | if (featuredImage.media_details?.sizes) {
59 | const sizes = featuredImage.media_details.sizes;
60 |
61 | if (imageSize === "full") {
62 | selectedImageUrl = featuredImage.source_url;
63 | } else if (sizes[imageSize]) {
64 | selectedImageUrl = sizes[imageSize].source_url;
65 | } else {
66 | selectedImageUrl = featuredImage.source_url;
67 | }
68 | } else {
69 | selectedImageUrl = featuredImage.source_url;
70 | }
71 |
72 | if (selectedImageUrl !== imageUrl) {
73 | setAttributes({ imageUrl: selectedImageUrl });
74 | }
75 | }
76 | }, [imageSize, featuredImage, featuredImageId, imageId, imageUrl, setAttributes]);
77 |
78 | // アイキャッチを手動で再読み込み
79 | const handleReload = () => {
80 | // console.log("handleReload");
81 | // console.log(featuredImage);
82 | // console.log(featuredImageId);
83 | // console.log(imageSize);
84 | // console.log(imageUrl);
85 | // console.log(setAttributes);
86 | if (featuredImage) {
87 | let selectedImageUrl = "";
88 |
89 | if (featuredImage.media_details?.sizes) {
90 | const sizes = featuredImage.media_details.sizes;
91 |
92 | if (imageSize === "full") {
93 | selectedImageUrl = featuredImage.source_url;
94 | } else if (sizes[imageSize]) {
95 | selectedImageUrl = sizes[imageSize].source_url;
96 | } else {
97 | selectedImageUrl = featuredImage.source_url;
98 | }
99 | } else {
100 | selectedImageUrl = featuredImage.source_url;
101 | }
102 |
103 | setAttributes({
104 | imageUrl: selectedImageUrl,
105 | imageAlt: featuredImage.alt_text || "",
106 | imageId: featuredImageId,
107 | });
108 | }
109 | };
110 |
111 | const containerStyle = {
112 | width: "100%",
113 | marginTop: marginTop || "0px",
114 | marginBottom: marginBottom || "0px",
115 | marginLeft: "auto",
116 | marginRight: "auto",
117 | overflow: "hidden",
118 | };
119 |
120 | const imageStyle = {
121 | width: "100%",
122 | height: "auto",
123 | objectFit: "cover",
124 | display: "block",
125 | };
126 |
127 | const placeholderStyle = {
128 | width: "100%",
129 | minHeight: "300px",
130 | backgroundColor: "#f0f0f0",
131 | display: "flex",
132 | alignItems: "center",
133 | justifyContent: "center",
134 | flexDirection: "column",
135 | color: "#666",
136 | fontSize: "16px",
137 | border: "2px dashed #ccc",
138 | borderRadius: "20px",
139 | padding: "40px 20px",
140 | };
141 |
142 | const blockProps = useBlockProps({
143 | className: "featured-image-block-wrapper",
144 | });
145 |
146 | return (
147 | <>
148 | <InspectorControls>
149 | <PanelBody title={**("画像設定", "my-custom-blocks")}>
150 | <SelectControl
151 | label={**("画像サイズ", "my-custom-blocks")}
152 | value={imageSize}
153 | options={[
154 | { label: __("サムネイル", "my-custom-blocks"), value: "thumbnail" },
155 | { label: __("中", "my-custom-blocks"), value: "medium" },
156 | { label: __("大", "my-custom-blocks"), value: "large" },
157 | { label: __("フルサイズ", "my-custom-blocks"), value: "full" },
158 | ]}
159 | onChange={(value) => setAttributes({ imageSize: value })}
160 | **next40pxDefaultSize
161 | **nextHasNoMarginBottom
162 | />
163 |
164 | <div style={{ marginTop: "20px" }}>
165 | <Button variant="secondary" onClick={handleReload}>
166 | {**("アイキャッチを再読み込み", "my-custom-blocks")}
167 | </Button>
168 | </div>
169 | </PanelBody>
170 |
171 | <PanelBody title={**("スペーシング設定", "my-custom-blocks")}>
172 | <UnitControl
173 | label={**("上マージン", "my-custom-blocks")}
174 | value={marginTop}
175 | onChange={(value) => setAttributes({ marginTop: value })}
176 | units={[
177 | { value: "px", label: "px" },
178 | { value: "rem", label: "rem" },
179 | ]}
180 | **next40pxDefaultSize
181 | />
182 |
183 | <UnitControl
184 | label={**("下マージン", "my-custom-blocks")}
185 | value={marginBottom}
186 | onChange={(value) => setAttributes({ marginBottom: value })}
187 | units={[
188 | { value: "px", label: "px" },
189 | { value: "rem", label: "rem" },
190 | ]}
191 | **next40pxDefaultSize
192 | />
193 | </PanelBody>
194 | </InspectorControls>
195 |
196 | <div {...blockProps}>
197 | {imageUrl ? (
198 | <div style={containerStyle}>
199 | <img src={imageUrl} alt={imageAlt || **("アイキャッチ画像", "my-custom-blocks")} style={imageStyle} />
200 | </div>
201 | ) : (
202 | <div style={placeholderStyle}>
203 | <div style={{ textAlign: "center" }}>
204 | <p style={{ margin: "0 0 10px 0", fontWeight: "600", fontSize: "18px" }}>{**("アイキャッチ画像未設定", "my-custom-blocks")}</p>
205 | <p style={{ margin: "0 0 20px 0", fontSize: "14px", lineHeight: "1.6" }}>{**("右サイドバーの「投稿」→「アイキャッチ画像」から画像を設定してください", "my-custom-blocks")}</p>
206 | {featuredImageId && (
207 | <Button variant="primary" onClick={handleReload}>
208 | {**("画像を読み込む", "my-custom-blocks")}
209 | </Button>
210 | )}
211 | </div>
212 | </div>
213 | )}
214 | </div>
215 | </>
216 | );
217 | }
218 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/featured-image-block/index.js:

1 | import { registerBlockType } from "@wordpress/blocks";
2 | import Edit from "./edit";
3 | import save from "./save";
4 | import "./style.scss";
5 |
6 | registerBlockType("my-custom-blocks/featured-image-block", {
7 | apiVersion: 3,
8 | title: "アイキャッチ画像ブロック",
9 | description: "投稿/固定ページのアイキャッチ画像を表示するブロックです。",
10 | category: "media",
11 | icon: "format-image",
12 | supports: {
13 | align: ["wide", "full"],
14 | html: false,
15 | },
16 | attributes: {
17 | imageUrl: {
18 | type: "string",
19 | default: "",
20 | },
21 | imageAlt: {
22 | type: "string",
23 | default: "",
24 | },
25 | imageId: {
26 | type: "number",
27 | default: 0,
28 | },
29 | marginTop: {
30 | type: "string",
31 | default: "0px",
32 | },
33 | marginBottom: {
34 | type: "string",
35 | default: "0px",
36 | },
37 | imageSize: {
38 | type: "string",
39 | default: "full",
40 | },
41 | },
42 | edit: Edit,
43 | save,
44 | });
45 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/featured-image-block/save.js:

1 | import { useBlockProps } from "@wordpress/block-editor";
2 |
3 | export default function save({ attributes }) {
4 | const { imageUrl, imageAlt, marginTop, marginBottom } = attributes;
5 |
6 | // 画像がない場合は何も保存しない
7 | if (!imageUrl) {
8 | return null;
9 | }
10 |
11 | const containerStyle = {
12 | maxWidth: "880px",
13 | width: "100%",
14 | marginTop: marginTop || "0px",
15 | marginBottom: marginBottom || "0px",
16 | marginLeft: "auto",
17 | marginRight: "auto",
18 | overflow: "hidden",
19 | };
20 |
21 | const imageStyle = {
22 | width: "100%",
23 | height: "auto",
24 | objectFit: "cover",
25 | display: "block",
26 | };
27 |
28 | const blockProps = useBlockProps.save({
29 | className: "featured-image-block-wrapper",
30 | style: containerStyle,
31 | });
32 |
33 | return (
34 | <div {...blockProps}>
35 | <img src={imageUrl} alt={imageAlt || "アイキャッチ画像"} style={imageStyle} loading="lazy" />
36 | </div>
37 | );
38 | }
39 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/featured-image-block/style.scss:

1 | /\*_
2 | _ アイキャッチ画像ブロックのスタイル
3 | \*/
4 |
5 | .featured-image-block-wrapper {
6 | width: 100%;
7 |
8 | img {
9 | max-width: 100%;
10 | height: auto;
11 | display: block;
12 | }
13 |
14 | // エディタ内での表示調整
15 | .wp-block-editor & {
16 | border: 1px solid #e0e0e0;
17 |
18 | &:hover {
19 | border-color: #007cba;
20 | }
21 | }
22 | }
23 |
24 | // エディタ専用のスタイル
25 | .wp-block-my-custom-blocks-featured-image-block {
26 | position: relative;
27 |
28 | // &::before {
29 | // content: "アイキャッチ画像ブロック";
30 | // position: absolute;
31 | // top: -20px;
32 | // left: 0;
33 | // font-size: 12px;
34 | // color: #666;
35 | // background: #fff;
36 | // padding: 2px 8px;
37 | // border-radius: 3px;
38 | // border: 1px solid #ddd;
39 | // z-index: 1;
40 | // }
41 | }
42 |
43 | // フロントエンド専用のスタイル
44 | .wp-site-blocks .featured-image-block-wrapper {
45 | img {
46 | transition: transform 0.3s ease;
47 | }
48 |
49 | &:hover img {
50 | transform: scale(1.02);
51 | }
52 | }
53 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/google-map-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
3 | import { PanelBody, TextareaControl, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 |
5 | export default function Edit({ attributes, setAttributes }) {
6 | const { mapUrl, marginTop } = attributes;
7 |
8 | const containerStyle = {
9 | maxWidth: "750px",
10 | width: "100%",
11 | height: "auto",
12 | aspectRatio: "750 / 328", // aspect-[750/328]
13 | marginLeft: "auto",
14 | marginRight: "auto",
15 | marginTop: marginTop || "32px",
16 | borderRadius: "20px",
17 | overflow: "hidden",
18 | backgroundColor: "#f0f0f0",
19 | };
20 |
21 | const iframeStyle = {
22 | width: "100%",
23 | height: "100%",
24 | border: "none",
25 | };
26 |
27 | const placeholderStyle = {
28 | padding: "40px 20px",
29 | textAlign: "center",
30 | color: "#666",
31 | };
32 |
33 | const blockProps = useBlockProps({
34 | className: "google-map-block-wrapper",
35 | });
36 |
37 | // Google Map の URL が有効かチェック
38 | const isValidMapUrl = mapUrl && (mapUrl.includes("google.com/maps") || mapUrl.includes("<iframe"));
39 |
40 | // iframe の src を抽出
41 | const extractSrc = (url) => {
42 | if (url.includes("<iframe")) {
43 | const match = url.match(/src="([^"]+)"/);
44 | return match ? match[1] : "";
45 | }
46 | return url;
47 | };
48 |
49 | const mapSrc = extractSrc(mapUrl);
50 |
51 | return (
52 | <>
53 | <InspectorControls>
54 | <PanelBody title={**("Google Map 設定", "my-custom-blocks")} initialOpen={true}>
55 | <TextareaControl
56 | label={**("Google Map 埋め込みコードまたは URL", "my-custom-blocks")}
57 | value={mapUrl}
58 | onChange={(value) => setAttributes({ mapUrl: value })}
59 | placeholder="Google Map の「共有」→「地図を埋め込む」からコードをコピーして貼り付けてください"
60 | rows={6}
61 | help={**("iframe タグ全体、または src の URL のみを貼り付けてください", "my-custom-blocks")}
62 | **nextHasNoMarginBottom
63 | />
64 | </PanelBody>
65 | <PanelBody title={**("レイアウト設定", "my-custom-blocks")}>
66 | <UnitControl
67 | label={**("上マージン", "my-custom-blocks")}
68 | value={marginTop}
69 | onChange={(value) => setAttributes({ marginTop: value })}
70 | units={[
71 | { value: "px", label: "px" },
72 | { value: "rem", label: "rem" },
73 | ]}
74 | **next40pxDefaultSize
75 | />
76 | </PanelBody>
77 | </InspectorControls>
78 |
79 | <div {...blockProps}>
80 | <div style={containerStyle}>
81 | {isValidMapUrl && mapSrc ? (
82 | <iframe src={mapSrc} style={iframeStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" />
83 | ) : (
84 | <div style={placeholderStyle}>
85 | <div>
86 | <p style={{ margin: "0 0 10px 0", fontWeight: "600", fontSize: "16px" }}>{**("Google Map 未設定", "my-custom-blocks")}</p>
87 | <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6", color: "#999" }}>{\_\_("右サイドバーから Google Map の埋め込みコードを設定してください", "my-custom-blocks")}</p>
88 | </div>
89 | </div>
90 | )}
91 | </div>
92 | </div>
93 | </>
94 | );
95 | }
96 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/google-map-block/index.js:

1 | import { registerBlockType } from "@wordpress/blocks";
2 | import Edit from "./edit";
3 | import save from "./save";
4 | import "./style.scss";
5 |
6 | registerBlockType("my-custom-blocks/google-map-block", {
7 | apiVersion: 3,
8 | title: "Google Map ブロック",
9 | description: "Google Map を埋め込むブロックです。",
10 | category: "embed",
11 | icon: "location-alt",
12 | supports: {
13 | align: ["wide", "full"],
14 | html: false,
15 | },
16 | attributes: {
17 | mapUrl: {
18 | type: "string",
19 | default: "",
20 | },
21 | marginTop: {
22 | type: "string",
23 | default: "32px", // mt-8
24 | },
25 | },
26 | edit: Edit,
27 | save,
28 | });
29 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/google-map-block/save.js:

1 | import { useBlockProps } from "@wordpress/block-editor";
2 |
3 | export default function save({ attributes }) {
4 | const { mapUrl, marginTop } = attributes;
5 |
6 | // Google Map の URL が設定されていない場合は何も表示しない
7 | if (!mapUrl) {
8 | return null;
9 | }
10 |
11 | // iframe の src を抽出
12 | const extractSrc = (url) => {
13 | if (url.includes("<iframe")) {
14 | const match = url.match(/src="([^"]+)"/);
15 | return match ? match[1] : "";
16 | }
17 | return url;
18 | };
19 |
20 | const mapSrc = extractSrc(mapUrl);
21 |
22 | if (!mapSrc) {
23 | return null;
24 | }
25 |
26 | const blockProps = useBlockProps.save({
27 | className: "google-map-block-wrapper",
28 | });
29 |
30 | return (
31 | <div {...blockProps}>
32 | <div
33 | className="google-map-container"
34 | style={{
35 |           maxWidth: "750px",
36 |           marginTop: marginTop || "32px",
37 |           borderRadius: "20px",
38 |         }}
39 | >
40 | <iframe src={mapSrc} className="google-map-iframe" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" />
41 | </div>
42 | </div>
43 | );
44 | }
45 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/google-map-block/style.scss:

1 | /\*_
2 | _ Google Map ブロックのスタイル
3 | _/
4 |
5 | .google-map-block-wrapper {
6 | width: 100%;
7 |
8 | .google-map-container {
9 | max-width: 750px; // 187.5 _ 4 = 750px
10 | width: 100%;
11 | height: auto;
12 | aspect-ratio: 750 / 328; // aspect-[750/328]
13 | margin-left: auto;
14 | margin-right: auto;
15 | margin-top: 32px; // mt-8 (8 _ 4 = 32px)
16 | border-radius: 20px;
17 | overflow: hidden;
18 |
19 | @media (min-width: 768px) {
20 | margin-top: 42px; // md:mt-10.5 (10.5 _ 4 = 42px)
21 | }
22 | }
23 |
24 | .google-map-iframe {
25 | width: 100%;
26 | height: 100%;
27 | border: none;
28 | display: block;
29 | }
30 |
31 | // エディタ内での表示調整
32 | .wp-block-editor & {
33 | .google-map-container {
34 | border: 1px solid #e0e0e0;
35 | }
36 |
37 | &:hover .google-map-container {
38 | border-color: #007cba;
39 | }
40 | }
41 | }
42 |
43 | // エディタ専用のスタイル
44 | .wp-block-my-custom-blocks-google-map-block {
45 | position: relative;
46 |
47 | // &::before {
48 | // content: "Google Map ブロック";
49 | // position: absolute;
50 | // top: -20px;
51 | // left: 0;
52 | // font-size: 12px;
53 | // color: #666;
54 | // background: #fff;
55 | // padding: 2px 8px;
56 | // border-radius: 3px;
57 | // border: 1px solid #ddd;
58 | // z-index: 1;
59 | // }
60 | }
61 |
62 | // フロントエンド専用のスタイル
63 | .wp-site-blocks .google-map-block-wrapper {
64 | .google-map-container {
65 | box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
66 | transition: box-shadow 0.3s ease;
67 |
68 | &:hover {
69 | box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
70 | }
71 | }
72 | }
73 |
74 | // レスポンシブ対応
75 | @media (max-width: 768px) {
76 | .google-map-block-wrapper {
77 | .google-map-container {
78 | border-radius: 12px; // モバイルでは少し小さく
79 | }
80 | }
81 | }
82 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/index.js:

1 | /\*_
2 | _ ブロック登録
3 | _ 新しいブロックを作成したらここに import を追加
4 | _/
5 |
6 | // 追加されたブロック
7 | import "./container-block";
8 | import "./page-title-block";
9 | import "./width-container-block";
10 | import "./link-button-block";
11 | import "./section-title-block";
12 | import "./featured-image-block";
13 | import "./store-info-list-block";
14 | import "./services-list-block";
15 | import "./google-map-block";
16 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/link-button-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { InspectorControls, useBlockProps, ColorPalette } from "@wordpress/block-editor";
3 | import { PanelBody, TextControl, ToggleControl, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 |
5 | export default function Edit({ attributes, setAttributes }) {
6 | const { buttonText, buttonUrl, backgroundColor, textColor, borderColor, hoverTextColor, hoverBackgroundColor, marginTop, marginBottom, openInNewTab, padding } = attributes;
7 |
8 | // エディタ用のスタイル
9 | const blockStyle = {
10 | maxWidth: padding ? "416px" : "376px",
11 | width: "100%",
12 | height: "66px",
13 | marginTop: marginTop || "48px",
14 | marginBottom: marginBottom || "0px",
15 | marginLeft: "auto",
16 | marginRight: "auto",
17 | boxSizing: "border-box",
18 | ...(padding && {
19 | paddingLeft: "20px",
20 | paddingRight: "20px",
21 | }),
22 | };
23 |
24 | const buttonStyle = {
25 | width: "100%",
26 | height: "100%",
27 | paddingLeft: "16px", // pl-4
28 | paddingRight: "16px", // pr-4
29 | display: "flex",
30 | alignItems: "center",
31 | justifyContent: "space-between",
32 | gap: "10px", // gap-2.5
33 | backgroundColor: backgroundColor || "#0B8B4B",
34 | color: textColor || "#ffffff",
35 | border: `1px solid ${borderColor || "#0B8B4B"}`,
36 | textDecoration: "none",
37 | transition: "all 0.3s ease",
38 | cursor: "pointer",
39 | boxSizing: "border-box",
40 | };
41 |
42 | const textStyle = {
43 | fontSize: "16px", // text-base
44 | fontWeight: "600", // font-semibold
45 | lineHeight: "1",
46 | letterSpacing: "0.2em", // tracking-[0.2em]
47 | margin: 0,
48 | };
49 |
50 | const blockProps = useBlockProps({
51 | style: blockStyle,
52 | className: "link-button-block-wrapper",
53 | });
54 |
55 | return (
56 | <>
57 | <InspectorControls>
58 | <PanelBody title={**("ボタン設定", "my-custom-blocks")}>
59 | <TextControl label={**("ボタンテキスト", "my-custom-blocks")} value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} **next40pxDefaultSize **nextHasNoMarginBottom />
60 |
61 | <TextControl label={**("リンク URL", "my-custom-blocks")} value={buttonUrl} onChange={(value) => setAttributes({ buttonUrl: value })} help={**("リンク先の URL を入力してください", "my-custom-blocks")} **next40pxDefaultSize **nextHasNoMarginBottom />
62 |
63 | <ToggleControl label={**("別タブで開く", "my-custom-blocks")} checked={openInNewTab} onChange={(value) => setAttributes({ openInNewTab: value })} help={**("リンクを新しいタブで開く場合はオンにしてください", "my-custom-blocks")} **nextHasNoMarginBottom />
64 | </PanelBody>
65 |
66 | <PanelBody title={**("カラー設定", "my-custom-blocks")}>
67 | <div style={{ marginBottom: "20px" }}>
68 | <label>{**("背景色", "my-custom-blocks")}</label>
69 | <ColorPalette
70 | value={backgroundColor}
71 | onChange={(color) =>
72 | setAttributes({
73 | backgroundColor: color || "#0B8B4B",
74 | })
75 | }
76 | colors={[
77 | { name: "白", color: "#ffffff" },
78 | { name: "グレー", color: "#F7F7F7" },
79 | { name: "黒", color: "#2C2C2C" },
80 | { name: "グリーン", color: "#0B8B4B" },
81 | ]}
82 | />
83 | </div>
84 |
85 | <div style={{ marginBottom: "20px" }}>
86 | <label>{**("テキスト色", "my-custom-blocks")}</label>
87 | <ColorPalette
88 | value={textColor}
89 | onChange={(color) =>
90 | setAttributes({
91 | textColor: color || "#ffffff",
92 | })
93 | }
94 | colors={[
95 | { name: "白", color: "#ffffff" },
96 | { name: "グレー", color: "#F7F7F7" },
97 | { name: "黒", color: "#2C2C2C" },
98 | { name: "グリーン", color: "#0B8B4B" },
99 | ]}
100 | />
101 | </div>
102 |
103 | <div style={{ marginBottom: "20px" }}>
104 | <label>{**("ボーダー色", "my-custom-blocks")}</label>
105 | <ColorPalette
106 | value={borderColor}
107 | onChange={(color) =>
108 | setAttributes({
109 | borderColor: color || "#0B8B4B",
110 | })
111 | }
112 | colors={[
113 | { name: "白", color: "#ffffff" },
114 | { name: "グレー", color: "#F7F7F7" },
115 | { name: "黒", color: "#2C2C2C" },
116 | { name: "グリーン", color: "#0B8B4B" },
117 | ]}
118 | />
119 | </div>
120 |
121 | <div style={{ marginBottom: "20px" }}>
122 | <label>{**("ホバー時テキスト色", "my-custom-blocks")}</label>
123 | <ColorPalette
124 | value={hoverTextColor}
125 | onChange={(color) =>
126 | setAttributes({
127 | hoverTextColor: color || "#0B8B4B",
128 | })
129 | }
130 | colors={[
131 | { name: "白", color: "#ffffff" },
132 | { name: "グレー", color: "#F7F7F7" },
133 | { name: "黒", color: "#2C2C2C" },
134 | { name: "グリーン", color: "#0B8B4B" },
135 | ]}
136 | />
137 | </div>
138 |
139 | <div style={{ marginBottom: "20px" }}>
140 | <label>{**("ホバー時背景色", "my-custom-blocks")}</label>
141 | <ColorPalette
142 | value={hoverBackgroundColor}
143 | onChange={(color) =>
144 | setAttributes({
145 | hoverBackgroundColor: color || "#ffffff",
146 | })
147 | }
148 | colors={[
149 | { name: "白", color: "#ffffff" },
150 | { name: "グレー", color: "#F7F7F7" },
151 | { name: "黒", color: "#2C2C2C" },
152 | { name: "グリーン", color: "#0B8B4B" },
153 | { name: "透明", color: "transparent" },
154 | ]}
155 | />
156 | </div>
157 | </PanelBody>
158 |
159 | <PanelBody title={**("スペーシング設定", "my-custom-blocks")}>
160 | <UnitControl
161 | label={**("上マージン", "my-custom-blocks")}
162 | value={marginTop}
163 | onChange={(value) => setAttributes({ marginTop: value })}
164 | units={[
165 | { value: "px", label: "px" },
166 | { value: "rem", label: "rem" },
167 | ]}
168 | **next40pxDefaultSize
169 | />
170 | <UnitControl
171 | label={**("下マージン", "my-custom-blocks")}
172 | value={marginBottom}
173 | onChange={(value) => setAttributes({ marginBottom: value })}
174 | units={[
175 | { value: "px", label: "px" },
176 | { value: "rem", label: "rem" },
177 | ]}
178 | **next40pxDefaultSize
179 | />
180 | <ToggleControl label={**("余白", "my-custom-blocks")} checked={padding} onChange={(value) => setAttributes({ padding: value })} help={**("左右に余白を追加します", "my-custom-blocks")} \_\_nextHasNoMarginBottom />
181 | </PanelBody>
182 | </InspectorControls>
183 |
184 | <div {...blockProps}>
185 | <div style={buttonStyle}>
186 | <p style={textStyle}>{buttonText || "リンクテキスト"}</p>
187 | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: "16px", height: "18px" }}>
188 | <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" fill="currentColor" />
189 | </svg>
190 | </div>
191 | </div>
192 | </>
193 | );
194 | }
195 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/link-button-block/index.js:

1 | import { registerBlockType } from "@wordpress/blocks";
2 |
3 | import Edit from "./edit";
4 | import save from "./save";
5 | import "./style.scss";
6 |
7 | registerBlockType("my-custom-blocks/link-button-block", {
8 | apiVersion: 3,
9 | title: "リンクボタンブロック",
10 | description: "メーカーサイトへのリンクボタンを表示するブロックです。",
11 | category: "common",
12 | icon: "button",
13 | supports: {
14 | align: ["wide", "full"],
15 | html: false,
16 | },
17 | attributes: {
18 | buttonText: {
19 | type: "string",
20 | default: "リンクテキスト",
21 | },
22 | buttonUrl: {
23 | type: "string",
24 | default: "/",
25 | },
26 | backgroundColor: {
27 | type: "string",
28 | default: "#0B8B4B", // green-500
29 | },
30 | textColor: {
31 | type: "string",
32 | default: "#ffffff",
33 | },
34 | borderColor: {
35 | type: "string",
36 | default: "#0B8B4B", // green-500
37 | },
38 | hoverTextColor: {
39 | type: "string",
40 | default: "#0B8B4B", // green-500
41 | },
42 | hoverBackgroundColor: {
43 | type: "string",
44 | default: "#ffffff",
45 | },
46 | marginTop: {
47 | type: "string",
48 | default: "48px", // mt-12
49 | },
50 | marginBottom: {
51 | type: "string",
52 | default: "0px", // mb-0
53 | },
54 | openInNewTab: {
55 | type: "boolean",
56 | default: true,
57 | },
58 | },
59 | edit: Edit,
60 | save,
61 | });
62 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/link-button-block/save.js:

1 | import { useBlockProps } from "@wordpress/block-editor";
2 |
3 | export default function save({ attributes }) {
4 | const { buttonText, buttonUrl, backgroundColor, textColor, borderColor, hoverTextColor, hoverBackgroundColor, marginTop, marginBottom, openInNewTab, padding } = attributes;
5 |
6 | // コンテナのスタイル
7 | const containerStyle = {
8 | maxWidth: padding ? "416px" : "376px", // max-w-104 (104 _ 0.25rem = 26rem = 416px)
9 | width: "100%",
10 | height: "66px", // h-16.5 (16.5 _ 0.25rem = 4.125rem = 66px)
11 | marginTop: marginTop || "48px",
12 | marginBottom: marginBottom || "0px",
13 | marginLeft: "auto",
14 | marginRight: "auto",
15 | ...(padding && {
16 | paddingLeft: "20px",
17 | paddingRight: "20px",
18 | }),
19 | };
20 |
21 | // ボタンのスタイル
22 | const buttonStyle = {
23 | width: "100%",
24 | height: "100%",
25 | paddingLeft: "16px", // pl-4 (4 _ 0.25rem = 1rem = 16px)
26 | paddingRight: "16px", // pr-4 (4 _ 0.25rem = 1rem = 16px)
27 | display: "flex",
28 | alignItems: "center",
29 | justifyContent: "space-between",
30 | gap: "10px", // gap-2.5 (2.5 _ 0.25rem = 0.625rem = 10px)
31 | backgroundColor: backgroundColor || "#0B8B4B",
32 | color: textColor || "#ffffff",
33 | border: `1px solid ${borderColor || "#0B8B4B"}`,
34 | textDecoration: "none",
35 | transition: "all 0.3s ease",
36 | boxSizing: "border-box",
37 | };
38 |
39 | // テキストのスタイル
40 | const textStyle = {
41 | fontSize: "16px", // text-base
42 | fontWeight: "600", // font-semibold
43 | lineHeight: "1", // leading-none
44 | letterSpacing: "0.2em", // tracking-[0.2em]
45 | margin: "0", // m-0
46 | };
47 |
48 | // SVG のスタイル
49 | const svgStyle = {
50 | width: "16px", // w-4 (4 _ 0.25rem = 1rem = 16px)
51 | height: "18px", // h-4.5 (4.5 _ 0.25rem = 1.125rem = 18px)
52 | fill: "currentColor",
53 | };
54 |
55 | // レスポンシブ対応のためのメディアクエリスタイル
56 | const responsiveStyle = `
57 | @media (min-width: 640px) {
58 | .text-responsive {
59 | font-size: 18px !important; /_ sm:text-lg \*/
60 | line-height: 28px !important;
61 | }
62 | }
63 | .link-button-hover:hover {
64 | color: ${hoverTextColor || "#0B8B4B"} !important;
65 | background-color: ${hoverBackgroundColor || "#ffffff"} !important;
66 | }
67 | `;
68 |
69 | const blockProps = useBlockProps.save({
70 | className: "link-button-block-wrapper",
71 | });
72 |
73 | return (
74 | <div {...blockProps}>
75 | <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
76 | <div style={containerStyle}>
77 | <a
78 | className="link-button-responsive link-button-hover"
79 | href={buttonUrl || "/"}
80 | style={buttonStyle}
81 | {...(openInNewTab && {
82 | target: "\_blank",
83 | rel: "noopener noreferrer",
84 | })}
85 | >
86 | <p className="text-responsive" style={textStyle}>
87 | {buttonText || "リンクテキスト"}
88 | </p>
89 | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={svgStyle}>
90 | <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
91 | </svg>
92 | </a>
93 | </div>
94 | </div>
95 | );
96 | }
97 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/link-button-block/style.scss:

1 | /\*_
2 | _ リンクボタンブロックのスタイル
3 | _ フロントエンドとエディタの両方で適用される
4 | _/
5 |
6 | .link-button-block-wrapper {
7 | /_ CSS 変数の定義 _/
8 | --bg-color: #22c55e;
9 | --text-color: #ffffff;
10 | --border-color: #22c55e;
11 | --hover-text-color: #22c55e;
12 | --hover-bg-color: #ffffff;
13 | --margin-top: 48px;
14 | --margin-top-md: 93px;
15 |
16 | /_ リンクボタンのフォーカススタイル _/
17 | .link-button-hover:focus {
18 | outline: 2px solid var(--border-color, #22c55e);
19 | outline-offset: 2px;
20 | }
21 |
22 | /_ エディタ内での表示調整 _/
23 | .wp-block-editor & {
24 | border: 1px dashed #ccc;
25 | padding: 10px;
26 | border-radius: 4px;
27 |
28 | &:hover {
29 | border-color: #007cba;
30 | }
31 |
32 | .link-button {
33 | cursor: default;
34 | pointer-events: none;
35 | }
36 | }
37 | }
38 |
39 | /_ エディタ専用のスタイル _/
40 | .wp-block-my-custom-blocks-link-button-block {
41 | .link-button-block-wrapper {
42 | position: relative;
43 |
44 | // &::before {
45 | // content: "リンクボタンブロック";
46 | // position: absolute;
47 | // top: -20px;
48 | // left: 0;
49 | // font-size: 12px;
50 | // color: #666;
51 | // background: #fff;
52 | // padding: 2px 8px;
53 | // border-radius: 3px;
54 | // border: 1px solid #ddd;
55 | // z-index: 1;
56 | // }
57 | }
58 | }
59 |
60 | /_ フロントエンド専用のスタイル _/
61 | .wp-site-blocks .link-button-block-wrapper {
62 | /_ フロントエンドでのみ適用される追加スタイル _/
63 | .link-button {
64 | &:hover {
65 | transform: translateY(-1px);
66 | box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
67 | }
68 |
69 | &:active {
70 | transform: translateY(0);
71 | }
72 | }
73 | }
74 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/page-title-block/edit.js:

1 | /\*_
2 | _ Edit component for Page Title Block
3 | \*/
4 | import { ** } from "@wordpress/i18n";
5 | import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
6 | import { PanelBody, TextControl } from "@wordpress/components";
7 | import { useSelect } from "@wordpress/data";
8 | import { useEffect } from "@wordpress/element";
9 |
10 | export default function Edit({ attributes, setAttributes }) {
11 | const { title, subtitle } = attributes;
12 |
13 | // 現在の投稿/固定ページのタイトルを取得
14 | const postTitle = useSelect((select) => {
15 | const { getCurrentPost } = select("core/editor");
16 | const post = getCurrentPost();
17 | return post?.title || "";
18 | }, []);
19 |
20 | // 初回読み込み時に投稿タイトルをセット
21 | useEffect(() => {
22 | if (!title && postTitle) {
23 | setAttributes({ title: postTitle });
24 | }
25 | }, [postTitle, title, setAttributes]);
26 |
27 | // コンテナのスタイル
28 | const containerStyle = {
29 | width: "100%",
30 | border: "1px dashed #ccc",
31 | borderRadius: "4px",
32 | };
33 |
34 | // メインタイトルのスタイル（エディタ用）
35 | const mainTitleStyle = {
36 | color: "#2c2c2c",
37 | fontFamily: "inherit", // 既存のフォントファミリーを継承
38 | fontWeight: "700",
39 | lineHeight: "1",
40 | letterSpacing: "0.05em",
41 | textAlign: "center",
42 | margin: "0",
43 | };
44 |
45 | // サブタイトルのスタイル（エディタ用）
46 | const subTitleStyle = {
47 | color: "#0b8b4b",
48 | fontFamily: '"Poppins", sans-serif',
49 | fontWeight: "500",
50 | lineHeight: "1.5",
51 | letterSpacing: "0.05em",
52 | textAlign: "center",
53 | marginTop: "10px",
54 | marginBottom: "0",
55 | };
56 |
57 | // レスポンシブ対応のためのメディアクエリスタイル（エディタ用）
58 | const responsiveStyle = ` 59 |     @media (min-width: 769px) {
 60 |       .page-title-main-responsive {
 61 |         font-size: 40px !important;
 62 |       }
 63 |     }
 64 |     @media (max-width: 768px) {
 65 |       .page-title-main-responsive {
 66 |         font-size: 30px !important;
 67 |       }
 68 |     }
 69 |     @media (max-width: 480px) {
 70 |       .page-title-main-responsive {
 71 |         font-size: 24px !important;
 72 |         letter-spacing: 0 !important;
 73 |       }
 74 |       .page-title-sub-responsive {
 75 |         letter-spacing: 0 !important;
 76 |       }
 77 |     }
 78 |     .page-title-sub-responsive {
 79 |       font-size: 16px !important;
 80 |     }
 81 |  `;
82 |
83 | const blockProps = useBlockProps({
84 | className: "page-title-block",
85 | });
86 |
87 | return (
88 | <>
89 | <InspectorControls>
90 | <PanelBody title={**("設定", "my-custom-blocks")}>
91 | <TextControl label={**("タイトル", "my-custom-blocks")} value={title} onChange={(value) => setAttributes({ title: value })} help={**("空の場合は投稿/固定ページのタイトルが使用されます", "my-custom-blocks")} **next40pxDefaultSize **nextHasNoMarginBottom />
92 | <TextControl label={**("サブタイトル（英語）", "my-custom-blocks")} value={subtitle} onChange={(value) => setAttributes({ subtitle: value })} **next40pxDefaultSize **nextHasNoMarginBottom />
93 | </PanelBody>
94 | </InspectorControls>
95 |
96 | <div {...blockProps}>
97 | <style dangerouslySetInnerHTML={{ **html: responsiveStyle }} />
98 | <div style={containerStyle}>
99 | <h2 className="page-title-main-responsive" style={mainTitleStyle}>
100 | {title || postTitle || \_\_("ページタイトル", "my-custom-blocks")}
101 | </h2>
102 | <p className="page-title-sub-responsive" style={subTitleStyle}>
103 | {subtitle}
104 | </p>
105 | </div>
106 | </div>
107 | </>
108 | );
109 | }
110 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/page-title-block/index.js:

1 | /\*_
2 | _ Page Title Block
3 | _ ページタイトルとサブタイトルを表示するブロック
4 | _/
5 | import { registerBlockType } from '@wordpress/blocks';
6 | import { ** } from '@wordpress/i18n';
7 | import edit from './edit';
8 | import save from './save';
9 | import './style.scss';
10 |
11 | registerBlockType( 'my-custom-blocks/page-title', {
12 | apiVersion: 3,
13 | title: **( 'Page Title', 'my-custom-blocks' ),
14 | description: **(
15 | 'ページタイトルとサブタイトルを表示するブロック',
16 | 'my-custom-blocks'
17 | ),
18 | category: 'common',
19 | icon: 'heading',
20 | keywords: [
21 | **( 'title', 'my-custom-blocks' ),
22 | **( 'heading', 'my-custom-blocks' ),
23 | **( 'page', 'my-custom-blocks' ),
24 | ],
25 | attributes: {
26 | title: {
27 | type: 'string',
28 | default: '',
29 | },
30 | subtitle: {
31 | type: 'string',
32 | default: 'サブタイトル（英語）',
33 | },
34 | },
35 | edit,
36 | save,
37 | } );
38 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/page-title-block/save.js:

1 | /\*_
2 | _ Save component for Page Title Block
3 | \*/
4 | import { useBlockProps } from "@wordpress/block-editor";
5 |
6 | export default function Save({ attributes }) {
7 | const { title, subtitle } = attributes;
8 |
9 | // コンテナのスタイル
10 | const containerStyle = {
11 | width: "100%",
12 | };
13 |
14 | // メインタイトルのスタイル
15 | const mainTitleStyle = {
16 | color: "#2c2c2c",
17 | fontFamily: "inherit", // 既存のフォントファミリーを継承
18 | fontWeight: "700",
19 | lineHeight: "1",
20 | letterSpacing: "0.05em",
21 | textAlign: "center",
22 | };
23 |
24 | // サブタイトルのスタイル
25 | const subTitleStyle = {
26 | color: "#0b8b4b",
27 | fontFamily: '"Poppins", sans-serif',
28 | fontWeight: "500",
29 | lineHeight: "1.5",
30 | letterSpacing: "0.05em",
31 | textAlign: "center",
32 | marginTop: "10px",
33 | };
34 |
35 | // レスポンシブ対応のためのメディアクエリスタイル
36 | const responsiveStyle = `
37 | 		@media (min-width: 769px) {
38 | 			.page-title-main-responsive {
39 | 				font-size: 40px !important;
40 | 			}
41 | 		}
42 | 		@media (max-width: 768px) {
43 | 			.page-title-main-responsive {
44 | 				font-size: 30px !important;
45 | 			}
46 | 		}
47 | 		@media (max-width: 480px) {
48 | 			.page-title-main-responsive {
49 | 				font-size: 24px !important;
50 | 				letter-spacing: 0 !important;
51 | 			}
52 | 			.page-title-sub-responsive {
53 | 				letter-spacing: 0 !important;
54 | 			}
55 | 		}
56 | 		.page-title-sub-responsive {
57 | 			font-size: 16px !important;
58 | 		}
59 | 	`;
60 |
61 | const blockProps = useBlockProps.save({
62 | className: "page-title-block",
63 | });
64 |
65 | return (
66 | <div {...blockProps}>
67 | <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
68 | <div style={containerStyle}>
69 | <h2 className="page-title-main-responsive" style={mainTitleStyle}>
70 | {title}
71 | </h2>
72 | <p className="page-title-sub-responsive" style={subTitleStyle}>
73 | {subtitle}
74 | </p>
75 | </div>
76 | </div>
77 | );
78 | }
79 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/page-title-block/style.scss:

1 | /\*_
2 | _ Page Title Block Styles
3 | _ フォントサイズのみを管理（その他のスタイルはインラインで適用）
4 | _/
5 |
6 | // Poppins フォントのインポート
7 | @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
8 |
9 | // フォントサイズ変数のみ定義
10 | $font-size-main-desktop: 40px;
11 | $font-size-main-tablet: 30px;
12 | $font-size-main-mobile: 24px;
13 | $font-size-sub: 16px;
14 |
15 | // ブレークポイント
16 | $breakpoint-tablet: 768px;
17 | $breakpoint-mobile: 480px;
18 |
19 | // フォントサイズのみのレスポンシブスタイル
20 | @mixin page-title-font-sizes {
21 | .page-title-main-responsive {
22 | font-size: $font-size-main-desktop;
23 |
24 | @media (max-width: $breakpoint-tablet) {
25 | font-size: $font-size-main-tablet;
26 | }
27 |
28 | @media (max-width: $breakpoint-mobile) {
29 | font-size: $font-size-main-mobile;
30 | letter-spacing: 0 !important;
31 | }
32 | }
33 |
34 | .page-title-sub-responsive {
35 | font-size: $font-size-sub;
36 |
37 | @media (max-width: $breakpoint-mobile) {
38 | letter-spacing: 0 !important;
39 | }
40 | }
41 | }
42 |
43 | // フロントエンド用スタイル（フォントサイズのみ）
44 | .page-title-block {
45 | @include page-title-font-sizes;
46 | }
47 |
48 | // エディター内でのスタイル調整（フォントサイズのみ）
49 | .wp-block-my-custom-blocks-page-title {
50 | @include page-title-font-sizes;
51 | }
52 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/section-title-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
3 | import { PanelBody, TextControl, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 |
5 | export default function Edit({ attributes, setAttributes }) {
6 | const { titleText, marginTop, marginBottom, paddingInline } = attributes;
7 |
8 | // コンテナのスタイル（エディタ用）
9 | const containerStyle = {
10 | width: "100%",
11 | height: "auto",
12 | marginTop: marginTop || "106px",
13 | marginBottom: marginBottom || "0px",
14 | border: "1px dashed #ccc",
15 | borderRadius: "4px",
16 | };
17 |
18 | // タイトルのスタイル（エディタ用）
19 | const titleStyle = {
20 | color: "#0b8b4b", // text-green-500
21 | fontWeight: "700", // font-bold
22 | lineHeight: "1", // leading-none
23 | textAlign: "center",
24 | margin: "0",
25 | };
26 |
27 | // レスポンシブ対応のためのメディアクエリスタイル（エディタ用）
28 | const responsiveStyle = `29 |     @media (min-width: 768px) {
30 |       .section-title-responsive {
31 |         font-size: 40px !important; /* md:text-[40px] */
32 |         letter-spacing: 0.1em !important; /* sm:tracking-wider */
33 |       }
34 |     }
35 |     @media (min-width: 640px) and (max-width: 767px) {
36 |       .section-title-responsive {
37 |         font-size: 30px !important; /* sm:text-3xl */
38 |         letter-spacing: 0.1em !important; /* sm:tracking-wider */
39 |       }
40 |     }
41 |     @media (max-width: 639px) {
42 |       .section-title-responsive {
43 |         font-size: 24px !important; /* text-2xl */
44 |         letter-spacing: 0 !important;
45 |       }
46 |     }
47 |  `;
48 |
49 | const blockProps = useBlockProps({
50 | className: "section-title-block-wrapper",
51 | });
52 |
53 | return (
54 | <>
55 | <InspectorControls>
56 | <PanelBody title={**("セクションタイトル設定", "my-custom-blocks")}>
57 | <TextControl label={**("タイトルテキスト", "my-custom-blocks")} value={titleText} onChange={(value) => setAttributes({ titleText: value })} **next40pxDefaultSize **nextHasNoMarginBottom />
58 | </PanelBody>
59 |
60 | <PanelBody title={**("スペーシング設定", "my-custom-blocks")}>
61 | <UnitControl
62 | label={**("上マージン", "my-custom-blocks")}
63 | value={marginTop}
64 | onChange={(value) => setAttributes({ marginTop: value })}
65 | units={[
66 | { value: "px", label: "px" },
67 | { value: "rem", label: "rem" },
68 | ]}
69 | **next40pxDefaultSize
70 | />
71 |
72 | <UnitControl
73 | label={**("下マージン", "my-custom-blocks")}
74 | value={marginBottom}
75 | onChange={(value) => setAttributes({ marginBottom: value })}
76 | units={[
77 | { value: "px", label: "px" },
78 | { value: "rem", label: "rem" },
79 | ]}
80 | **next40pxDefaultSize
81 | />
82 | </PanelBody>
83 | </InspectorControls>
84 |
85 | <div {...blockProps}>
86 | <style dangerouslySetInnerHTML={{ **html: responsiveStyle }} />
87 | <div style={containerStyle}>
88 | <h3 className="section-title-responsive" style={titleStyle}>
89 | {titleText || "セクションタイトル"}
90 | </h3>
91 | </div>
92 | </div>
93 | </>
94 | );
95 | }
96 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/section-title-block/index.js:

1 | import { registerBlockType } from "@wordpress/blocks";
2 |
3 | import Edit from "./edit";
4 | import save from "./save";
5 | import "./style.scss";
6 |
7 | registerBlockType("my-custom-blocks/section-title-block", {
8 | apiVersion: 3,
9 | title: "セクションタイトルブロック",
10 | description: "セクションのタイトルを表示するブロックです。",
11 | category: "common",
12 | icon: "heading",
13 | supports: {
14 | align: ["wide", "full"],
15 | html: false,
16 | },
17 | attributes: {
18 | titleText: {
19 | type: "string",
20 | default: "セクションタイトル",
21 | },
22 | marginTop: {
23 | type: "string",
24 | default: "106px", // mt-26.5 (26.5 \* 0.25rem = 6.625rem = 106px)
25 | },
26 | marginBottom: {
27 | type: "string",
28 | default: "0px",
29 | },
30 | },
31 | edit: Edit,
32 | save,
33 | });
34 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/section-title-block/save.js:

1 | import { useBlockProps } from "@wordpress/block-editor";
2 |
3 | export default function save({ attributes }) {
4 | const { titleText, marginTop, marginBottom, paddingInline } = attributes;
5 |
6 | // コンテナのスタイル
7 | const containerStyle = {
8 | width: "100%",
9 | height: "auto",
10 | marginTop: marginTop || "106px",
11 | marginBottom: marginBottom || "0px",
12 | };
13 |
14 | // タイトルのスタイル
15 | const titleStyle = {
16 | color: "#0B8B4B", // text-green-500
17 | fontWeight: "700", // font-bold
18 | lineHeight: "1", // leading-none
19 | textAlign: "center",
20 | margin: "0",
21 | };
22 |
23 | // レスポンシブ対応のためのメディアクエリスタイル
24 | const responsiveStyle = `25 |     @media (min-width: 768px) {
26 |       .section-title-responsive {
27 |         font-size: 40px !important; /* md:text-[40px] */
28 |         letter-spacing: 0.1em !important; /* sm:tracking-wider */
29 |       }
30 |     }
31 |     @media (min-width: 640px) and (max-width: 767px) {
32 |       .section-title-responsive {
33 |         font-size: 30px !important; /* sm:text-3xl */
34 |         letter-spacing: 0.1em !important; /* sm:tracking-wider */
35 |       }
36 |     }
37 |     @media (max-width: 639px) {
38 |       .section-title-responsive {
39 |         font-size: 24px !important; /* text-2xl */
40 |         letter-spacing: 0 !important;
41 |       }
42 |     }
43 |  `;
44 |
45 | const blockProps = useBlockProps.save({
46 | className: "section-title-block-wrapper",
47 | });
48 |
49 | return (
50 | <div {...blockProps}>
51 | <style dangerouslySetInnerHTML={{ __html: responsiveStyle }} />
52 | <div style={containerStyle}>
53 | <h3 className="section-title-responsive" style={titleStyle}>
54 | {titleText || "セクションタイトル"}
55 | </h3>
56 | </div>
57 | </div>
58 | );
59 | }
60 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/section-title-block/style.scss:

1 | /\*_
2 | _ Section Title Block Styles
3 | _ フォントサイズのみを管理（その他のスタイルはインラインで適用）
4 | _/
5 |
6 | // フォントサイズ変数のみ定義
7 | $font-size-desktop: 40px; // md:text-[40px]
 8 | $font-size-tablet: 30px; // sm:text-3xl
 9 | $font-size-mobile: 24px; // text-2xl
10 | 
11 | // ブレークポイント
12 | $breakpoint-tablet: 640px;
13 | $breakpoint-desktop: 768px;
14 | 
15 | // フォントサイズのみのレスポンシブスタイル
16 | @mixin section-title-font-sizes {
17 |   .section-title-responsive {
18 |     font-size: $font-size-mobile;
19 |     letter-spacing: 0;
20 | 
21 |     @media (min-width: $breakpoint-tablet) and (max-width: #{$breakpoint-desktop - 1px}) {
22 | font-size: $font-size-tablet;
23 | letter-spacing: 0.1em; // sm:tracking-wider
24 | }
25 |
26 | @media (min-width: $breakpoint-desktop) {
27 | font-size: $font-size-desktop;
28 | letter-spacing: 0.1em; // sm:tracking-wider
29 | }
30 | }
31 | }
32 |
33 | // フロントエンド用スタイル（フォントサイズのみ）
34 | .section-title-block-wrapper {
35 | @include section-title-font-sizes;
36 | }
37 |
38 | // エディター内でのスタイル調整（フォントサイズのみ）
39 | .wp-block-my-custom-blocks-section-title-block {
40 | @include section-title-font-sizes;
41 | }
42 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/services-list-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
3 | import { PanelBody, TextControl, CheckboxControl, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 | const PLUGIN_URL = window.myCustomBlocksData.pluginUrl || "/wp-content/plugins/my-custom-blocks/";
5 |
6 | // 利用可能なサービスのマスターリスト
7 | const AVAILABLE_SERVICES = [
8 | {
9 | id: "drive_one",
10 | label: "出光公式アプリ",
11 | image: `${PLUGIN_URL}assets/images/has_drive_one.webp`,
12 | },
13 | {
14 | id: "oil_change",
15 | label: "オイル交換",
16 | image: `${PLUGIN_URL}assets/images/has_oil_change.webp`,
17 | },
18 | {
19 | id: "apollostation_keeper",
20 | label: "カーコーディング",
21 | image: `${PLUGIN_URL}assets/images/has_apollostation_keeper.webp`,
22 | },
23 | {
24 | id: "auto_flat_new_car",
25 | label: "新車カーリース",
26 | image: `${PLUGIN_URL}assets/images/has_auto_flat_new_car.webp`,
27 | },
28 | {
29 | id: "auto_flat_used_car",
30 | label: "中古車カーリース",
31 | image: `${PLUGIN_URL}assets/images/has_auto_flat_used_car.webp`,
32 | },
33 | {
34 | id: "denki_tokuwari",
35 | label: "idemitsu でんき特割",
36 | image: `${PLUGIN_URL}assets/images/has_denki_tokuwari.webp`,
37 | },
38 | ];
39 |
40 | export default function Edit({ attributes, setAttributes }) {
41 | const { selectedServices, marginTop } = attributes;
42 |
43 | // サービスの選択状態を切り替え
44 | const toggleService = (serviceId) => {
45 | const newSelectedServices = selectedServices.includes(serviceId) ? selectedServices.filter((id) => id !== serviceId) : [...selectedServices, serviceId];
46 | setAttributes({ selectedServices: newSelectedServices });
47 | };
48 |
49 | // 選択されているサービスのみをフィルタリング
50 | const displayedServices = AVAILABLE_SERVICES.filter((service) => selectedServices.includes(service.id));
51 |
52 | const containerStyle = {
53 | maxWidth: "702px",
54 | width: "100%",
55 | marginLeft: "auto",
56 | marginRight: "auto",
57 | marginTop: marginTop || "48px",
58 | };
59 |
60 | const titleStyle = {
61 | fontSize: "20px",
62 | fontWeight: "700",
63 | lineHeight: "1.5",
64 | marginBottom: "20px",
65 | };
66 |
67 | const listStyle = {
68 | maxWidth: "660px", // 165 \* 4 = 660px
69 | width: "100%",
70 | display: "grid",
71 | gridTemplateColumns: "repeat(1, 1fr)",
72 | gap: "16px",
73 | marginTop: "20px",
74 | listStyle: "none",
75 | padding: 0,
76 | };
77 |
78 | const itemStyle = {
79 | display: "flex",
80 | alignItems: "center",
81 | gap: "12px",
82 | };
83 |
84 | const imageStyle = {
85 | maxWidth: "40px",
86 | width: "100%",
87 | height: "auto",
88 | aspectRatio: "1",
89 | };
90 |
91 | const textStyle = {
92 | fontWeight: "500",
93 | fontSize: "16px",
94 | lineHeight: "1.5",
95 | margin: 0,
96 | };
97 |
98 | const blockProps = useBlockProps({
99 | className: "services-list-block-wrapper",
100 | });
101 |
102 | return (
103 | <>
104 | <InspectorControls>
105 | <PanelBody title={**("表示するサービスを選択", "my-custom-blocks")} initialOpen={true}>
106 | <div style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
107 | <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{**("表示したいサービスにチェックを入れてください", "my-custom-blocks")}</p>
108 | </div>
109 |
110 | {AVAILABLE_SERVICES.map((service) => (
111 | <CheckboxControl key={service.id} label={service.label} checked={selectedServices.includes(service.id)} onChange={() => toggleService(service.id)} **nextHasNoMarginBottom />
112 | ))}
113 | </PanelBody>
114 |
115 | <PanelBody title={**("レイアウト設定", "my-custom-blocks")}>
116 | <UnitControl
117 | label={**("上マージン", "my-custom-blocks")}
118 | value={marginTop}
119 | onChange={(value) => setAttributes({ marginTop: value })}
120 | units={[
121 | { value: "px", label: "px" },
122 | { value: "rem", label: "rem" },
123 | ]}
124 | **next40pxDefaultSize
125 | />
126 | </PanelBody>
127 | </InspectorControls>
128 |
129 | <div {...blockProps}>
130 | <div style={containerStyle}>
131 | <p style={titleStyle}>取扱サービス</p>
132 |
133 | {displayedServices.length > 0 ? (
134 | <ul style={listStyle}>
135 | {displayedServices.map((service) => (
136 | <li key={service.id} style={itemStyle}>
137 | <img src={service.image} alt="アイコン" style={imageStyle} />
138 | <p style={textStyle}>{service.label}</p>
139 | </li>
140 | ))}
141 | </ul>
142 | ) : (
143 | <div
144 | style={{
145 |                 padding: "40px 20px",
146 |                 textAlign: "center",
147 |                 backgroundColor: "#f9fafb",
148 |                 border: "2px dashed #ddd",
149 |                 borderRadius: "8px",
150 |                 marginTop: "20px",
151 |               }}
152 | >
153 | <p style={{ margin: 0, color: "#666" }}>{\_\_("右サイドバーから表示するサービスを選択してください", "my-custom-blocks")}</p>
154 | </div>
155 | )}
156 | </div>
157 | </div>
158 | </>
159 | );
160 | }
161 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/services-list-block/index.js:

1 | import { registerBlockType } from "@wordpress/blocks";
2 | import Edit from "./edit";
3 | import save from "./save";
4 | import "./style.scss";
5 |
6 | registerBlockType("my-custom-blocks/services-list-block", {
7 | apiVersion: 3,
8 | title: "取扱サービスリストブロック",
9 | description: "店舗で提供しているサービスを選択して表示するブロックです。",
10 | category: "common",
11 | icon: "editor-ul",
12 | supports: {
13 | align: ["wide", "full"],
14 | html: false,
15 | },
16 | attributes: {
17 | selectedServices: {
18 | type: "array",
19 | default: [],
20 | },
21 | marginTop: {
22 | type: "string",
23 | default: "48px", // mt-8
24 | },
25 | },
26 | edit: Edit,
27 | save,
28 | });
29 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/services-list-block/save.js:

1 | import { useBlockProps } from "@wordpress/block-editor";
2 | const PLUGIN_URL = window.myCustomBlocksData.pluginUrl || "/wp-content/plugins/my-custom-blocks/";
3 |
4 | // 利用可能なサービスのマスターリスト（edit.js と同じ）
5 | const AVAILABLE_SERVICES = [
6 | {
7 | id: "drive_one",
8 | label: "出光公式アプリ",
9 | image: `${PLUGIN_URL}assets/images/has_drive_one.webp`,
10 | },
11 | {
12 | id: "oil_change",
13 | label: "オイル交換",
14 | image: `${PLUGIN_URL}assets/images/has_oil_change.webp`,
15 | },
16 | {
17 | id: "apollostation_keeper",
18 | label: "カーコーディング",
19 | image: `${PLUGIN_URL}assets/images/has_apollostation_keeper.webp`,
20 | },
21 | {
22 | id: "auto_flat_new_car",
23 | label: "新車カーリース",
24 | image: `${PLUGIN_URL}assets/images/has_auto_flat_new_car.webp`,
25 | },
26 | {
27 | id: "auto_flat_used_car",
28 | label: "中古車カーリース",
29 | image: `${PLUGIN_URL}assets/images/has_auto_flat_used_car.webp`,
30 | },
31 | {
32 | id: "denki_tokuwari",
33 | label: "idemitsu でんき特割",
34 | image: `${PLUGIN_URL}assets/images/has_denki_tokuwari.webp`,
35 | },
36 | ];
37 |
38 | export default function save({ attributes }) {
39 | const { selectedServices, marginTop } = attributes;
40 |
41 | // 選択されているサービスのみをフィルタリング
42 | const displayedServices = AVAILABLE_SERVICES.filter((service) => selectedServices.includes(service.id));
43 |
44 | // サービスが選択されていない場合は何も表示しない
45 | if (displayedServices.length === 0) {
46 | return null;
47 | }
48 |
49 | const blockProps = useBlockProps.save({
50 | className: "services-list-block-wrapper",
51 | });
52 |
53 | return (
54 | <div {...blockProps}>
55 | <div className="services-container" style={{ maxWidth: "702px", marginTop: marginTop || "48px" }}>
56 | <p className="services-title">取扱サービス</p>
57 | <ul className="services-list">
58 | {displayedServices.map((service) => (
59 | <li key={service.id} className="service-item">
60 | <img src={service.image} alt="アイコン" width="70" height="70" className="service-icon" loading="lazy" />
61 | <p className="service-label">{service.label}</p>
62 | </li>
63 | ))}
64 | </ul>
65 | </div>
66 | </div>
67 | );
68 | }
69 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/services-list-block/style.scss:

1 | /\*_
2 | _ 取扱サービスリストブロックのスタイル
3 | _/
4 |
5 | .services-list-block-wrapper {
6 | width: 100%;
7 |
8 | .services-container {
9 | max-width: 702px; // 175.5 _ 4 = 702px
10 | width: 100%;
11 | margin-left: auto;
12 | margin-right: auto;
13 | margin-top: 32px; // mt-8 (8 _ 4 = 32px)
14 |
15 | @media (min-width: 768px) {
16 | margin-top: 48px; // md:mt-12 (12 _ 4 = 48px)
17 | }
18 | }
19 |
20 | .services-title {
21 | font-size: 20px; // text-xl
22 | font-weight: 700; // font-bold
23 | line-height: 1.5; // leading-normal
24 | margin: 0 0 20px 0;
25 |
26 | @media (min-width: 768px) {
27 | font-size: 24px; // md:text-2xl
28 | }
29 | }
30 |
31 | .services-list {
32 | max-width: 660px; // 165 _ 4 = 660px
33 | width: 100%;
34 | display: grid;
35 | grid-template-columns: repeat(1, 1fr); // grid-cols-1
36 | gap: 16px; // gap-4 (4 _ 4 = 16px)
37 | margin-top: 20px; // mt-5 (5 _ 4 = 20px)
38 | list-style: none;
39 | padding: 0;
40 |
41 | @media (min-width: 640px) {
42 | grid-template-columns: repeat(2, 1fr); // sm:grid-cols-2
43 | }
44 |
45 | @media (min-width: 768px) {
46 | gap: 24px; // md:gap-6 (6 _ 4 = 24px)
47 | }
48 | }
49 |
50 | .service-item {
51 | display: flex;
52 | align-items: center;
53 | gap: 12px; // gap-3 (3 _ 4 = 12px)
54 | }
55 |
56 | .service-icon {
57 | max-width: 40px; // max-w-10 (10 _ 4 = 40px)
58 | width: 100%;
59 | height: auto;
60 | aspect-ratio: 1; // aspect-square
61 |
62 | @media (min-width: 768px) {
63 | max-width: 48px; // md:max-w-12 (12 \* 4 = 48px)
64 | }
65 | }
66 |
67 | .service-label {
68 | font-weight: 500; // font-medium
69 | font-size: 16px; // text-base
70 | line-height: 1.5; // leading-normal
71 | margin: 0;
72 |
73 | @media (min-width: 768px) {
74 | font-size: 20px; // md:text-xl
75 | }
76 | }
77 |
78 | // エディタ内での表示調整
79 | .wp-block-editor & {
80 | .services-container {
81 | border: 1px dashed #ccc;
82 | padding: 20px;
83 | border-radius: 4px;
84 | }
85 |
86 | &:hover .services-container {
87 | border-color: #007cba;
88 | }
89 | }
90 | }
91 |
92 | // エディタ専用のスタイル
93 | .wp-block-my-custom-blocks-services-list-block {
94 | position: relative;
95 |
96 | // &::before {
97 | // content: "取扱サービスリストブロック";
98 | // position: absolute;
99 | // top: -20px;
100 | // left: 0;
101 | // font-size: 12px;
102 | // color: #666;
103 | // background: #fff;
104 | // padding: 2px 8px;
105 | // border-radius: 3px;
106 | // border: 1px solid #ddd;
107 | // z-index: 1;
108 | // }
109 | }
110 |
111 | // フロントエンド専用のスタイル
112 | .wp-site-blocks .services-list-block-wrapper {
113 | .service-item {
114 | transition: transform 0.2s ease;
115 |
116 | &:hover {
117 | transform: translateX(5px);
118 | }
119 | }
120 | }
121 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/store-info-list-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
3 | import { PanelBody, TextControl, TextareaControl, Button, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 | import { useState } from "@wordpress/element";
5 |
6 | export default function Edit({ attributes, setAttributes }) {
7 | const { storeName, address, phone, businessHours, optionalItems, marginTop } = attributes;
8 |
9 | // 新しいオプション項目を追加
10 | const addOptionalItem = () => {
11 | const newItems = [...optionalItems, { label: "", value: "" }];
12 | setAttributes({ optionalItems: newItems });
13 | };
14 |
15 | // オプション項目を削除
16 | const removeOptionalItem = (index) => {
17 | const newItems = optionalItems.filter((\_, i) => i !== index);
18 | setAttributes({ optionalItems: newItems });
19 | };
20 |
21 | // オプション項目を更新
22 | const updateOptionalItem = (index, field, value) => {
23 | const newItems = [...optionalItems];
24 | newItems[index][field] = value;
25 | setAttributes({ optionalItems: newItems });
26 | };
27 |
28 | const containerStyle = {
29 | maxWidth: "702px",
30 | width: "100%",
31 | marginTop: marginTop || "42px",
32 | marginLeft: "auto",
33 | marginRight: "auto",
34 | listStyle: "none",
35 | padding: 0,
36 | };
37 |
38 | const itemStyle = {
39 | width: "100%",
40 | display: "flex",
41 | alignItems: "flex-start",
42 | gap: "12px",
43 | fontSize: "16px",
44 | color: "#2C2C2C",
45 | letterSpacing: "0.05em",
46 | lineHeight: "1.5",
47 | borderBottom: "1px dotted #9CA3AF",
48 | paddingTop: "10px",
49 | paddingBottom: "11px",
50 | };
51 |
52 | const labelStyle = {
53 | fontWeight: "700",
54 | minWidth: "72px",
55 | flexShrink: 0,
56 | };
57 |
58 | const valueStyle = {
59 | fontWeight: "500",
60 | flex: 1,
61 | };
62 |
63 | const blockProps = useBlockProps({
64 | className: "store-info-list-block-wrapper",
65 | });
66 |
67 | return (
68 | <>
69 | <InspectorControls>
70 | <PanelBody title={**("固定項目設定", "my-custom-blocks")}>
71 | <TextControl label={**("店名", "my-custom-blocks")} value={storeName} onChange={(value) => setAttributes({ storeName: value })} placeholder="例: 大館西 SS" **next40pxDefaultSize **nextHasNoMarginBottom />
72 |
73 | <TextareaControl label={**("住所", "my-custom-blocks")} value={address} onChange={(value) => setAttributes({ address: value })} placeholder="例: 秋田県大館市根下戸新町１-６０" rows={2} **next40pxDefaultSize **nextHasNoMarginBottom />
74 |
75 | <TextControl label={**("電話", "my-custom-blocks")} value={phone} onChange={(value) => setAttributes({ phone: value })} placeholder="例: 0186-42-3149" **next40pxDefaultSize **nextHasNoMarginBottom />
76 |
77 | <TextareaControl label={**("営業時間", "my-custom-blocks")} value={businessHours} onChange={(value) => setAttributes({ businessHours: value })} placeholder="例: 平日・土　 7 時 30 分~17 時 00 分" rows={3} help={**("改行する場合は Enter キーを押してください", "my-custom-blocks")} **nextHasNoMarginBottom />
78 | </PanelBody>
79 |
80 | <PanelBody title={**("オプション項目", "my-custom-blocks")} initialOpen={false}>
81 | {optionalItems.map((item, index) => (
82 | <div key={index} style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "4px" }}>
83 | <TextControl label={**("項目名", "my-custom-blocks")} value={item.label} onChange={(value) => updateOptionalItem(index, "label", value)} placeholder="例: 営業時間" />
84 |
85 | <TextareaControl label={**("内容", "my-custom-blocks")} value={item.value} onChange={(value) => updateOptionalItem(index, "value", value)} placeholder="例: 平日・土　 7 時 30 分~17 時 00 分" rows={2} />
86 |
87 | <Button isDestructive onClick={() => removeOptionalItem(index)}>
88 | {**("この項目を削除", "my-custom-blocks")}
89 | </Button>
90 | </div>
91 | ))}
92 |
93 | <Button variant="secondary" onClick={addOptionalItem}>
94 | {**("オプション項目を追加", "my-custom-blocks")}
95 | </Button>
96 | </PanelBody>
97 |
98 | <PanelBody title={**("レイアウト設定", "my-custom-blocks")}>
99 | <UnitControl
100 | label={**("上マージン", "my-custom-blocks")}
101 | value={marginTop}
102 | onChange={(value) => setAttributes({ marginTop: value })}
103 | units={[
104 | { value: "px", label: "px" },
105 | { value: "rem", label: "rem" },
106 | ]}
107 | **next40pxDefaultSize
108 | />
109 | </PanelBody>
110 | </InspectorControls>
111 |
112 | <div {...blockProps}>
113 | <ul style={containerStyle}>
114 | <li style={itemStyle}>
115 | <p style={labelStyle}>店　　名</p>
116 | <p style={valueStyle}>{storeName || "（未入力）"}</p>
117 | </li>
118 |
119 | <li style={itemStyle}>
120 | <p style={labelStyle}>住　　所</p>
121 | <p style={valueStyle}>{address || "（未入力）"}</p>
122 | </li>
123 |
124 | <li style={itemStyle}>
125 | <p style={labelStyle}>電　　話</p>
126 | <p style={valueStyle}>{phone || "（未入力）"}</p>
127 | </li>
128 |
129 | <li style={itemStyle}>
130 | <p style={labelStyle}>営業時間</p>
131 | <p style={valueStyle} dangerouslySetInnerHTML={{ **html: (businessHours || "（未入力）").replace(/\n/g, "<br />") }} />
132 | </li>
133 |
134 | {optionalItems.map((item, index) => (
135 | <li key={index} style={itemStyle}>
136 | <p style={labelStyle}>{item.label || "（未入力）"}</p>
137 | <p style={valueStyle} dangerouslySetInnerHTML={{ __html: (item.value || "（未入力）").replace(/\n/g, "<br />") }} />
138 | </li>
139 | ))}
140 | </ul>
141 | </div>
142 | </>
143 | );
144 | }
145 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/store-info-list-block/index.js:

1 | import { registerBlockType } from "@wordpress/blocks";
2 | import Edit from "./edit";
3 | import save from "./save";
4 | import "./style.scss";
5 |
6 | registerBlockType("my-custom-blocks/store-info-list-block", {
7 | apiVersion: 3,
8 | title: "店舗情報リストブロック",
9 | description: "店舗の基本情報（店名、住所、電話、営業時間など）を表示するリストブロックです。",
10 | category: "common",
11 | icon: "list-view",
12 | supports: {
13 | align: ["wide", "full"],
14 | html: false,
15 | },
16 | attributes: {
17 | storeName: {
18 | type: "string",
19 | default: "",
20 | },
21 | address: {
22 | type: "string",
23 | default: "",
24 | },
25 | phone: {
26 | type: "string",
27 | default: "",
28 | },
29 | businessHours: {
30 | type: "string",
31 | default: "",
32 | },
33 | optionalItems: {
34 | type: "array",
35 | default: [],
36 | },
37 | marginTop: {
38 | type: "string",
39 | default: "42px",
40 | },
41 | },
42 | edit: Edit,
43 | save,
44 | });
45 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/store-info-list-block/save.js:

1 | import { useBlockProps } from "@wordpress/block-editor";
2 |
3 | export default function save({ attributes }) {
4 | const { storeName, address, phone, businessHours, optionalItems, maxWidth, marginTop } = attributes;
5 |
6 | const blockProps = useBlockProps.save({
7 | className: "store-info-list-block-wrapper",
8 | });
9 |
10 | return (
11 | <div {...blockProps}>
12 | <ul className="store-info-list" style={{ maxWidth: "702px", marginTop: marginTop || "42px" }}>
13 | <li className="store-info-item">
14 | <p className="store-info-label">店　　名</p>
15 | <p className="store-info-value">{storeName}</p>
16 | </li>
17 |
18 | <li className="store-info-item">
19 | <p className="store-info-label">住　　所</p>
20 | <p className="store-info-value">{address}</p>
21 | </li>
22 |
23 | <li className="store-info-item">
24 | <p className="store-info-label">電　　話</p>
25 | <p className="store-info-value">{phone}</p>
26 | </li>
27 |
28 | <li className="store-info-item">
29 | <p className="store-info-label">営業時間</p>
30 | <p className="store-info-value" dangerouslySetInnerHTML={{ __html: businessHours.replace(/\n/g, "<br />") }} />
31 | </li>
32 |
33 | {optionalItems.map((item, index) => (
34 | <li key={index} className="store-info-item">
35 | <p className="store-info-label">{item.label}</p>
36 | <p className="store-info-value" dangerouslySetInnerHTML={{ __html: item.value.replace(/\n/g, "<br />") }} />
37 | </li>
38 | ))}
39 | </ul>
40 | </div>
41 | );
42 | }
43 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/store-info-list-block/style.scss:

1 | /\*_
2 | _ 店舗情報リストブロックのスタイル
3 | _/
4 |
5 | .store-info-list-block-wrapper {
6 | width: 100%;
7 |
8 | .store-info-list {
9 | max-width: 702px; // 175.5 _ 4 = 702px
10 | width: 100%;
11 | margin-left: auto;
12 | margin-right: auto;
13 | list-style: none;
14 | padding: 0;
15 | }
16 |
17 | .store-info-item {
18 | width: 100%;
19 | display: flex;
20 | align-items: flex-start;
21 | gap: 12px; // gap-3 (3 _ 4 = 12px)
22 | font-size: 16px; // text-base
23 | color: #2c2c2c; // text-neutral-900
24 | letter-spacing: 0.05em; // tracking-wider
25 | line-height: 1.5; // leading-normal
26 | border-bottom: 1px dotted #9ca3af; // border-b-1 border-gray-400 border-dotted
27 | padding-top: 10px; // pt-2.5 (2.5 _ 4 = 10px)
28 | padding-bottom: 11px; // pb-2.75 (2.75 _ 4 = 11px)
29 |
30 | @media (min-width: 768px) {
31 | gap: 52px; // md:gap-13 (13 _ 4 = 52px)
32 | font-size: 20px; // md:text-xl
33 | }
34 | }
35 |
36 | .store-info-label {
37 | font-weight: 700; // font-bold
38 | min-width: 72px; // min-w-18 (18 _ 4 = 72px)
39 | margin: 0;
40 | flex-shrink: 0;
41 |
42 | @media (min-width: 768px) {
43 | min-width: 88px; // md:min-w-22 (22 _ 4 = 88px)
44 | }
45 | }
46 |
47 | .store-info-value {
48 | font-weight: 500; // font-medium
49 | margin: 0;
50 | flex: 1;
51 | }
52 |
53 | // エディタ内での表示調整
54 | .wp-block-editor & {
55 | .store-info-list {
56 | border: 1px dashed #ccc;
57 | padding: 20px;
58 | border-radius: 4px;
59 | }
60 |
61 | &:hover .store-info-list {
62 | border-color: #007cba;
63 | }
64 | }
65 | }
66 |
67 | // エディタ専用のスタイル
68 | .wp-block-my-custom-blocks-store-info-list-block {
69 | position: relative;
70 |
71 | // &::before {
72 | // content: "店舗情報リストブロック";
73 | // position: absolute;
74 | // top: -20px;
75 | // left: 0;
76 | // font-size: 12px;
77 | // color: #666;
78 | // background: #fff;
79 | // padding: 2px 8px;
80 | // border-radius: 3px;
81 | // border: 1px solid #ddd;
82 | // z-index: 1;
83 | // }
84 | }
85 |
86 | // フロントエンド専用のスタイル
87 | .wp-site-blocks .store-info-list-block-wrapper {
88 | .store-info-item {
89 | transition: background-color 0.2s ease;
90 |
91 | &:hover {
92 | background-color: #f9fafb;
93 | }
94 | }
95 | }
96 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/width-container-block/edit.js:

1 | import { ** } from "@wordpress/i18n";
2 | import { InspectorControls, InnerBlocks, useBlockProps, ColorPalette } from "@wordpress/block-editor";
3 | import { PanelBody, ToggleControl, **experimentalUnitControl as UnitControl } from "@wordpress/components";
4 |
5 | const ALLOWED_BLOCKS = [
6 | "core/paragraph",
7 | "core/heading",
8 | "core/image",
9 | "core/list",
10 | "core/quote",
11 | "core/separator",
12 | "core/spacer",
13 | "core/columns",
14 | "core/group",
15 | "my-custom-blocks/hero-block",
16 | "my-custom-blocks/testimonial-block",
17 | "my-custom-blocks/pricing-table",
18 | "my-custom-blocks/container-block",
19 | "my-custom-blocks/link-button-block",
20 | "my-custom-blocks/width-container-block",
21 | ];
22 |
23 | const TEMPLATE = [["core/paragraph", { placeholder: "コンテンツを入力してください..." }]];
24 |
25 | export default function Edit({ attributes, setAttributes }) {
26 | const { maxWidth, backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, paddingInline, centerContent } = attributes;
27 |
28 | // 直接インラインスタイルを設定
29 | const blockStyle = {
30 | width: "100%",
31 | maxWidth: maxWidth || "1200px",
32 | backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#EDF9F3",
33 | borderRadius: borderRadius || "0px",
34 | marginTop: marginTop || "0px",
35 | marginBottom: marginBottom || "0px",
36 | marginLeft: centerContent ? "auto" : "0",
37 | marginRight: centerContent ? "auto" : "0",
38 | paddingTop: paddingTop || "20px",
39 | paddingBottom: paddingBottom || "20px",
40 | paddingLeft: paddingInline || "20px",
41 | paddingRight: paddingInline || "20px",
42 | boxSizing: "border-box",
43 | border: "1px dashed #ccc",
44 | minHeight: "80px",
45 | position: "relative",
46 | display: "flex",
47 | justifyContent: "center",
48 | flexDirection: "column",
49 | };
50 |
51 | const blockProps = useBlockProps({
52 | style: blockStyle,
53 | className: "width-container-block-wrapper",
54 | });
55 |
56 | return (
57 | <>
58 | <InspectorControls>
59 | <PanelBody title={**("幅設定", "my-custom-blocks")}>
60 | <UnitControl
61 | label={**("最大幅", "my-custom-blocks")}
62 | value={maxWidth}
63 | onChange={(value) => setAttributes({ maxWidth: value })}
64 | units={[
65 | { value: "px", label: "px" },
66 | { value: "%", label: "%" },
67 | { value: "rem", label: "rem" },
68 | { value: "em", label: "em" },
69 | { value: "vw", label: "vw" },
70 | ]}
71 | **next40pxDefaultSize
72 | />
73 |
74 | <ToggleControl label={**("中央寄せ", "my-custom-blocks")} checked={centerContent} onChange={(value) => setAttributes({ centerContent: value })} help={**("コンテナを中央に配置します", "my-custom-blocks")} **nextHasNoMarginBottom />
75 | </PanelBody>
76 |
77 | <PanelBody title={**("スタイル設定", "my-custom-blocks")}>
78 | <div style={{ marginBottom: "20px" }}>
79 | <label>{**("背景色", "my-custom-blocks")}</label>
80 | <ColorPalette
81 | value={backgroundColor}
82 | onChange={(color) =>
83 | setAttributes({
84 | backgroundColor: color || "#EDF9F3",
85 | })
86 | }
87 | colors={[
88 | { name: "白", color: "#ffffff" },
89 | { name: "グレー", color: "#F7F7F7" },
90 | { name: "黒", color: "#2C2C2C" },
91 | { name: "グリーン", color: "#0B8B4B" },
92 | { name: "ライトグリーン", color: "#EDF9F3" },
93 | { name: "透明", color: "transparent" },
94 | ]}
95 | />
96 | </div>
97 |
98 | <UnitControl
99 | label={**("角丸", "my-custom-blocks")}
100 | value={borderRadius}
101 | onChange={(value) => setAttributes({ borderRadius: value })}
102 | units={[
103 | { value: "px", label: "px" },
104 | { value: "%", label: "%" },
105 | ]}
106 | **next40pxDefaultSize
107 | />
108 | </PanelBody>
109 |
110 | <PanelBody title={**("スペーシング設定", "my-custom-blocks")}>
111 | <UnitControl
112 | label={**("上マージン", "my-custom-blocks")}
113 | value={marginTop}
114 | onChange={(value) => setAttributes({ marginTop: value })}
115 | units={[
116 | { value: "px", label: "px" },
117 | { value: "rem", label: "rem" },
118 | ]}
119 | **next40pxDefaultSize
120 | />
121 |
122 | <UnitControl
123 | label={**("下マージン", "my-custom-blocks")}
124 | value={marginBottom}
125 | onChange={(value) => setAttributes({ marginBottom: value })}
126 | units={[
127 | { value: "px", label: "px" },
128 | { value: "rem", label: "rem" },
129 | ]}
130 | **next40pxDefaultSize
131 | />
132 |
133 | <UnitControl
134 | label={**("上パディング", "my-custom-blocks")}
135 | value={paddingTop}
136 | onChange={(value) => setAttributes({ paddingTop: value })}
137 | units={[
138 | { value: "px", label: "px" },
139 | { value: "rem", label: "rem" },
140 | ]}
141 | **next40pxDefaultSize
142 | />
143 |
144 | <UnitControl
145 | label={**("下パディング", "my-custom-blocks")}
146 | value={paddingBottom}
147 | onChange={(value) => setAttributes({ paddingBottom: value })}
148 | units={[
149 | { value: "px", label: "px" },
150 | { value: "rem", label: "rem" },
151 | ]}
152 | **next40pxDefaultSize
153 | />
154 |
155 | <UnitControl
156 | label={**("左右パディング", "my-custom-blocks")}
157 | value={paddingInline}
158 | onChange={(value) => setAttributes({ paddingInline: value })}
159 | units={[
160 | { value: "px", label: "px" },
161 | { value: "rem", label: "rem" },
162 | ]}
163 | \_\_next40pxDefaultSize
164 | />
165 | </PanelBody>
166 | </InspectorControls>
167 |
168 | <div {...blockProps}>
169 | <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock={false} />
170 | </div>
171 | </>
172 | );
173 | }
174 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/width-container-block/index.js:

1 | import { registerBlockType } from "@wordpress/blocks";
2 | import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
3 |
4 | import Edit from "./edit";
5 | import save from "./save";
6 | import "./style.scss";
7 |
8 | registerBlockType("my-custom-blocks/width-container-block", {
9 | apiVersion: 3,
10 | title: "幅調整コンテナブロック",
11 | description: "最大幅を調整できるコンテナ。内部に他のブロックを配置できます。",
12 | category: "layout",
13 | icon: "align-center",
14 | supports: {
15 | align: ["wide", "full"],
16 | html: false,
17 | },
18 | attributes: {
19 | maxWidth: {
20 | type: "string",
21 | default: "1200px",
22 | },
23 | backgroundColor: {
24 | type: "string",
25 | default: "#EDF9F3",
26 | },
27 | borderRadius: {
28 | type: "string",
29 | default: "0px",
30 | },
31 | marginTop: {
32 | type: "string",
33 | default: "50px",
34 | },
35 | marginBottom: {
36 | type: "string",
37 | default: "0px",
38 | },
39 | paddingTop: {
40 | type: "string",
41 | default: "20px",
42 | },
43 | paddingBottom: {
44 | type: "string",
45 | default: "20px",
46 | },
47 | paddingInline: {
48 | type: "string",
49 | default: "0px",
50 | },
51 | centerContent: {
52 | type: "boolean",
53 | default: true,
54 | },
55 | },
56 | edit: Edit,
57 | save,
58 | });
59 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/width-container-block/save.js:

1 | import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
2 |
3 | export default function save({ attributes }) {
4 | const { maxWidth, backgroundColor, borderRadius, marginTop, marginBottom, paddingTop, paddingBottom, paddingInline, centerContent } = attributes;
5 |
6 | const blockProps = useBlockProps.save({
7 | className: "width-container-block-wrapper",
8 | style: {
9 | width: "100%",
10 | maxWidth: maxWidth || "1200px",
11 | backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor || "#EDF9F3",
12 | borderRadius: borderRadius || "0px",
13 | marginTop: marginTop || "0px",
14 | marginBottom: marginBottom || "0px",
15 | marginLeft: centerContent ? "auto" : "0",
16 | marginRight: centerContent ? "auto" : "0",
17 | paddingTop: paddingTop || "20px",
18 | paddingBottom: paddingBottom || "20px",
19 | paddingLeft: paddingInline || "20px",
20 | paddingRight: paddingInline || "20px",
21 | boxSizing: "border-box",
22 | display: "flex",
23 | flexDirection: "column",
24 | justifyContent: "center",
25 | },
26 | });
27 |
28 | return (
29 | <div {...blockProps}>
30 | <InnerBlocks.Content />
31 | </div>
32 | );
33 | }
34 |

---

## /wp-content/plugins/my-custom-blocks/src/blocks/width-container-block/style.scss:

1 | // /\*_
2 | // _ 幅調整コンテナブロックのスタイル
3 | // _ フロントエンドとエディタの両方で適用される
4 | // _/
5 |
6 | // // 基本スタイル（フロントエンド用）
7 | // .width-container-block-wrapper {
8 | // width: 100%;
9 | // height: auto;
10 | // max-width: var(--max-width, 1200px);
11 | // margin-top: var(--margin-top, 0px);
12 | // margin-bottom: var(--margin-bottom, 0px);
13 | // padding-top: var(--padding-top, 20px);
14 | // padding-bottom: var(--padding-bottom, 20px);
15 | // padding-inline: var(--padding-inline, 20px);
16 | // background-color: var(--bg-color, #ffffff);
17 | // border-radius: var(--border-radius, 0px);
18 | // box-sizing: border-box;
19 |
20 | // // 背景が透明の場合の処理
21 | // &[style*="transparent"] {
22 | // background-color: transparent;
23 | // }
24 | // }
25 |
26 | // // エディタ専用スタイル（詳細度を上げる）
27 | // .block-editor-block-list**block.wp-block.width-container-block-wrapper.wp-block-my-custom-blocks-width-container-block {
28 | // width: 100%;
29 | // height: auto;
30 | // max-width: var(--max-width, 1200px);
31 | // margin-top: var(--margin-top, 0px);
32 | // margin-bottom: var(--margin-bottom, 0px);
33 | // padding-top: var(--padding-top, 20px);
34 | // padding-bottom: var(--padding-bottom, 20px);
35 | // padding-inline: var(--padding-inline, 20px);
36 | // background-color: var(--bg-color, #ffffff);
37 | // border-radius: var(--border-radius, 0px);
38 | // box-sizing: border-box;
39 | // border: 2px dashed #007cba;
40 | // min-height: 80px;
41 | // position: relative;
42 |
43 | // // 背景が透明の場合の処理
44 | // &[style*="transparent"] {
45 | // background-color: transparent;
46 | // }
47 |
48 | // &:hover {
49 | // border-color: #005a87;
50 | // }
51 |
52 | // &.is-selected {
53 | // border-color: #007cba;
54 | // box-shadow: 0 0 0 1px #007cba;
55 | // }
56 | // }
57 |
58 | // /_ 内部ブロックのスタイル調整 _/
59 | // .width-container-block-wrapper .wp-block {
60 | // max-width: none;
61 | // }
62 |
63 | // /_ InnerBlocks のスタイル調整 _/
64 | // .width-container-block-wrapper .block-editor-inner-blocks {
65 | // width: 100%;
66 | // }
67 |
68 | // .width-container-block-wrapper .block-editor-block-list**layout {
69 | // margin: 0;
70 | // padding: 0;
71 | // }
72 |
73 | // // レスポンシブブレークポイント
74 | // @media (max-width: 768px) {
75 | // .width-container-block-wrapper,
76 | // .block-editor-block-list**block.wp-block.width-container-block-wrapper.wp-block-my-custom-blocks-width-container-block {
77 | // // モバイルでは左右のパディングを調整
78 | // padding-inline: 15px;
79 |
80 | // // 最大幅がビューポートより大きい場合は 100%に
81 | // max-width: 100%;
82 | // }
83 | // }
84 |
85 | // @media (max-width: 480px) {
86 | // .width-container-block-wrapper,
87 | // .block-editor-block-list**block.wp-block.width-container-block-wrapper.wp-block-my-custom-blocks-width-container-block {
88 | // padding-inline: 10px;
89 | // }
90 | // }
91 |
92 | // /_ エディタ専用のスタイル _/
93 | // .wp-block-my-custom-blocks-width-container-block {
94 | // .width-container-block-wrapper {
95 | // position: relative;
96 |
97 | // &::before {
98 | // content: "幅調整コンテナ（最大幅: " var(--max-width, "1200px") "）";
99 | // position: absolute;
100 | // top: -20px;
101 | // left: 0;
102 | // font-size: 12px;
103 | // color: #666;
104 | // background: #fff;
105 | // padding: 2px 8px;
106 | // border-radius: 3px;
107 | // border: 1px solid #ddd;
108 | // z-index: 1;
109 | // white-space: nowrap;
110 | // }
111 | // }
112 | // }
113 |
114 | // /_ フロントエンド専用のスタイル _/
115 | // .wp-site-blocks .width-container-block-wrapper {
116 | // /_ フロントエンドでのみ適用される追加スタイル _/
117 | // display: block;
118 |
119 | // // 子要素の幅を継承
120 | // \* {
121 | // max-width: 100%;
122 | // }
123 |
124 | // // 画像の調整
125 | // img {
126 | // height: auto;
127 | // }
128 | // }
129 |
130 | // // 全幅・幅広対応
131 | // .alignwide .width-container-block-wrapper {
132 | // max-width: min(var(--max-width), 1200px);
133 | // }
134 |
135 | // .alignfull .width-container-block-wrapper {
136 | // max-width: min(var(--max-width), 100vw);
137 | // margin-left: auto;
138 | // margin-right: auto;
139 | // }
140 |

---

## /wp-content/plugins/my-custom-blocks/src/components/CustomPanel.js:

1 | import { PanelBody, PanelRow } from '@wordpress/components';
2 |
3 | export default function CustomPanel( {
4 | title,
5 | children,
6 | initialOpen = false,
7 | } ) {
8 | return (
9 | <PanelBody title={ title } initialOpen={ initialOpen }>
10 | <PanelRow>{ children }</PanelRow>
11 | </PanelBody>
12 | );
13 | }
14 |

---

## /wp-content/plugins/my-custom-blocks/src/hooks/usePostData.js:

1 | import { useSelect } from '@wordpress/data';
2 |
3 | /**
4 | _ 投稿データを取得するカスタムフック
5 | _
6 | _ @param {string} postType - 投稿タイプ
7 | _ @param {Object} queryArgs - クエリ引数
8 | _ @return {Array|null} 投稿データ配列
9 | _/
10 | export function usePostData( postType = 'post', queryArgs = {} ) {
11 | return useSelect(
12 | ( select ) => {
13 | const { getEntityRecords } = select( 'core' );
14 |
15 | return getEntityRecords( 'postType', postType, {
16 | per_page: 10,
17 | status: 'publish',
18 | ...queryArgs,
19 | } );
20 | },
21 | [ postType, queryArgs ]
22 | );
23 | }
24 |
25 | /**
26 | _ 現在の投稿メタデータを操作するフック
27 | _/
28 | export function usePostMeta() {
29 | return useSelect( ( select ) => {
30 | const { getCurrentPost } = select( 'core/editor' );
31 | return getCurrentPost()?.meta || {};
32 | } );
33 | }
34 |

---

## /wp-content/plugins/my-custom-blocks/src/index.js:

1 | /\*_
2 | _ Internal dependencies
3 | \*/
4 | import "./blocks";
5 |
6 | // 追加の初期化処理があればここに記述
7 | // eslint-disable-next-line no-console
8 | console.log("My Custom Blocks loaded!");
9 |

---

## /wp-content/plugins/my-custom-blocks/src/utils/helpers.js:

1 | /**
2 | _ クラス名を結合するヘルパー
3 | _
4 | _ @param {...string} classes - 結合するクラス名
5 | _ @return {string} 結合されたクラス名
6 | \*/
7 | export function classNames( ...classes ) {
8 | return classes.filter( Boolean ).join( ' ' );
9 | }
10 |
11 | /**
12 | _ 属性の安全な更新
13 | _
14 | _ @param {Function} setAttributes - 属性設定関数
15 | _ @param {string} key - 属性キー
16 | _ @param {_} value - 属性値
17 | _/
18 | export function updateAttribute( setAttributes, key, value ) {
19 | setAttributes( { [ key ]: value } );
20 | }
21 |
22 | /\*\*
23 | _ メディア情報を取得
24 | _
25 | _ @param {number} mediaId - メディア ID
26 | _ @return {Object|null} メディア情報または null
27 | _/
28 | export function getMediaDetails( mediaId ) {
29 | if ( ! mediaId ) {
30 | return null;
31 | }
32 |
33 | return wp.media.attachment( mediaId ).get();
34 | }
35 |

---
