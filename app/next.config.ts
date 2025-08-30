import type { NextConfig } from "next";
const withSvgr = require('next-plugin-svgr')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  svgrOptions: {
    titleProp: true,
    icon: true,
  },
};

module.exports = withSvgr(nextConfig)
