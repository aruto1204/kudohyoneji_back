import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { content, alignment, showTitle } = attributes;

	const blockProps = useBlockProps( {
		className: `has-text-align-${ alignment }`,
	} );

	return (
		<>
			<BlockControls>
				<AlignmentControl
					value={ alignment }
					onChange={ ( newAlignment ) =>
						setAttributes( {
							alignment: newAlignment || 'left',
						} )
					}
				/>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( '表示設定', 'my-custom-blocks' ) }>
					<ToggleControl
						label={ __( 'タイトルを表示', 'my-custom-blocks' ) }
						checked={ showTitle }
						onChange={ ( value ) =>
							setAttributes( { showTitle: value } )
						}
					/>

					<SelectControl
						label={ __( '配置', 'my-custom-blocks' ) }
						value={ alignment }
						options={ [
							{
								label: __( '左寄せ', 'my-custom-blocks' ),
								value: 'left',
							},
							{
								label: __( '中央', 'my-custom-blocks' ),
								value: 'center',
							},
							{
								label: __( '右寄せ', 'my-custom-blocks' ),
								value: 'right',
							},
						] }
						onChange={ ( newAlignment ) =>
							setAttributes( { alignment: newAlignment } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ showTitle && (
					<h3>{ __( 'サンプルブロック', 'my-custom-blocks' ) }</h3>
				) }

				<RichText
					tagName="p"
					value={ content }
					onChange={ ( newContent ) =>
						setAttributes( { content: newContent } )
					}
					placeholder={ __(
						'テキストを入力してください…',
						'my-custom-blocks'
					) }
				/>
			</div>
		</>
	);
}
