module.exports = {
    images: {
        domains: [
            'links.papareact.com'
        ],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/dashboard',
            permanent: true,
          },
        ]
      },
}