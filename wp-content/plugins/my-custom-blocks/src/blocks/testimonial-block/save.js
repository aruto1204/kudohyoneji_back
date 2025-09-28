import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		testimonial,
		customerName,
		customerTitle,
		customerImage,
		rating,
		showRating,
		backgroundColor,
		textColor,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'testimonial-block',
		style: {
			backgroundColor,
			color: textColor,
			padding: '30px',
			borderRadius: '8px',
			border: '1px solid #e0e0e0',
		},
	} );

	const renderStars = ( ratingValue ) => {
		const stars = [];
		for ( let i = 1; i <= 5; i++ ) {
			stars.push(
				<span
					key={ i }
					style={ {
						color: i <= ratingValue ? '#ffc107' : '#e0e0e0',
						fontSize: '20px',
						marginRight: '2px',
					} }
				>
					★
				</span>
			);
		}
		return stars;
	};

	return (
		<div { ...blockProps }>
			<div style={ { marginBottom: '20px' } }>
				<div
					style={ {
						fontSize: '48px',
						color: '#007cba',
						lineHeight: '1',
						marginBottom: '10px',
					} }
				>
					&ldquo;
				</div>
				<RichText.Content
					tagName="blockquote"
					value={ testimonial }
					style={ {
						fontSize: '18px',
						lineHeight: '1.6',
						fontStyle: 'italic',
						margin: '0',
						color: textColor,
					} }
				/>
			</div>

			{ showRating && (
				<div style={ { marginBottom: '15px' } }>
					{ renderStars( rating ) }
				</div>
			) }

			<div
				style={ { display: 'flex', alignItems: 'center', gap: '15px' } }
			>
				{ customerImage && (
					<img
						src={ customerImage }
						alt={ customerName }
						style={ {
							width: '60px',
							height: '60px',
							borderRadius: '50%',
							objectFit: 'cover',
						} }
					/>
				) }
				<div>
					<div
						style={ {
							fontWeight: 'bold',
							fontSize: '16px',
							marginBottom: '5px',
							color: textColor,
						} }
					>
						{ customerName }
					</div>
					<div
						style={ {
							fontSize: '14px',
							color: textColor,
							opacity: 0.8,
						} }
					>
						{ customerTitle }
					</div>
				</div>
			</div>
		</div>
	);
}
