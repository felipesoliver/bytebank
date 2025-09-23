/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
const withSvgr = require('next-plugin-svgr')

const nextConfig: NextConfig = {
  assetPrefix: '/investments-static',
  basePath: '/investments',
  turbopack: {
    root: __dirname,
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true
            },
          },
        ],
        as: '*.tsx',
      },
    },
  },
  output: "standalone"
};

module.exports = withSvgr(nextConfig)
