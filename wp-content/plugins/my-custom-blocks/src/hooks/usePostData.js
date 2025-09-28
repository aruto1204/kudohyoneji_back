import { useSelect } from '@wordpress/data';

/**
 * 投稿データを取得するカスタムフック
 *
 * @param {string} postType  - 投稿タイプ
 * @param {Object} queryArgs - クエリ引数
 * @return {Array|null} 投稿データ配列
 */
export function usePostData( postType = 'post', queryArgs = {} ) {
	return useSelect(
		( select ) => {
			const { getEntityRecords } = select( 'core' );

			return getEntityRecords( 'postType', postType, {
				per_page: 10,
				status: 'publish',
				...queryArgs,
			} );
		},
		[ postType, queryArgs ]
	);
}

/**
 * 現在の投稿メタデータを操作するフック
 */
export function usePostMeta() {
	return useSelect( ( select ) => {
		const { getCurrentPost } = select( 'core/editor' );
		return getCurrentPost()?.meta || {};
	} );
}
