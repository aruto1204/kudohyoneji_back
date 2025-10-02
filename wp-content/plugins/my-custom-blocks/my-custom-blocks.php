<?php
/**
 * Plugin Name: My Custom Blocks
 * Plugin URI: https://example.com
 * Description: 固定ページ、投稿ページのカスタムブロック
 * Version: 1.0.0
 * Author: Hyper graphic inc.
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

/**
 * Featured Image Block の動的レンダリング
 */
function render_featured_image_block( $attributes ) {
    $post_id = get_the_ID();

    // アイキャッチ画像がない場合は何も表示しない
    if ( ! $post_id || ! has_post_thumbnail( $post_id ) ) {
        return '';
    }

    // 属性から設定値を取得
    $image_size = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'full';
    $margin_top = isset( $attributes['marginTop'] ) ? $attributes['marginTop'] : '0px';
    $margin_bottom = isset( $attributes['marginBottom'] ) ? $attributes['marginBottom'] : '0px';

    // 画像を取得
    $image_data = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), $image_size );

    if ( ! $image_data ) {
        return '';
    }

    $image_url = $image_data[0];
    $image_alt = get_post_meta( get_post_thumbnail_id( $post_id ), '_wp_attachment_image_alt', true );

    // HTMLを生成
    $container_style = sprintf(
        'max-width: 880px; width: 100%%; margin-top: %s; margin-bottom: %s; margin-left: auto; margin-right: auto; overflow: hidden;',
        esc_attr( $margin_top ),
        esc_attr( $margin_bottom )
    );

    $image_style = 'width: 100%; height: auto; object-fit: cover; display: block;';

    $output = sprintf(
        '<div class="featured-image-block-wrapper wp-block-my-custom-blocks-featured-image-block" style="%s">',
        $container_style
    );

    $output .= sprintf(
        '<img src="%s" alt="%s" style="%s" loading="lazy" />',
        esc_url( $image_url ),
        esc_attr( $image_alt ? $image_alt : 'アイキャッチ画像' ),
        $image_style
    );

    $output .= '</div>';

    return $output;
}

/**
 * Featured Image Block を登録
 */
function register_featured_image_block() {
    register_block_type( __DIR__ . '/build/blocks/featured-image-block', array(
        'render_callback' => 'render_featured_image_block',
    ) );
}
add_action( 'init', 'register_featured_image_block' );
