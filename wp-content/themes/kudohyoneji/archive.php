<?php get_header(); ?>
<main class="min-h-screen pt-20 md:pt-28">  <!-- Fv --><div class="w-full h-67 relative overflow-hidden"> <picture class="block w-full h-full object-cover mx-auto"> <source srcset="<?php echo get_template_directory_uri(); ?>/assets/images/00_common/fv.webp " width="1440" height="820" media="(min-width: 768px)" type="image/webp"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/00_common/fv_sp.webp" alt="ファーストビュー" width="1440" height="820" class="block w-full min-h-67 h-auto object-cover aspect-[767/268] md:aspect-[1440/820]"> </picture> <div class="absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-5"> <h1 class="text-[34px] font-bold leading-[1.41] tracking-[0.3em] text-white text-center whitespace-nowrap">News</h1> <p class="font-bold text-white leading-none tracking-wider text-center mt-2">お知らせ</p> </div> </div> <!-- Breadcrumbs --><section class="bg-white px-5 hidden-scrollbar"> <nav class="w-full max-w-290 py-3.25 mx-auto"> <ul class="flex items-center gap-2.5"> <li class=""> <a class="block text-sm leading-[1.42] tracking-wider md:hover:text-green-500 transition-colors duration-300 whitespace-nowrap" href="<?php echo esc_url( home_url( '/' ) ); ?>">TOP</a> </li> <li class="flex items-center gap-2.5 relative before:content-['>'] before:text-sm"> <span class="block text-sm leading-[1.42] tracking-wider whitespace-nowrap">お知らせ</span> </li> </ul> </nav> </section> <!-- news list --><section class="w-full pt-10 pb-20 md:pt-14.75 md:pb-43.75"> <div class="w-full px-5"> <div class="max-w-241 w-full mx-auto"> <ul class="w-full space-y-2 md:space-y-3.75">
          <?php
          $paged = get_query_var('paged') ? get_query_var('paged') : 1;
          // newsカテゴリーの投稿を10件取得
          $news_query = new WP_Query(array(
            'category_name' => 'news',
            'posts_per_page' => 5,
            'post_status' => 'publish',
            'paged' => $paged,
          ));

          if ($news_query->have_posts()) :
            while ($news_query->have_posts()) : $news_query->the_post(); ?>
            <?php get_template_part('template/news'); ?>
          <?php endwhile;
          wp_reset_postdata();
          endif; ?>
</ul>

  <?php
    $args = array(
        'mid_size' => 1,
        'prev_text' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4.5 rotate-180"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg> <p class="text-base sm:text-lg font-semibold leading-none tracking-[0.2em]">前に戻る</p> ',
        'next_text' => '<p class="text-base sm:text-lg font-semibold leading-none tracking-[0.2em]">もっと見る</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4.5"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" class="fill-current"></path></svg>',
        'screen_reader_text' => ' ',
    );
    the_posts_pagination($args);
  ?>
</div> </div> </section>  </main>
<?php get_footer(); ?>
