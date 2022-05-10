const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  
  module.exports = withBundleAnalyzer({ 
    // put the rest of config here
  })