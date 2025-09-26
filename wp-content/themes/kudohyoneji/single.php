<?php get_header(); ?>

	<?php if (in_category('news')): ?>
		<?php get_template_part( 'template/news' ); ?>
	<?php elseif (in_category('pickup')): ?>
		<?php get_template_part( 'template/pickup' ); ?>
	<?php else : ?>
		エラー
	<?php endif; ?>

<?php get_footer(); ?>
