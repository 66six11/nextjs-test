/** @type {import('next').NextConfig} */

// next.config.js
const isProd = process.env.NODE_ENV === 'production';



const nextConfig = {
   
    basePath: isProd ? '/nextjs-test' : '',
    assetPrefix: isProd ? '/nextjs-test/' : '',
    
    
   
};


export default nextConfig;
