/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        pathname: "**",
        hostname: "picsum.photos",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

// <div className="relative w-full aspect-square">
//   <Image
//     src="/duck-two-Photoroom.png"
//     alt="Placeholder image"
//     layout="fill"
//   />
// </div>;
