import React from 'react';
import Headder from './headder';
import Footer from './footer';


export const Layout = (props) => {


	return (
		<div className=''>
			<Headder></Headder>
			<div className='layout-content'>
				{props.children}
			</div>

			<Footer></Footer>
		</div>
	);
};
