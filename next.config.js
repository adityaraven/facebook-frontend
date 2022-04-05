/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["upload.wikimedia.org" ,
     "logos-world.net",
      "platform-lookaside.fbsbx.com",
       "www.rollingstone.com",
       "images.pexels.com"],
  },
};

module.exports = nextConfig
