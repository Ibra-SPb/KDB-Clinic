import React from 'react';
import '../Footer/Footer.scss';

const Footer = (): JSX.Element => (
	<div className='footer center_footer'>
		<div className='social_icons'>
			<img
				className='first_icon'
				src='/IMG/SVGICons/telegram.svg'
			/>
			<img
				className='second_icon'
				src='/IMG/SVGICons/youtube.svg'
			/>
			<img
				className='third_icon'
				src='/IMG/SVGICons/facebook.svg'
			/>
		</div>
		<p className='footer_title'> Powered by Elbrus Bootcamp</p>
	</div>
);

export default Footer;
