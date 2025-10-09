<?php get_header();?>
<main class="min-h-screen pt-20 md:pt-28">
  <div class="w-full h-149.25 mt-10 -mb-6 relative overflow-hidden"> <picture class="block max-w-[1467px] w-full h-full object-cover mx-auto"> <source srcset="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/top_fv.webp " width="1467" height="584" media="(min-width: 1024px)" type="image/webp"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/top_fv_sp.webp" alt="ファーストビュー" width="1467" height="584" class="block w-full h-full object-cover mx-auto"> </picture> <div class="max-w-155 w-full absolute z-10 top-30 left-1/2 -translate-x-1/2 h-full flex flex-col items-center px-5 md:px-0"> <h1 class="text-4xl sm:text-5xl md:text-[65px] font-zen font-bold leading-[1.44] tracking-widest text-rose-600 text-center md:ml-auto whitespace-nowrap">さらなる未来へ。</h1> <p class="text-xl sm:text-2xl md:text-3xl font-poppins font-medium leading-[1.4] tracking-[0.2em] text-center mt-0.25">Toward the future.</p> <div class="w-0.5 h-11 bg-green-500 mx-auto mt-2.25"></div> <p class="text-lg font-semibold leading-[1.66] sm:tracking-wider text-center mt-6.5">昭和26年創業以来、長年培ってきた技術力・対応力で、<br>地域の皆様のカーライフ・ホームライフの安心・安全をお届けする、<br>秋田県大館市の総合エネルギー企業です。</p> </div> </div><section class="w-full bg-green-500 pt-7.5 md:pt-11.5 pb-10 md:pb-15"> <div class="w-full px-5"> <div class="max-w-295  mx-auto"> <!-- section title --><div class="flex flex-col items-center justify-center gap-2.5 md:gap-3.5"> <h2 class="text-3xl md:text-4xl font-bold leading-none tracking-widest md:tracking-[0.3em] text-center text-white font-poppins">PICK UP!</h2> <p class="text-base font-poppins font-medium leading-none tracking-[0.2em] text-center text-white font-poppins">お得な情報</p> </div> <div class="w-full mt-10 md:mt-13 px-10 md:px-14 lg:px-16.5 relative"> <!-- Slider main container --> <div class="swiper"> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <!-- Slides -->
    <?php
      $args = array(
        'category_name' => 'pickup',
        'posts_per_page' => -1 // 全ての投稿を取得
      );
      $posts = get_posts( $args );

      // 投稿が存在する場合のみ処理
      if ( !empty($posts) ) {
        $posts_count = count($posts);

        // 6件分のスライドを出力
        for ( $i = 0; $i < 6; $i++ ) {
          // 投稿数で割った余りを使って循環させる
          $post_index = $i % $posts_count;
          $post = $posts[$post_index];
          setup_postdata( $post );

          // 画像URLを取得
          $image_url = '';

          // アイキャッチ画像が設定されている場合
          if ( has_post_thumbnail() ) {
            $image_url = get_the_post_thumbnail_url( $post->ID, 'medium' );
          } else {
            // アイキャッチがない場合、投稿内容から最初の画像を取得
            $content = get_the_content();
            preg_match('/<img.+?src=[\'"]([^\'"]+)[\'"].*?>/i', $content, $matches);
            if ( !empty($matches[1]) ) {
              $image_url = $matches[1];
            }
          }
    ?>
    <div class="swiper-slide"> <a href="<?php the_permalink(); ?>" class="block border-5 border-white md:hover:opacity-80 overflow-hidden aspect-[327/215]" style="background-image: url('<?php echo esc_url($image_url); ?>'); background-size: cover; background-position: center"></a></div>
    <?php
        }
        wp_reset_postdata(); // 直前のクエリを復元する
      }
    ?>
   </div> </div> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> </div> </div> </div> </section>
  <section class="w-full bg-white pb-15 md:pb-21"> <div class="w-full px-5"> <div class="max-w-140 md:max-w-192.5  mx-auto"> <div class="w-0.5 h-15 bg-green-500 mx-auto"></div> <!-- section title --><div class="flex flex-col items-center justify-center gap-2.5 md:gap-3.5 mt-3.5"> <h2 class="text-3xl md:text-4xl font-bold leading-none tracking-widest md:tracking-[0.3em] text-center text-brown-500">お知らせ</h2> <p class="text-base font-poppins font-medium leading-none tracking-[0.2em] text-center text-green-500">News</p> </div> <ul class="w-full mt-10 md:mt-13">
    <?php
      $args = array(
        'category_name' => 'news',
        'posts_per_page' => 4, // 表示件数の指定
        'post_status' => 'publish',
      );
      $posts = get_posts( $args );
      $i = 0;
      foreach ( $posts as $post ): // ループの開始
        setup_postdata( $post ); // 記事データの取得
        // 投稿のカテゴリーを取得
        $categories = get_the_category($post->ID);
        $category_name = '';
        if ( !empty($categories) ) {
          // 最初のカテゴリー名を取得
          $category_name = esc_html($categories[0]->name);
        }
    ?>
    <li class="w-full border-b border-gray-700">
      <a class="flex gap-2 md:gap-3.5 items-start flex-wrap px-2 md:px-2.5 pt-5 pb-4 md:hover:bg-green-300" href="<?php the_permalink(); ?>">
        <p class="text-sm font-poppins font-medium leading-tight md:tracking-[0.15em] mt-1 md:mt-0.5 whitespace-nowrap"><?php the_time('Y.m.d'); ?></p>
        <div class="flex items-center justify-between bg-green-500 px-3 md:px-4.25 py-1.5">
          <p class="text-sm font-poppins font-medium leading-none md:tracking-[0.15em] text-white whitespace-nowrap">
            <?php echo $category_name; ?>
          </p>
        </div>
        <h3 class="block w-full md:w-auto text-base leading-snug mt-0.5">
        <?php //タイトル表示の文字制限
          if(mb_strlen($post->post_title)>30) {
            $title= mb_substr($post->post_title,0,30) ;
            echo $title . '...';
          } else {
            echo $post->post_title;
          }
        ?></h3>
      </a>
    </li>
    <?php
      endforeach; // ループの終了
      wp_reset_postdata(); // 直前のクエリを復元する
    ?>
  </ul> <div class="max-w-94 md:max-w-93 w-full h-16.5 mt-10 md:mt-14.25 mx-auto"> <a class="w-full h-full pl-4 sm:pl-9.75 pr-4 sm:pr-5.5 flex items-center justify-between gap-2.5 bg-green-500 text-white border-1 border-green-500 md:hover:text-green-500 md:hover:bg-white  transition-all duration-300" href="<?php echo esc_url( home_url( '/category/news' ) ); ?>"> <p class="text-base sm:text-lg font-semibold leading-none tracking-[0.2em]">お知らせ一覧</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4.5"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> </a> </div> </div> </div> </section><section class="w-full pb-15 md:pb-25 bg-white relative before:content-[''] before:absolute before:inset-0 before:bg-green-500 before:opacity-10 before:z-0"> <div class="w-full px-5"> <div class="max-w-192.5 h-auto mx-auto relative z-10"> <div class="w-0.5 h-15 bg-green-500 mx-auto"></div> <div class="flex flex-col items-center justify-center mt-9"> <h2 class="text-base font-bold leading-none tracking-wider text-brown-500 text-center">私たちについて</h2> <p class="text-3xl sm:text-4xl md:text-[50px] font-bold leading-[1.42] sm:tracking-[0.06em] text-center mt-3">地域に根差して70余年<br>お客様の生活を<br>トータルにサポート</p> <p class="text-lg font-medium leading-loose sm:tracking-wider text-center mt-6 md:mt-10">私たちは、燃料供給会社として歩んでおります。<br>真剣に未来を考え環境に優しい商品を<br>「お客様第一主義」をモットーに、<br>あらゆるシーンで役立つサービスを<br>ご提供させていただきます。</p> </div> <div class="max-w-94 w-full mt-9 mx-auto"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/about.webp" alt="イメージ画像" width="366" height="488" class="w-full h-auto object-cover aspect-[366/488]" loading="lazy"> <div class="w-full h-16.5 mt-4.5"> <a class="w-full h-full pl-4 sm:pl-9.75 pr-4 sm:pr-5.5 flex items-center justify-between gap-2.5 bg-green-500 text-white border-1 border-green-500 md:hover:text-green-500 md:hover:bg-white  transition-all duration-300" href="<?php echo esc_url( home_url( '/company' ) ); ?>"> <p class="text-base sm:text-lg font-semibold leading-none tracking-[0.2em]">会社概要</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4.5"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> </a> </div> </div> </div> </div> <div class="hidden md:block max-w-360 w-full h-full absolute top-0 left-1/2 -translate-x-1/2"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/about_bg01.webp" alt="背景画像" width="508" height="420" class="absolute top-[21.9%] left-0 max-w-88 min-w-40 w-[24.4%] h-auto object-cover aspect-[508/420] z-1" loading="lazy"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/about_bg02.webp" alt="背景画像" width="500" height="334" class="absolute top-[36%] lg:top-[39.5%] left-10 lg:left-[11.1%] max-w-80 min-w-36 w-[23%] h-auto object-cover aspect-[500/334] z-2" loading="lazy"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/about_bg03.webp" alt="背景画像" width="257" height="177" class="absolute bottom-[11.7%] left-5 lg:left-[4.4%] max-w-64 min-w-48 w-[18%] h-auto object-cover aspect-[257/177] z-2" loading="lazy"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/about_bg04.webp" alt="背景画像" width="477" height="323" class="absolute top-[15.3%] right-5 lg:right-[3.3%] max-w-79 min-w-40 w-[22%] h-auto object-cover aspect-[477/323] z-2" loading="lazy"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/about_bg05.webp" alt="背景画像" width="362" height="245" class="absolute top-[48.5%] right-0 max-w-79 min-w-56 w-[22%] h-auto object-cover aspect-[362/245] z-2" loading="lazy"> </div> </section><section class="w-full pt-7.5 md:pt-11.5 pb-15 md:pb-26 bg-white"> <div class="w-full px-5"> <div class="max-w-310 h-auto mx-auto"> <div class="w-0.5 h-15 bg-green-500 mx-auto"></div> <!-- section title --><div class="flex flex-col items-center justify-center gap-2.5 md:gap-3.5 mt-7.5"> <h2 class="text-3xl md:text-4xl font-bold leading-none tracking-widest md:tracking-[0.3em] text-center text-brown-500">事業案内</h2> <p class="text-base font-poppins font-medium leading-none tracking-[0.2em] text-center text-green-500">Business</p> </div> <div class="flex flex-col lg:flex-row items-center justify-between gap-x-10 gap-y-14 md:gap-y-20 mt-15 md:mt-25 lg:pl-2.5"> <ul class="max-w-174.5 md:min-w-156 w-full grid grid-cols-2 gap-2 sm:gap-5 md:gap-x-11 md:gap-y-9.75"> <li class="w-full h-auto aspect-[327/285]"> <a href="<?php echo esc_url( home_url( '/business#petroleum' ) ); ?>" class="block w-full h-full relative group"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/petroleum.webp" alt="イメージ画像" width="327" height="285" class="w-full h-auto object-cover" loading="lazy"> <div class="w-full h-full sm:h-23 flex flex-col items-center justify-center absolute bottom-0 left-0 text-white md:group-hover:h-full transition-all duration-500 ease-in-out"> <div class="absolute bottom-0 left-0 inset-0 w-full h-full mix-blend-multiply bg-gray-500"></div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="absolute top-2.5 sm:top-[7.5px] right-1 sm:right-2.25 w-4 h-4.5 origin-center -rotate-45"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> <h3 class="text-base sm:text-[22px] font-bold leading-none sm:tracking-[0.1em] text-center relative z-1">石油事業部</h3> <p class="text-sm font-poppins font-medium leading-[1.42] sm:tracking-[0.1em] text-center relative z-1">Petroleum Division</p> </div> </a> </li><li class="w-full h-auto aspect-[327/285]"> <a href="<?php echo esc_url( home_url( '/business#living' ) ); ?>" class="block w-full h-full relative group"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/living.webp" alt="イメージ画像" width="327" height="285" class="w-full h-auto object-cover" loading="lazy"> <div class="w-full h-full sm:h-23 flex flex-col items-center justify-center absolute bottom-0 left-0 text-white md:group-hover:h-full transition-all duration-500 ease-in-out"> <div class="absolute bottom-0 left-0 inset-0 w-full h-full mix-blend-multiply bg-green-500"></div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="absolute top-2.5 sm:top-[7.5px] right-1 sm:right-2.25 w-4 h-4.5 origin-center -rotate-45"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> <h3 class="text-base sm:text-[22px] font-bold leading-none sm:tracking-[0.1em] text-center relative z-1">リビング事業部</h3> <p class="text-sm font-poppins font-medium leading-[1.42] sm:tracking-[0.1em] text-center relative z-1">Living Division</p> </div> </a> </li><li class="w-full h-auto aspect-[327/285]"> <a href="<?php echo esc_url( home_url( '/business#sales' ) ); ?>" class="block w-full h-full relative group"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/sales.webp" alt="イメージ画像" width="327" height="285" class="w-full h-auto object-cover" loading="lazy"> <div class="w-full h-full sm:h-23 flex flex-col items-center justify-center absolute bottom-0 left-0 text-white md:group-hover:h-full transition-all duration-500 ease-in-out"> <div class="absolute bottom-0 left-0 inset-0 w-full h-full mix-blend-multiply bg-gray-500"></div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="absolute top-2.5 sm:top-[7.5px] right-1 sm:right-2.25 w-4 h-4.5 origin-center -rotate-45"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> <h3 class="text-base sm:text-[22px] font-bold leading-none sm:tracking-[0.1em] text-center relative z-1">営業部</h3> <p class="text-sm font-poppins font-medium leading-[1.42] sm:tracking-[0.1em] text-center relative z-1">Sales department</p> </div> </a> </li> <li class="w-full h-auto aspect-[327/285]"> <a href="<?php echo esc_url( home_url( '/business' ) ); ?>" class="flex flex-col items-center justify-center gap-5 sm:gap-8 md:gap-13 pt-6 sm:pt-10 md:pt-15.5 w-full h-full bg-green-500 text-white border-1 border-green-500 md:hover:bg-white md:hover:text-green-500 transition-all duration-300"> <h3 class="text-xl sm:text-2xl font-semibold leading-none sm:tracking-[0.2em] text-center">事業案内一覧</h3> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-10 sm:w-14.75 h-auto aspect-[52/59]"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> </a> </li> </ul> <div class="max-w-110 w-full"> <div class="w-full h-auto flex flex-col gap-3 sm:gap-5 md:gap-7 "> <p class="text-2xl md:text-[26px] font-bold leading-[1.53] sm:tracking-[0.3em]">各種燃料・ホームライフ全般なんでもご相談ください<br>私たちが共に解決いたします</p> <p class="text-base md:text-lg font-semibold leading-[1.66] tracking-wider">昭和26年創業以来、長年培ってきた技術力・対応力で、地域の皆様のカーライフ・ホームライフの安心・安全をお届けする、秋田県の総合エネルギー企業です。</p> </div> <ul class="grid grid-cols-3 gap-x-6.5 gap-y-3 mt-10 md:mt-14"> <li class="w-full h-auto aspect-[120/120]"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/business01.webp" alt="アイコン" width="120" height="120" class="w-full h-auto object-cover" loading="lazy"> </li><li class="w-full h-auto aspect-[120/120]"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/business02.webp" alt="アイコン" width="120" height="120" class="w-full h-auto object-cover" loading="lazy"> </li><li class="w-full h-auto aspect-[120/120]"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/business03.webp" alt="アイコン" width="120" height="120" class="w-full h-auto object-cover" loading="lazy"> </li><li class="w-full h-auto aspect-[120/120]"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/business04.webp" alt="アイコン" width="120" height="120" class="w-full h-auto object-cover" loading="lazy"> </li><li class="w-full h-auto aspect-[120/120]"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/business05.webp" alt="アイコン" width="120" height="120" class="w-full h-auto object-cover" loading="lazy"> </li><li class="w-full h-auto aspect-[120/120]"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/01_top/business06.webp" alt="アイコン" width="120" height="120" class="w-full h-auto object-cover" loading="lazy"> </li> </ul> </div> </div> </div> </div> </section>
</main>
<?php get_footer(); ?>
