const path = require("path");
const wasmExtensionRegExp = /\.wasm$/;


module.exports = {
  rules: [
    {
      test: /\.wasm$/,
      type: 'webassembly/sync',
    }
  ],
  // rules: [
  //   {
  //     test: wasmExtensionRegExp,
  //     include: path.resolve(__dirname, "src"),
  //     use: [{ loader: require.resolve("wasm-loader"), options: {} }],
  //   }
  // ],
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true
  },
}