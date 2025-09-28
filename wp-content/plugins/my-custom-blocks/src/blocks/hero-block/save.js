import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		title,
		subtitle,
		buttonText,
		buttonUrl,
		backgroundImage,
		textColor,
		overlayOpacity,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'hero-block',
		style: {
			backgroundImage: backgroundImage
				? `url(${ backgroundImage })`
				: 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			color: textColor,
			position: 'relative',
			minHeight: '400px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	} );

	const overlayStyle = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: `rgba(0, 0, 0, ${ overlayOpacity })`,
		zIndex: 1,
	};

	const contentStyle = {
		position: 'relative',
		zIndex: 2,
		textAlign: 'center',
		padding: '40px 20px',
	};

	return (
		<div { ...blockProps }>
			<div style={ overlayStyle }></div>
			<div style={ contentStyle }>
				<RichText.Content
					tagName="h1"
					value={ title }
					style={ {
						fontSize: '3rem',
						fontWeight: 'bold',
						marginBottom: '1rem',
						color: textColor,
					} }
				/>
				<RichText.Content
					tagName="p"
					value={ subtitle }
					style={ {
						fontSize: '1.2rem',
						marginBottom: '2rem',
						color: textColor,
					} }
				/>
				{ buttonText && buttonUrl && (
					<a
						href={ buttonUrl }
						style={ {
							display: 'inline-block',
							padding: '12px 24px',
							backgroundColor: '#007cba',
							color: '#ffffff',
							textDecoration: 'none',
							borderRadius: '4px',
							fontWeight: 'bold',
						} }
					>
						{ buttonText }
					</a>
				) }
			</div>
		</div>
	);
}
