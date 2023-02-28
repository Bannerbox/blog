const withMarkdoc = require('@markdoc/next.js');

// module.exports = withMarkdoc({ mode: 'static' })({
module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
  trailingSlash: false,
  basePath: '/blog'
}; 
