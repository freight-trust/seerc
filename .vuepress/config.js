module.exports = {
  title: 'Add $EDI to DApp browsers or MetaMask',
  description: 'Automagically add $EDI to compatible wallets like MetaMask.',
  base: '/watch-token/',
  ga: '',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://vittominacori.github.io/watch-token' }],
    ['meta', { property: 'og:image', content: 'https://freight-public.s3-us-west-1.amazonaws.com/ft_logo-2x.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://freight-public.s3-us-west-1.amazonaws.com/ft_logo-2x.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:title', content: 'Instant Add $EDI to your Wallet' }],
    ['script', { src: '/assets/js/web3.min.js' }],
  ],
  defaultNetwork: 'mainnet',
  infuraProjectId: '333623408a9546b78b8808342c2e73d3',
};
