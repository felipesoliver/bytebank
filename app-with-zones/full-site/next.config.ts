/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
const withSvgr = require('next-plugin-svgr')

const {NEXT_PUBLIC_INVESTMENTS_BASE_URL} = process.env

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.tsx',
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/investments',
        destination: `${NEXT_PUBLIC_INVESTMENTS_BASE_URL}/`,
      },
      {
        source: "/investments-static/_next/:path+",
        destination: `${NEXT_PUBLIC_INVESTMENTS_BASE_URL}/investments-static/_next/:path+`,
      },
    ];
  },
};

module.exports = withSvgr(nextConfig)
