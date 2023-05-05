import Head from 'next/head';
import Header from './header/header';
import Footer from './footer/footer';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<title>Upol Web</title>
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;