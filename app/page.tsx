"use client";
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Carousel } from "antd";
import { useRef, useState } from "react";
import { CarouselRef } from "antd/es/carousel";

const lxgw = localFont({
    src: "LXGWWenKaiScreen.woff2",
});

export default function Home() {
    return (
        <>
            <main className={`bg-whtho-bg h-fit font-sans-serif text-white`}>
                <Whtho7LeadIn />
                <section className="w-whtho7-layout ">
                    <Whtho7H1Div
                        title="活动亮点"
                        titleClassName={`${lxgw.className}`}>
                        <p>wwwfifjiwjiwfjiwfjiwfjifjifji</p>
                    </Whtho7H1Div>
                    <THOActivityCarousel />
                    <h1>wgwghgwgwgwgw</h1>
                </section>
            </main>
        </>
    );
}

function getTranslateVariantsByXY(x: number, y: number) {
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

export function RandomInvert() {
    return (
        <motion.div
            className="absolute scale-80% md:scale-100% lg:scale-120% backdrop-invert shadow-lg"
            style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 20 + 90}px`,
                height: `${Math.random() * 10 + 45}px`,
                rotate: `${Math.random() > 0.75 ? 90 : 0}deg`,
            }}
            animate={{
                opacity: [0, 1, 1, 0],
                transition: {
                    delay: Math.random() * 20,
                    duration: Math.random() * 2 + 0.4,
                    ease: "linear",
                    times: [0, 0.001, 0.999, 1],
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: Math.random() * 7 + 5,
                },
            }}
        />
    );
}

export function MainMainSpEffects() {
    return (
        <>
            <div className="absolute top-0 left-0 z-20 overflow-hidden w-100% h-screen">
                {Array.from({ length: 10 }).map((_, index) => (
                    <RandomInvert key={index} />
                ))}
            </div>
            <motion.div
                className="bg-whtho-bg absolute top-0 w-full h-screen z-20"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                }}
            />
        </>
    );
}

export function Whtho7LeadIn() {
    const mainMainRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: mainMainScrollYProgressReverse } = useScroll({
        target: mainMainRef,
        offset: ["170vh end", "100vh end"],
    });
    const whthoLogoTransform = useTransform(
        mainMainScrollYProgressReverse,
        [1, 0.8, 0.5, 0],
        [
            "translateY(10vh) translateX(-44px)",
            "translateY(30vh) translateX(-44px)",
            "translateY(30vh) translateX(-44px) rotate(0deg)",
            "translateY(30vh) translateX(0px) rotate(7deg)",
        ]
    );
    const whthologoLeft = useTransform(
        mainMainScrollYProgressReverse,
        [1, 0.5, 0],
        ["50%", "50%", "100%"]
    );
    const whthologoTop = useTransform(
        mainMainScrollYProgressReverse,
        [1, 0.5, 0],
        ["0%", "0%", "100%"]
    );
    const mainMainOpacity = useTransform(
        mainMainScrollYProgressReverse,
        [1, 0.6, 0],
        [1, 0, 0]
    );
    return (
        <div ref={mainMainRef} className="h-fit">
            <motion.main
                className="flex flex-col items-center h-100vh w-full sticky top-0 bg-whtho-bg overflow-hidden max-w-1440px m-x-auto"
                style={{
                    opacity: mainMainOpacity,
                }}>
                <h1
                    className={`${lxgw.className} font-light text-5xl md:text-6xl lg:text-7xl absolute text-center top-40vh text-whtho7-cyan `}>
                    武汉 THO 7
                    <br /> 楚韵九歌
                </h1>
                <MainMainSpEffects />
            </motion.main>
            <div className="absolute h-[calc(70vh+320px)] top-0 left-0 right-0 w-whtho7-layout">
                <motion.figure
                    className="sticky w-fit h-fit z-10"
                    style={{
                        left: whthologoLeft,
                        transform: whthoLogoTransform,
                        top: whthologoTop,
                    }}>
                    <Image
                        src="/WHTHONLYLOGO.png"
                        alt="WHTHONLYLOGO"
                        width={88}
                        height={193}
                        sizes="88px, (min-width: 768px) 176px"
                        draggable={false}
                        className="object-contain h-10rem lg:h-16rem select-none"
                    />
                </motion.figure>
            </div>
            <div className="h-fit w-full bg-whtho-bg relative">
                <section className="p-y-3 w-whtho7-layout">
                    <Whtho7H1Div
                        title="WHTHO，复活！"
                        titleClassName={`${lxgw.className}`}
                        className="m-r-88px">
                        <p>
                            武汉 THO 是纯度超高的东方 Project-Only
                            同人展会，首次创办至今已是第11年。这次，四处散播信仰的神灵庙豪族举办了盛大的庙会；同人作品展销、器乐演奏、游戏活动、互动问答环节、minilive，你想到的活动应有尽有！
                        </p>
                    </Whtho7H1Div>
                    <THOMsgList />
                </section>
            </div>
        </div>
    );
}

export function Whtho7H1Div(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > & {
        title: string;
        titleClassName?: string;
        children?: React.ReactNode;
    }
) {
    const { title, children, titleClassName, className } = props;
    return (
        <motion.div
            variants={{
                show: {
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
            initial="hidden"
            className="m-y-10"
            viewport={{
                margin: "20% 0% 0% 0%",
                amount: 0.95,
            }}
            whileInView="show">
            <motion.h1
                variants={getTranslateVariantsByXY(-4, 0)}
                className={`text-whtho7-h1 ${
                    titleClassName ?? ""
                } text-white bg-whtho7-green
                lg:m-l--64px lg:p-l-40px md:m-l--54px md:p-l-30px m-l--20px p-l-20px m-r-25% rounded-r-12 rounded-l-lg p-y-4`}>
                {title}
            </motion.h1>
            {children ? (
                <motion.div
                    variants={getTranslateVariantsByXY(-1, 0)}
                    className={`text-whtho7-p m-t-6 ${className ?? ""}`}>
                    {children}
                </motion.div>
            ) : null}
        </motion.div>
    );
}

export function THOActivityCarousel() {
    const activities = [
        {
            key: 0,
            title: "激烈的则赛",
            pic: "/1.jpg",
        },
        {
            key: 1,
            title: "超级舞踏会战争",
            pic: "/2.jpg",
        },
        {
            key: 2,
            title: "是是覅文件",
            pic: "/1.jpg",
        },
        {
            key: 3,
            title: "少爱沃克佛",
            pic: "/2.jpg",
        },
        {
            key: 4,
            title: "无法我佛我佛无法",
            pic: "/1.jpg",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<CarouselRef>(null);
    function carouselSwitchTo(index: number, isFromCarousel: boolean) {
        if (index === activeIndex) return;
        setActiveIndex(index);
        if (isFromCarousel) return;
        carouselRef.current?.goTo(index);
    }

    return (
        <motion.div
            // 这个抽象的横向 Grid 纵向 Flex 是为了让走马灯调按钮在 bottom 时不崩掉，虽然也不知道为什么= =
            className="md:grid md:grid-cols-2 lt-md:flex lt-md:flex-col gap-20px md:gap-50px m-t-50"
            initial="hidden"
            whileInView="show"
            viewport={{
                margin: "10% 0px -30% 0px",
            }}>
            <motion.div
                className="flex-1 border-2 rounded-xl shadow-lg"
                variants={getTranslateVariantsByXY(-1.25, -1.25)}>
                <ul className="h-full line-height-48px md:line-height-64px">
                    {activities.map((activity, idx) => (
                        <li
                            key={activity.key}
                            onMouseMove={() => {
                                carouselSwitchTo(idx, false);
                            }}
                            className={`p-x-3 first:rounded-t-xl last:rounded-b-xl relative text-center ${
                                idx === activeIndex
                                    ? "bg-dark-2 after:scale-x-100"
                                    : "odd:bg-dark-5 even:bg-dark-7 after:scale-x-0"
                            } transition ease-in-out duration-400 after:content-[''] 
                            after:transition-transform after:ease-in-out after:duration-400 after:bg-white after:absolute after:bottom-15% after:left-35% after:h-1px after:w-30%`}>
                            <h1 className="text-4 md:text-6">
                                {activity.title}
                            </h1>
                        </li>
                    ))}
                </ul>
            </motion.div>
            <motion.div
                className="flex-1 rounded-xl shadow-lg overflow-hidden"
                variants={getTranslateVariantsByXY(1.25, 1.25)}>
                <Carousel
                    ref={carouselRef}
                    effect="fade"
                    easing="duration-1500"
                    autoplay
                    autoplaySpeed={3000}
                    dots={false}
                    beforeChange={(from, to) => {
                        carouselSwitchTo(to, true);
                    }}>
                    {activities.map((activity, idx) => (
                        <motion.div
                            className="relative"
                            initial={{
                                height: `${64 * activities.length}px`,
                            }}>
                            <Image
                                className="object-cover object-center"
                                src={activity.pic}
                                alt={activity.title}
                                fill
                            />
                        </motion.div>
                    ))}
                </Carousel>
            </motion.div>
        </motion.div>
    );
}

export function THOMsgList() {
    const transforms = [
        "translateY(1.25rem)",
        "translateX(-1.25rem)",
        "translateX(1.25rem)",
    ];
    function getVariantsByIndex(index: number) {
        return {
            hidden: {
                opacity: 0,
                transform: transforms[index % transforms.length],
            },
            show: {
                opacity: 1,
                transform: "translateX(0rem)",
            },
        };
    }
    const msgMap = [
        [0, "活动名称", "武汉 THO7 · 楚韵九歌", "东方 Project-Only 同人展会"],
        [1, "活动时间", "2023 年 10 月 4 日", "国庆中秋双佳节连假之时"],
        [
            2,
            "活动地点",
            "湖北武汉洪山区巴山夜雨大酒店 2F 金色大厅",
            "九省通衢之地",
        ],
    ];
    return (
        <motion.dl
            variants={{
                show: {
                    transition: {
                        staggerChildren: 0.3,
                    },
                },
            }}
            whileInView="show"
            initial="hidden"
            viewport={{
                margin: "10% 0px -30% 0px",
                amount: 0,
            }}
            className="space-y-1  m-x-auto m-t-10">
            {msgMap.map((msg, index) => (
                <>
                    <motion.dt
                        key={msg[0]}
                        variants={getVariantsByIndex(0)}
                        className={`text-whtho7-h2 ${lxgw.className}`}>
                        {msg[1]}
                    </motion.dt>
                    <dd className="flex justify-between space-x-2 text-whtho7-p">
                        <motion.p variants={getVariantsByIndex(1)}>
                            {msg[2]}
                        </motion.p>
                        <motion.p variants={getVariantsByIndex(2)}>
                            {msg[3]}
                        </motion.p>
                    </dd>
                </>
            ))}
        </motion.dl>
    );
}
