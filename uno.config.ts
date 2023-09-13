import { defineConfig, presetUno, presetAttributify, transformerVariantGroup} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  shortcuts: {
    "text-whtho7-h1": "text-8 md:text-10 lg:text-12 md:m-l--24px",
    "text-whtho7-h2": "text-6 md:text-7 lg:text-8",
    "text-whtho7-p": "text-4 md:text-5 lg:text-6",
    "w-whtho7-layout": "m-x-auto w-87.5% max-w-360px md:w-716px md:max-w-none lg:w-972px"
  },
  theme: {
    colors: {
      "whtho7-cyan": "#96fcf3",
      "whtho-bg": "#0d1a1b",
      "whtho7-green": "#2cbe9a",
    },
    fontFamily: {
      "sans-serif": ["Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "sans-serif"],
    },
  },
})