/**
 * クラス名を結合するヘルパー
 *
 * @param {...string} classes - 結合するクラス名
 * @return {string} 結合されたクラス名
 */
export function classNames( ...classes ) {
	return classes.filter( Boolean ).join( ' ' );
}

/**
 * 属性の安全な更新
 *
 * @param {Function} setAttributes - 属性設定関数
 * @param {string}   key           - 属性キー
 * @param {*}        value         - 属性値
 */
export function updateAttribute( setAttributes, key, value ) {
	setAttributes( { [ key ]: value } );
}

/**
 * メディア情報を取得
 *
 * @param {number} mediaId - メディアID
 * @return {Object|null} メディア情報またはnull
 */
export function getMediaDetails( mediaId ) {
	if ( ! mediaId ) {
		return null;
	}

	return wp.media.attachment( mediaId ).get();
}
