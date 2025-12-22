import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	typedRoutes: true,

	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
