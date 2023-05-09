import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://github.com/FatehAK/vite-plugin-image-optimizer
const DEFAULT_IMG_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|svg|avif|webp)$/i, // excluded webp
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      "sortAttrs",
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
        },
      },
    ],
  },
  png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 25,
  },
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 25,
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 25,
  },
  tiff: {
    // https://sharp.pixelplumbing.com/api-output#tiff
    quality: 25,
  },
  // gif does not support lossless compression
  // https://sharp.pixelplumbing.com/api-output#gif
  gif: {},
  webp: {
    // https://sharp.pixelplumbing.com/api-output#webp
    quality: 25,
  },
  avif: {
    // https://sharp.pixelplumbing.com/api-output#avif
    lossless: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    port: 6969,
  },
  preview: {
    port: 8888,
  },
  plugins: [
    react(),
    viteCompression({ algorithm: "gzip" }),
    ViteImageOptimizer({
      ...DEFAULT_IMG_OPTIONS,
    }),
  ],
});
