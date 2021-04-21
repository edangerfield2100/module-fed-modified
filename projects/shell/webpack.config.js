const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "../../tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "shell",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        mfe1: "mfe1@http://localhost:3002/remoteEntry.js",
        mfe2: "mfe2@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "state-lib": { singleton: true, eager: true },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
