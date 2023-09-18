export function getTranslateVariantsByXY(x: number, y: number) {
    return {
        hidden: {
            opacity: 0,
            transform: `translateX(${x}rem) translateY(${y}rem)`,
        },
        show: {
            opacity: 1,
            transform: "translateX(0rem) translateY(0rem)",
        },
    };
}
