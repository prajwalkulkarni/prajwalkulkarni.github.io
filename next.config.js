const isProd = process.env.NODE_ENV === "production";
module.exports = {
  reactStrictMode: true,

  images: {
    // domains: ['raw.githubusercontent.com','ibb.co'],
    domains: ["raw.githubusercontent.com"],
    loader: "imgix",
    path: "",
  },
  assetPrefix: isProd ? "https://prajwalkulkarni-github-io.vercel.app/" : "",
  generateBuildId: async () => {
    // Uses the latest git commit hash as the build ID
    return (
      process.env.VERCEL_GIT_COMMIT_SHA ||
      process.env.GIT_COMMIT_SHA ||
      "development"
    );
  },
};
