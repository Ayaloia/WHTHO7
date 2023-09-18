import {
    defineConfig,
    presetUno,
    presetAttributify,
    transformerVariantGroup,
} from "unocss";

export default defineConfig({
    presets: [presetUno(), presetAttributify()],
    transformers: [transformerVariantGroup()],
    rules: [
        ["animation-composition-add", { "animation-composition": "add" }],
        [
            "animation-composition-replace",
            { "animation-composition": "replace" },
        ],
        [
            "animation-composition-accumulate",
            { "animation-composition": "accumulate" },
        ],
        [
            "animation-random-move",
            {
                animation:
                    "horizontal 2.6s infinite linear alternate,vertical 1.9s infinite  linear alternate;",
            },
        ],
    ],
    shortcuts: {
        "text-whtho7-h1": "text-8 md:text-10 lg:text-12 md:m-l--24px font-lxgw",
        "text-whtho7-h2": "text-6 md:text-7 lg:text-8 font-lxgw",
        "text-whtho7-h3": "text-5 md:text-6 lg:text-7",
        "text-whtho7-p": "text-4 md:text-5 lg:text-6",
        "text-whtho7-small": "text-3 md:text-4 lg:text-5",
        "w-whtho7-layout":
            "m-x-auto w-87.5% max-w-360px md:w-716px md:max-w-none lg:w-972px",
        "flex-2": "flex-[2_2_0%]",
        "flex-3": "flex-[3_3_0%]",
        "flex-4": "flex-[4_4_0%]",
        "flex-5": "flex-[5_5_0%]",
        "flex-6": "flex-[6_6_0%]",
        "keyframes-random-move": "keyframes-horizontal keyframes-vertical",
        "animate-random-move":
            "keyframes-random-move animation-random-move animation-composition-accumulate",
        "transition-common": "transition ease-in-out duration-400",
    },
    theme: {
        colors: {
            "whtho7-cyan": "#96fcf3",
            "whtho7-cyan-2": "#14686a",
            "whtho-bg": "#0d1a1b",
            "whtho7-green": "#2cbe9a",
            "whtho7-blue": "#a3fffe",
            "whtho7-yellow": "#fdf768",
            "card-bg": "#1a222a",
            "bilibili-pink": "#fc8bab",
            "taobao-orange": "#ff6a00",
        },
        fontFamily: {
            lxgw: ["var(--font-lxgw)"],
            "sans-serif": [
                "Helvetica Neue",
                "Helvetica",
                "Arial",
                "PingFang SC",
                "Hiragino Sans GB",
                "Heiti SC",
                "Microsoft YaHei",
                "WenQuanYi Micro Hei",
                "sans-serif",
            ],
        },
        animation: {
            keyframes: {
                horizontal: `{from { transform: translateX(0) }to { transform: translateX(calc(100vw - 100%)) }}`,
                vertical: `{from { transform: translateY(0); }to { transform: translateY(calc(100vh - 100%)); }}`,
            },
        },
    },
});
