import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: "/eye-care-centre-NB",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // disables the Image Optimization API
  },
};
 
export default withNextIntl(nextConfig);