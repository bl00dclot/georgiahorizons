import type { NextConfig } from "next";

// Format CSP header for readability while ensuring it works when compiled
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`.replace(/\n/g, '');

const nextConfig: NextConfig = {
  // Add headers function to the main config object
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
  
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    interface FileLoaderRule {
      test?: RegExp;
      issuer?: object;
      exclude?: RegExp;
      [key: string]: unknown; // Allow additional properties
    }

    const fileLoaderRule: FileLoaderRule | undefined = config.module.rules.find((rule: FileLoaderRule) => 
      rule.test?.toString().includes('\\.svg')
    );

    if (fileLoaderRule) {
      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;
      
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] }, // exclude if *.svg?url
          use: ['@svgr/webpack'],
        }
      );
    }

    return config;
  }
};

export default nextConfig;