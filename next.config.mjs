/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/recap/2016',
        destination: '/recap/2016/index.html',
      },
      {
        source: '/recap/2017',
        destination: '/recap/2017/index.html',
      },
      {
        source: '/recap/2018',
        destination: '/recap/2018/index.html',
      },
      {
        source: '/recap/2019',
        destination: '/recap/2019/index.html',
      },
      {
        source: '/recap/2022/:path*', //wildcard path match for all routes in 2022 site
        destination: '/recap/2022/index.html',
      },
      {
        source: '/recap/2023/:path*',
        destination: '/recap/2023/index.html',
      },
    ];
  },
};

export default nextConfig;
