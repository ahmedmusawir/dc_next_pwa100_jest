import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Footer, Header } from 'components/layout';

Router.onRouteChangeStart = url => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export const Layout = ({ children, title, description }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
		<Header />
		{children}

		<Footer>&copy; {new Date().getFullYear()}</Footer>
	</div>
);

export default Layout;
