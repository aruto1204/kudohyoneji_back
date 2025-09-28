import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'my-custom-blocks/pricing-table', {
	apiVersion: 3,
	title: '料金表',
	description: '料金プランを表示するテーブルブロック',
	category: 'common',
	icon: 'list-view',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	attributes: {
		plans: {
			type: 'array',
			default: [
				{
					id: 1,
					name: 'ベーシック',
					price: '¥1,000',
					period: '/月',
					features: [ '機能1', '機能2', '機能3' ],
					buttonText: '選択する',
					buttonUrl: '#',
					isPopular: false,
					backgroundColor: '#ffffff',
					textColor: '#333333',
				},
				{
					id: 2,
					name: 'スタンダード',
					price: '¥2,000',
					period: '/月',
					features: [ '機能1', '機能2', '機能3', '機能4' ],
					buttonText: '選択する',
					buttonUrl: '#',
					isPopular: true,
					backgroundColor: '#ffffff',
					textColor: '#333333',
				},
				{
					id: 3,
					name: 'プレミアム',
					price: '¥3,000',
					period: '/月',
					features: [ '機能1', '機能2', '機能3', '機能4', '機能5' ],
					buttonText: '選択する',
					buttonUrl: '#',
					isPopular: false,
					backgroundColor: '#ffffff',
					textColor: '#333333',
				},
			],
		},
		columns: {
			type: 'number',
			default: 3,
		},
	},
	edit: Edit,
	save,
} );
