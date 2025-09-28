import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'my-custom-blocks/testimonial-block', {
	apiVersion: 3,
	title: 'お客様の声',
	description: 'お客様の声やレビューを表示するブロック',
	category: 'common',
	icon: 'format-quote',
	supports: {
		align: [ 'left', 'center', 'right' ],
		html: false,
	},
	attributes: {
		testimonial: {
			type: 'string',
			default: 'こちらにお客様の声を入力してください。',
		},
		customerName: {
			type: 'string',
			default: 'お客様名',
		},
		customerTitle: {
			type: 'string',
			default: '役職・会社名',
		},
		customerImage: {
			type: 'string',
			default: '',
		},
		rating: {
			type: 'number',
			default: 5,
		},
		showRating: {
			type: 'boolean',
			default: true,
		},
		backgroundColor: {
			type: 'string',
			default: '#f8f9fa',
		},
		textColor: {
			type: 'string',
			default: '#333333',
		},
	},
	edit: Edit,
	save,
} );
