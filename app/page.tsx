"use client";
import localFont from "next/font/local";
import { motion } from "framer-motion";
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
            {/* <div className="bg-[#204949] absolute h-full w-full transition-opacity ease-in-out opacity-0"></div> */}
            <main className={`bg-whtho-bg h-fit font-sans-serif`}>
                <div className="h-fit">
                    <main className="flex flex-col items-center h-screen w-full sticky top-0 bg-whtho-bg overflow-hidden">
                        <h1
                            className={`${lxgw.className} hover:scale-110 ease-in-out duration-100 transition-transform font-light text-5xl md:text-6xl lg:text-7xl absolute text-center top-1/3 text-whtho7-cyan -rotate-12`}>
                            暌违两年半
                            <br /> 武汉 THO 重磅归来
                        </h1>
                    </main>
                    <div className="h-fit w-full bg-whtho-bg relative">
                        <section
                            className="text-white min-h-screen m-x-auto p-y-3
                        w-87.5% max-w-360px md:w-716px md:max-w-none lg:w-972px">
                            <motion.article
                                whileInView={{
                                    opacity: 1,
                                    transform: "translateX(0rem)",
                                }}
                                viewport={{ margin: "10% 0px -30% 0px" }}
                                className="rounded-xl relative opacity-0 translate-x--5 w-90%">
                                <h1
                                    className={`text-8 sm:text-10 lg:text-12 ${lxgw.className}`}>
                                    武汉 THO，复活！
                                </h1>
                                <p className="text-white text-4 sm:text-6 z-10 relative">
                                    武汉 THO 是纯度超高的东方 Project-Only
                                    同人展会，首次创办至今已是第11年。这次，四处散播信仰的神灵庙豪族举办了盛大的庙会；同人作品展销、器乐演奏、游戏活动、互动问答环节、minilive，你想到的活动应有尽有！
                                </p>
                                <Image
                                    src="/WHTHONLYLOGO.png"
                                    alt="WHTHONLYLOGO"
                                    width={88}
                                    height={193}
                                    sizes="88px, (min-width: 768px) 176px"
                                    draggable={false}
                                    className="absolute object-contain right--2rem lg:right--4rem rotate-7 bottom--3rem h-10rem lg:h-16rem lg:bottom--8rem select-none"
                                />
                            </motion.article>
                            <THOMsgList />
                            <THOActivityCarousel />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

export function THOActivityCarousel() {
    const activities = [
        {
            title: "激烈的则赛",
            pic: "/1.jpg",
        },
        {
            title: "超级舞踏会战争",
            pic: "/2.jpg",
        },
        {
            title: "是是覅文件",
            pic: "/1.jpg",
        },
        {
            title: "少爱沃克佛",
            pic: "/2.jpg",
        },
        {
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

    function getVariantsByXY(x: number, y: number) {
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
                variants={getVariantsByXY(-1.25, -1.25)}>
                <ul className="h-full line-height-48px md:line-height-64px">
                    {activities.map((activity, idx) => (
                        <li
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
                variants={getVariantsByXY(1.25, 1.25)}>
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
        ["活动名称", "武汉 THO7 · 楚韵九歌", "东方 Project-Only 同人展会"],
        ["活动时间", "2023 年 10 月 4 日", "国庆中秋双佳节连假之时"],
        [
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
                        variants={getVariantsByIndex(0)}
                        className={`text-5 sm:text-8 ${lxgw.className}`}>
                        {msg[0]}
                    </motion.dt>
                    <dd className="flex justify-between space-x-2 text-4 sm:text-6">
                        <motion.p variants={getVariantsByIndex(1)}>
                            {msg[1]}
                        </motion.p>
                        <motion.p variants={getVariantsByIndex(2)}>
                            {msg[2]}
                        </motion.p>
                    </dd>
                </>
            ))}
        </motion.dl>
    );
}
