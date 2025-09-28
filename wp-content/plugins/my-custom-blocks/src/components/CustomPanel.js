import { PanelBody, PanelRow } from '@wordpress/components';

export default function CustomPanel( {
	title,
	children,
	initialOpen = false,
} ) {
	return (
		<PanelBody title={ title } initialOpen={ initialOpen }>
			<PanelRow>{ children }</PanelRow>
		</PanelBody>
	);
}
