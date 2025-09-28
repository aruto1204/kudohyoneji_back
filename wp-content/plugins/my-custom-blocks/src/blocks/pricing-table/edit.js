import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	URLInput,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	RangeControl,
	ColorPicker,
	TextControl,
	ToggleControl,
	TextareaControl,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { plans, columns } = attributes;

	const blockProps = useBlockProps( {
		className: 'pricing-table-editor',
	} );

	const updatePlan = ( index, key, value ) => {
		const newPlans = [ ...plans ];
		newPlans[ index ] = { ...newPlans[ index ], [ key ]: value };
		setAttributes( { plans: newPlans } );
	};

	const updatePlanFeatures = ( planIndex, features ) => {
		const featuresArray = features
			.split( '\n' )
			.filter( ( f ) => f.trim() !== '' );
		updatePlan( planIndex, 'features', featuresArray );
	};

	const addPlan = () => {
		const newPlan = {
			id: Date.now(),
			name: '新しいプラン',
			price: '¥0',
			period: '/月',
			features: [ '機能1' ],
			buttonText: '選択する',
			buttonUrl: '#',
			isPopular: false,
			backgroundColor: '#ffffff',
			textColor: '#333333',
		};
		setAttributes( { plans: [ ...plans, newPlan ] } );
	};

	const removePlan = ( index ) => {
		const newPlans = plans.filter( ( _, i ) => i !== index );
		setAttributes( { plans: newPlans } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'テーブル設定', 'my-custom-blocks' ) }>
					<RangeControl
						label={ __( '列数', 'my-custom-blocks' ) }
						value={ columns }
						onChange={ ( value ) =>
							setAttributes( { columns: value } )
						}
						min={ 1 }
						max={ 4 }
						step={ 1 }
					/>
					<Button onClick={ addPlan } variant="secondary">
						プランを追加
					</Button>
				</PanelBody>

				{ plans.map( ( plan, index ) => (
					<PanelBody
						key={ plan.id }
						title={ `${ plan.name } の設定` }
						initialOpen={ false }
					>
						<TextControl
							label={ __( 'プラン名', 'my-custom-blocks' ) }
							value={ plan.name }
							onChange={ ( value ) =>
								updatePlan( index, 'name', value )
							}
						/>
						<TextControl
							label={ __( '価格', 'my-custom-blocks' ) }
							value={ plan.price }
							onChange={ ( value ) =>
								updatePlan( index, 'price', value )
							}
						/>
						<TextControl
							label={ __( '期間', 'my-custom-blocks' ) }
							value={ plan.period }
							onChange={ ( value ) =>
								updatePlan( index, 'period', value )
							}
						/>
						<TextareaControl
							label={ __(
								'機能（1行に1つ）',
								'my-custom-blocks'
							) }
							value={ plan.features.join( '\n' ) }
							onChange={ ( value ) =>
								updatePlanFeatures( index, value )
							}
						/>
						<TextControl
							label={ __( 'ボタンテキスト', 'my-custom-blocks' ) }
							value={ plan.buttonText }
							onChange={ ( value ) =>
								updatePlan( index, 'buttonText', value )
							}
						/>
						<URLInput
							label={ __( 'ボタンURL', 'my-custom-blocks' ) }
							value={ plan.buttonUrl }
							onChange={ ( value ) =>
								updatePlan( index, 'buttonUrl', value )
							}
						/>
						<ToggleControl
							label={ __(
								'人気プランとして表示',
								'my-custom-blocks'
							) }
							checked={ plan.isPopular }
							onChange={ ( value ) =>
								updatePlan( index, 'isPopular', value )
							}
						/>
						<div>
							<label
								htmlFor={ `background-color-picker-${ index }` }
							>
								{ __( '背景色', 'my-custom-blocks' ) }
							</label>
							<ColorPicker
								id={ `background-color-picker-${ index }` }
								color={ plan.backgroundColor }
								onChange={ ( color ) =>
									updatePlan(
										index,
										'backgroundColor',
										color
									)
								}
							/>
						</div>
						<div style={ { marginTop: '20px' } }>
							<label htmlFor={ `text-color-picker-${ index }` }>
								{ __( 'テキストカラー', 'my-custom-blocks' ) }
							</label>
							<ColorPicker
								id={ `text-color-picker-${ index }` }
								color={ plan.textColor }
								onChange={ ( color ) =>
									updatePlan( index, 'textColor', color )
								}
							/>
						</div>
						{ plans.length > 1 && (
							<Button
								onClick={ () => removePlan( index ) }
								variant="link"
								isDestructive
							>
								このプランを削除
							</Button>
						) }
					</PanelBody>
				) ) }
			</InspectorControls>

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
								{ plan.features.map(
									( feature, featureIndex ) => (
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
									)
								) }
							</ul>

							<div
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
									cursor: 'pointer',
								} }
							>
								{ plan.buttonText }
							</div>
						</div>
					) ) }
				</div>
			</div>
		</>
	);
}
