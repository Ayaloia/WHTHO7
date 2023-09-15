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
    "text-whtho7-h3": "text-5 md:text-6 lg:text-7",
    "text-whtho7-p": "text-4 md:text-5 lg:text-6",
    "text-whtho7-small": "text-2 md:text-3 lg:text-4",
    "w-whtho7-layout": "m-x-auto w-87.5% max-w-360px md:w-716px md:max-w-none lg:w-972px",
    "flex-2": "flex-[2_2_0%]",
    "flex-3": "flex-[3_3_0%]",
    "flex-4": "flex-[4_4_0%]",
    "flex-5": "flex-[5_5_0%]",
    "flex-6": "flex-[6_6_0%]",
  },
  theme: {
    colors: {
      "whtho7-cyan": "#96fcf3",
      "whtho7-cyan-2": "#14686a",
      "whtho-bg": "#0d1a1b",
      "whtho7-green": "#2cbe9a",
      "whtho7-blue": "#a3fffe",
      "card-bg": "#1a222a",
    },
    fontFamily: {
      "sans-serif": ["Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "sans-serif"],
    },
  },
})