<main class="min-h-screen pt-20 md:pt-28">  <!-- Fv --><div class="w-full h-67 relative overflow-hidden"> <picture class="block w-full h-full object-cover mx-auto"> <source srcset="<?php echo get_template_directory_uri(); ?>/assets/images/00_common/fv.webp " width="1440" height="820" media="(min-width: 768px)" type="image/webp"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/00_common/fv_sp.webp" alt="ファーストビュー" width="1440" height="820" class="block w-full min-h-67 h-auto object-cover aspect-[767/268] md:aspect-[1440/820]"> </picture> <div class="absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-5"> <h1 class="text-[34px] font-bold leading-[1.41] tracking-[0.3em] text-white text-center whitespace-nowrap">PICK UP!</h1> <p class="font-bold text-white leading-none tracking-wider text-center mt-2">インフォメーション</p> </div> </div> <!-- Breadcrumbs --><section class="bg-white px-5 hidden-scrollbar"> <nav class="w-full max-w-290 py-3.25 mx-auto"> <ul class="flex items-center gap-2.5"> <li class=""> <a class="block text-sm leading-[1.42] tracking-wider md:hover:text-green-500 transition-colors duration-300 whitespace-nowrap" href="<?php echo esc_url( home_url( '/' ) ); ?>">TOP</a> </li> <li class="flex items-center gap-2.5 relative before:content-['>'] before:text-sm"> <span class="block text-sm leading-[1.42] tracking-wider whitespace-nowrap">インフォメーション</span> </li> </ul> </nav> </section> <!-- news list --><section class="w-full pt-10 pb-20 md:pt-14.75 md:pb-43.75"> <div class="w-full px-5"> <div class="max-w-241 w-full mx-auto"> <ul class="w-full space-y-2 md:space-y-3.75">
          <?php
          $paged = get_query_var('paged') ? get_query_var('paged') : 1;
          // pickupカテゴリーの投稿を10件取得
          $news_query = new WP_Query(array(
            'category_name' => 'pickup',
            'posts_per_page' => 10,
            'post_status' => 'publish',
            'paged' => $paged,
          ));

          if ($news_query->have_posts()) :
            while ($news_query->have_posts()) : $news_query->the_post(); ?>
              <li class="w-full border-b-1 border-gray-400 border-dotted"> <a href="<?php the_permalink(); ?>" class="block pb-2 md:pb-4  md:hover:bg-green-300 transition-all duration-300"> <h3 class="text-xl md:text-2xl font-bold leading-normal"><?php the_title(); ?></h3> <div class="flex items-center gap-2 text-gray-400 mt-1.5 md:mt-2.5"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4"><path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" class="fill-current"></path></svg> <p class="text-sm leading-[1.42] "><?php the_time('Y.m.d'); ?></p> </div> </a> </li>
          <?php endwhile;
          wp_reset_postdata();
          endif; ?>
</ul>

  <?php custom_pagination(); ?>
</div> </div> </section>  </main>
