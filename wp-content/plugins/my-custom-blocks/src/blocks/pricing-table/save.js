import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { plans, columns } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'pricing-table',
	} );

	return (
		<div { ...blockProps }>
			<div
				style={ {
					display: 'grid',
					gridTemplateColumns: `repeat(${ Math.min(
						columns,
						plans.length
					) }, 1fr)`,
					gap: '20px',
					padding: '20px',
				} }
			>
				{ plans.map( ( plan ) => (
					<div
						key={ plan.id }
						style={ {
							backgroundColor: plan.backgroundColor,
							color: plan.textColor,
							border: plan.isPopular
								? '3px solid #007cba'
								: '1px solid #e0e0e0',
							borderRadius: '8px',
							padding: '30px 20px',
							textAlign: 'center',
							position: 'relative',
						} }
					>
						{ plan.isPopular && (
							<div
								style={ {
									position: 'absolute',
									top: '-10px',
									left: '50%',
									transform: 'translateX(-50%)',
									backgroundColor: '#007cba',
									color: '#ffffff',
									padding: '5px 15px',
									borderRadius: '15px',
									fontSize: '12px',
									fontWeight: 'bold',
								} }
							>
								人気
							</div>
						) }

						<h3
							style={ {
								fontSize: '24px',
								fontWeight: 'bold',
								marginBottom: '10px',
								color: plan.textColor,
							} }
						>
							{ plan.name }
						</h3>

						<div style={ { marginBottom: '20px' } }>
							<span
								style={ {
									fontSize: '36px',
									fontWeight: 'bold',
									color: plan.textColor,
								} }
							>
								{ plan.price }
							</span>
							<span
								style={ {
									fontSize: '16px',
									color: plan.textColor,
									opacity: 0.8,
								} }
							>
								{ plan.period }
							</span>
						</div>

						<ul
							style={ {
								listStyle: 'none',
								padding: '0',
								margin: '0 0 30px 0',
							} }
						>
							{ plan.features.map( ( feature, featureIndex ) => (
								<li
									key={ featureIndex }
									style={ {
										padding: '8px 0',
										borderBottom:
											'1px solid rgba(0,0,0,0.1)',
										color: plan.textColor,
									} }
								>
									✓ { feature }
								</li>
							) ) }
						</ul>

						<a
							href={ plan.buttonUrl }
							style={ {
								display: 'inline-block',
								padding: '12px 24px',
								backgroundColor: plan.isPopular
									? '#007cba'
									: '#6c757d',
								color: '#ffffff',
								textDecoration: 'none',
								borderRadius: '4px',
								fontWeight: 'bold',
							} }
						>
							{ plan.buttonText }
						</a>
					</div>
				) ) }
			</div>
		</div>
	);
}
