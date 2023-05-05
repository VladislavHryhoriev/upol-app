import Layout from '@/components/layout'
import '@/styles/globals.scss'
import { Roboto } from 'next/font/google'

{/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&family=Roboto:wght@400;900&display=swap" rel="stylesheet" /> */ }

const roboto = Roboto({
	weight: ['400', '900'],
	subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
	return (
		<div className={roboto.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}
