/** @type {import('next').NextConfig} */
const nextConfig = {
    //temporary
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;
