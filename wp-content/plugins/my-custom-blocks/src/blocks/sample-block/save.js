import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, alignment, showTitle } = attributes;

	const blockProps = useBlockProps.save( {
		className: `has-text-align-${ alignment }`,
	} );

	return (
		<div { ...blockProps }>
			{ showTitle && <h3>サンプルブロック</h3> }

			<RichText.Content tagName="p" value={ content } />
		</div>
	);
}
