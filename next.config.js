/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/resume.pdf',
        destination: 'https://media-cdn.viranchee.com/cf-viranchee-com/production/media/document-6daf6dcc3ebe8da754bb1c07140772d3.pdf',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
