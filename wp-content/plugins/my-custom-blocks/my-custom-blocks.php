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
    $asset_file_path = MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php';

    if (!file_exists($asset_file_path)) {
        return;
    }

    $asset_file = include($asset_file_path);

    wp_enqueue_script(
        'my-custom-blocks-editor',
        MY_CUSTOM_BLOCKS_URL . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    // エディター用スタイル（存在する場合のみ読み込み）
    $editor_css_path = MY_CUSTOM_BLOCKS_PATH . 'build/index.css';
    if (file_exists($editor_css_path)) {
        wp_enqueue_style(
            'my-custom-blocks-editor',
            MY_CUSTOM_BLOCKS_URL . 'build/index.css',
            array('wp-edit-blocks'),
            $asset_file['version']
        );
    }

    // 注意: エディター用の個別CSSファイルは通常不要です
    // ブロックのスタイルはstyle-index.cssに含まれ、フロントエンドとエディターの両方で使用されます

    // 翻訳ファイル設定
    wp_set_script_translations(
        'my-custom-blocks-editor',
        'my-custom-blocks'
    );

      // プラグインURLをJavaScriptに渡す
      wp_localize_script(
        'my-custom-blocks-editor',
        'myCustomBlocksData',
        array(
            'pluginUrl' => MY_CUSTOM_BLOCKS_URL,
        )
    );
}
add_action('enqueue_block_editor_assets', 'my_custom_blocks_editor_assets');

/**
 * フロントエンド用アセット読み込み
 */
function my_custom_blocks_frontend_assets() {
    $asset_file_path = MY_CUSTOM_BLOCKS_PATH . 'build/index.asset.php';

    if (!file_exists($asset_file_path)) {
        return;
    }

    $asset_file = include($asset_file_path);

    wp_enqueue_style(
        'my-custom-blocks-style',
        MY_CUSTOM_BLOCKS_URL . 'build/style-index.css',
        array(),
        $asset_file['version']
    );
}
add_action('wp_enqueue_scripts', 'my_custom_blocks_frontend_assets');
