# React App + Wasm-Bindgen MRE

```
wasm.greet is not a function
TypeError: wasm.greet is not a function
    at Module.greet (http://localhost:3000/static/js/node_modules_rust-crate_rust_crate_js.chunk.js:63:8)
    at http://localhost:3000/static/js/bundle.js:92:16
```

This repo is meant to be a trivially simple combination of the latest `create-react-app` and `wasm-bindgen` to demonstrate
that the [getting started guide](https://rustwasm.github.io/docs/wasm-pack/quickstart.html) does
not work out-of-the-box. Steps to produce this:

1. Initialize CRA with `npx create-react-app react-app`
   1. Install `react-app-rewired` in order to override webpack configuration
   2. Create `config-overrides.js` with a simple webassembly configuration
2. Initialize wasm-pack compatible crate with `wasm-pack new` and change almost nothing


## Steps to reproduce

1. Install `yarn`, `wasm-pack`, etc
1. In `rust-crate/`, run `wasm-pack build`
2. In `react-app`, run `yarn install` then `yarn start`.
3. See the app in the browser, click on the only button, see the error