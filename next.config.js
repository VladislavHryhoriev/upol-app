/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['dummyimage.com']
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/biography',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
