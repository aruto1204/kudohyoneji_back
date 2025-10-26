<?php

function add_link_files() {
  wp_enqueue_style( 'style', get_stylesheet_directory_uri().'/assets/css/index.css', array(), filemtime( get_stylesheet_directory() . '/assets/css/index.css' ) );

  wp_enqueue_script_module( 'script', get_theme_file_uri('/assets/js/script.js'), array(), '1.0.0', true );

}
add_action( 'wp_enqueue_scripts', 'add_link_files' );


add_theme_support( 'title-tag' );

// アイキャッチ画像サポートを追加
add_theme_support( 'post-thumbnails' );

//ディスクリプション追加
function meta_description() {
    return get_bloginfo('description');
}

// アイキャッチ画像のサイズを無制限にする
add_filter( 'big_image_size_threshold', '__return_false' );

// デフォルトのスタイルとjQueryを削除
function my_delete_plugin() {
  wp_dequeue_script('jquery');
  // wp_dequeue_style('wp-block-library'); // ブロックエディタのスタイルを削除
}
add_action('wp_enqueue_scripts', 'my_delete_plugin');

// カスタムメニューの登録
function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __('ヘッダーメニュー'),
      'mobile-menu' => __('モバイルメニュー'),
      'footer-menu' => __('フッターメニュー'),
    )
  );
}
add_action('init', 'register_my_menus');

// ページネーション
function custom_pagination() {
    global $wp_query;

    if ($wp_query->max_num_pages <= 1) return;

    echo '<nav class="nav-links">';

    // 前のページリンク
    if (get_previous_posts_link()) {
        echo '<div class="prev page-numbers">';
        previous_posts_link('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> <p>前に戻る</p> ');
        echo '</div>';
    }

    // 次のページリンク
    if (get_next_posts_link()) {
        echo '<div class="next page-numbers">';
        next_posts_link('<p>もっと見る</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg>');
        echo '</div>';
    }

    echo '</nav>';
}

// テーマサポートとエディタースタイルを追加
function setup_theme_support() {
  // ブロックエディター用スタイルを追加（ファイル存在チェック付き）
  $editor_style_path = get_template_directory() . '/css/editor-style.css';
  if ( file_exists( $editor_style_path ) ) {
    add_editor_style( 'css/editor-style.css' );
  }


  // エディタースタイルの追加設定
  add_theme_support( 'editor-styles' );

  // ブロックエディターのフルサイト編集をサポート
  add_theme_support( 'block-templates' );

  // レスポンシブ埋め込みをサポート
  add_theme_support( 'responsive-embeds' );

  // ブロックエディターの幅広・全幅をサポート
  add_theme_support( 'align-wide' );
}
add_action( 'after_setup_theme', 'setup_theme_support' );

// 絵文字を無効化
function disable_emoji() {
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
}
add_action( 'init', 'disable_emoji' );

// カテゴリーを1つのみ選択可能にする
// function enqueue_single_category_script() {
//   wp_enqueue_script(
//     'single-category',
//     get_template_directory_uri() . '/js/single-category.js',
//     array(),
//     '1.0.0',
//     true
//   );
// }
// add_action( 'admin_enqueue_scripts', 'enqueue_single_category_script' );

// ===== テーマカスタムブロック機能 =====

/**
 * テーマカスタムブロックの初期化
 */
function kudohyoneji_theme_blocks_init() {
    // 個別にブロックを登録（手動ビルド版）
    $blocks_build_path = get_template_directory() . '/blocks/build';
    if (file_exists($blocks_build_path . '/index.js')) {
        // 現在は手動でJSファイルを読み込むため、ここでは何もしない
        // ブロック登録はJavaScriptファイル内で行う
    }
}
add_action('init', 'kudohyoneji_theme_blocks_init');

/**
 * テーマブロック用エディタアセット読み込み
 */
function kudohyoneji_theme_blocks_editor_assets() {
    $asset_file_path = get_template_directory() . '/blocks/build/index.asset.php';

    if (!file_exists($asset_file_path)) {
        return;
    }

    $asset_file = include($asset_file_path);

    wp_enqueue_script(
        'kudohyoneji-theme-blocks-editor',
        get_template_directory_uri() . '/blocks/build/index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    // エディター用スタイル（存在する場合のみ読み込み）
    $editor_css_path = get_template_directory() . '/blocks/build/index.css';
    if (file_exists($editor_css_path)) {
        wp_enqueue_style(
            'kudohyoneji-theme-blocks-editor',
            get_template_directory_uri() . '/blocks/build/index.css',
            array('wp-edit-blocks'),
            $asset_file['version']
        );
    }

    // 翻訳ファイル設定
    wp_set_script_translations(
        'kudohyoneji-theme-blocks-editor',
        'kudohyoneji'
    );
}
add_action('enqueue_block_editor_assets', 'kudohyoneji_theme_blocks_editor_assets');

/**
 * テーマブロック用フロントエンドアセット読み込み
 */
function kudohyoneji_theme_blocks_frontend_assets() {
    $asset_file_path = get_template_directory() . '/blocks/build/index.asset.php';

    if (!file_exists($asset_file_path)) {
        return;
    }

    $asset_file = include($asset_file_path);

    // フロントエンド用スタイル
    $frontend_css_path = get_template_directory() . '/blocks/build/style-index.css';
    if (file_exists($frontend_css_path)) {
        wp_enqueue_style(
            'kudohyoneji-theme-blocks-style',
            get_template_directory_uri() . '/blocks/build/style-index.css',
            array(),
            $asset_file['version']
        );
    }
}
add_action('wp_enqueue_scripts', 'kudohyoneji_theme_blocks_frontend_assets');


function my_custom_block_category( $categories ) {
  // 新しいカテゴリーを配列の先頭に追加
  return array_merge(
    $categories,
      array(
          array(
              'slug'  => 'customBlocks',
              'title' => 'カスタムブロック',
          ),
          array(
              'slug'  => 'station',
              'title' => 'サービスステーション',
          ),
          array(
              'slug'  => 'wholesale',
              'title' => '石油課　外販',
          ),
          array(
              'slug'  => 'ikeuchi_shakanai_center',
              'title' => '池内・釈迦内配送センター',
          ),
          array(
              'slug'  => 'sales_maintenance',
              'title' => 'ガス販売／保守',
          ),
          array(
              'slug'  => 'housing_equipment',
              'title' => '住設課　住宅設備',
          ),
          array(
              'slug'  => 'processed_products',
              'title' => '営業部　化工品',
          ),
      ),

  );
}
add_filter( 'block_categories_all', 'my_custom_block_category', 10, 2 );
