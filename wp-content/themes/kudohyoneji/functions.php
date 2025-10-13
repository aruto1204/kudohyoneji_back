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
