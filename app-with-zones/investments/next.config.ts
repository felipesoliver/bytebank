/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
const withSvgr = require('next-plugin-svgr')

const {NEXT_PUBLIC_BASE_URL} = process.env

const nextConfig: NextConfig = {
  assetPrefix: '/investments-static',
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
        source: "/",
        destination: `${NEXT_PUBLIC_BASE_URL}/`,
      },
      {
        source: "/account",
        destination: `${NEXT_PUBLIC_BASE_URL}/account`,
      },
      {
        source: "/services",
        destination: `${NEXT_PUBLIC_BASE_URL}/services`,
      },
      {
        source: "/transfers",
        destination: `${NEXT_PUBLIC_BASE_URL}/transfers`,
      },
    ];
  },
  output: "standalone"
};

module.exports = withSvgr(nextConfig)
