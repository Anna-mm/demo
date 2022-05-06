export default {
    input: ["./a.js"],
    output: {
      file: "./dist/bundle.js",
      // format: "umd",
      // format: "cjs",
      // format: "iife",
      // format: "esm",
      format: "amd",
      name: "experience",
    },
};