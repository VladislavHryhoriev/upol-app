/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['dummyimage.com'],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/biography',
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
