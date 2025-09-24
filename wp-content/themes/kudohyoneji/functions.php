<?php

function add_link_files() {
  wp_enqueue_style( 'style', get_stylesheet_directory_uri().'/assets/css/index.css');

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

// デフォルトのスタイルとjQueryを削除
function my_delete_plugin() {
  wp_dequeue_script('jquery');
  wp_dequeue_style('wp-block-library');
}
add_action('wp_enqueue_scripts', 'my_delete_plugin');

// カスタムメニューの登録
function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __('ヘッダーメニュー'),
      'mobile-menu' => __('モバイルメニュー'),
      'footer-menu' => __('フッターメニュー'),
      'sitemap-menu' => __('サイトマップメニュー'),
    )
  );
}
add_action('init', 'register_my_menus');

//archive.phpの2ページ目以降を表示
// function modify_news_category_query($query) {
//   if (!is_admin() && $query->is_main_query()) {
//       if (is_category('news')) {
//           $query->set('posts_per_page', 1);
//       }
//   }
// }
// add_action('pre_get_posts', 'modify_news_category_query');

// archive.phpの2ページ目以降を表示
function post_has_archive( $args, $post_type ) {
	if ( 'post' == $post_type ) {
		$args['rewrite'] = true;
		$args['has_archive'] = 'news'; //一覧ページのスラッグ名
	}
	return $args;
}
add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );


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
