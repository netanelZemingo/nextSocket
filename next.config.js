const withPWA = require("next-pwa")({
  dest: "public",
  importScripts: ['/customWorker.js'],
  // fallbacks:{},
  runtimeCaching: [
    {
      handler: "CacheFirst", urlPattern: ({ url }) => {
        console.log(url);
        return url.href.includes("fonts") && url.origin.includes("fonts");
      }, options: { cacheableResponse: { statuses: [0, 200] } },
    },
    // {
    //   handler: "NetworkOnly", urlPattern: ({ url }) => { return url.href.includes("2.jpg"); },
    //   options: {
    //     cacheableResponse: { statuses: [0, 200] }
    //   }
    // },
    // {
    //   handler: "NetworkFirst", urlPattern: ({ url }) => { return url.href.includes("caching"); }, options: {
    //     cacheableResponse: { statuses: [0, 200] }
    //   }
    // }
  ]


});
module.exports = withPWA({
  reactStrictMode: true,
  compiler: {

    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      // fileName?: boolean,
      // Empty by default.
      // topLevelImportPaths?: string[],
      // Defaults to ["index"].
      // meaninglessFileNames?: string[],
      // Enabled by default.
      // cssProp?: boolean,
      // Empty by default.
      // namespace?: string,
      // Not supported yet.
      // minify?: boolean,
      // Not supported yet.
      // transpileTemplateLiterals?: boolean,
      // Not supported yet.
      // pure?: boolean,
    },
  },

});

