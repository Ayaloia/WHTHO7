import { defineConfig, presetUno, presetAttributify, transformerVariantGroup} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      "whtho7-cyan": "#96fcf3",
      "whtho-bg": "#0d1a1b"
    },
    fontFamily: {
      "sans-serif": ["Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "sans-serif"],
    },
  },
})