const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(path.join(__dirname, "../../tsconfig.json"), [
//   /* mapped paths to share */
// ]);

module.exports = {
  output: {
    uniqueName: "mfe2",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      library: { type: "var", name: "mfe2" },
      filename: "remoteEntry.js",
      exposes: {
        MFE2Module: "./projects/mfe2/src/app/app.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        //"@ngrx/store": { singleton: true, eager: true },
        //"@ngrx/router-store": { singleton: true, eager: true },
        //"state-lib": { singleton: true, eager: true },

        // ...sharedMappings.getDescriptors(),
      },
    }),
    // sharedMappings.getPlugin(),
  ],
};
