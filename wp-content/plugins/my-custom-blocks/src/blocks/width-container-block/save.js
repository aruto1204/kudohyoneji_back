import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		maxWidth,
		backgroundColor,
		borderRadius,
		marginTop,
		marginBottom,
		paddingTop,
		paddingBottom,
		paddingInline,
		centerContent,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'width-container-block-wrapper',
		style: {
			width: '100%',
			maxWidth: maxWidth || '1200px',
			backgroundColor:
				backgroundColor === 'transparent'
					? 'transparent'
					: backgroundColor || '#EDF9F3',
			borderRadius: borderRadius || '0px',
			marginTop: marginTop || '0px',
			marginBottom: marginBottom || '0px',
			marginLeft: centerContent ? 'auto' : '0',
			marginRight: centerContent ? 'auto' : '0',
			paddingTop: paddingTop || '20px',
			paddingBottom: paddingBottom || '20px',
			paddingLeft: paddingInline || '20px',
			paddingRight: paddingInline || '20px',
			boxSizing: 'border-box',
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
