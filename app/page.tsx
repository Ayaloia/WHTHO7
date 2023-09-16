"use client";
import localFont from "next/font/local";
import {
    AnimatePresence,
    motion,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import { Carousel } from "antd";
import { useRef, useState } from "react";
import { CarouselRef } from "antd/es/carousel";
import { SkewedCard } from "./IndexClientComponent";
import { MdiMusic, MdiMusicNote, MdiMusicNoteQuarter } from "./svg";
import { useImmer } from "use-immer";

const lxgw = localFont({
    src: "LXGWWenKaiScreen.woff2",
});

export default function Home() {
    return (
        <>
            <main
                className={`bg-whtho-bg h-fit font-sans-serif text-white text-whtho7-p`}>
                <Whtho7LeadIn />
                <section className="w-whtho7-layout ">
                    <Whtho7H1Div
                        title="活动内容"
                        titleClassName={`${lxgw.className}`}></Whtho7H1Div>
                    <THOGameActivities />
                    <THOMusicActivities />
                </section>
                <section className="m-t-10">111</section>
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

export function AndMoreLabel(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    >
) {
    const { className } = props;
    return (
        <motion.div
            className={`flex flex-row-reverse ${className ?? ""}`}
            initial="hidden"
            whileInView="show"
            variants={getTranslateVariantsByXY(1, 0)}>
            <p className="w-fit bg-whtho7-blue p-2 text-green-6 relative font-extrabold font-sans">
                <svg
                    viewBox="0 0 9 8"
                    className="absolute translate-x--90% top-0 left-0 h-full fill-whtho7-blue">
                    <polygon points="8,0 0,8 9,8 9,0" />
                </svg>
                And More!!
            </p>
        </motion.div>
    );
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

export function MusicNoteSpring() {
    const r = 50;
    let musicNoteSvg = [MdiMusic, MdiMusicNote, MdiMusicNoteQuarter];
    return (
        <div className="absolute top-0 left-0 h-full w-full translate-y-100%">
            {Array.from({ length: 20 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute top-0 left-0 z-10 aspect-square h-full"
                    initial={{
                        left: `${Math.random() * 100}%`,
                        opacity: 1,
                        transform: `translateX(0px) translateY(0px)`,
                    }}
                    animate={{
                        opacity: 0,
                        transform: `translateX(${
                            Math.random() * r - r / 2
                        }px) translateY(-${Math.random() * r}px)`,
                        transition: {
                            delay: Math.random() * 1,
                            duration: Math.random() * 1 + 1,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: Math.random() * 1,
                        },
                    }}>
                    {musicNoteSvg[Math.floor(Math.random() * 3)]({
                        className: "w-full h-full",
                    })}
                </motion.div>
            ))}
        </div>
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
            className="m-t-10 m-b-5"
            viewport={{
                margin: "20% 0% 0% 0%",
                amount: 0.95,
            }}
            whileInView="show">
            <motion.h1
                variants={getTranslateVariantsByXY(-4, 0)}
                className={`text-whtho7-h1 ${
                    titleClassName ?? ""
                } text-white bg-whtho7-green shadow-md shadow-white
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

export function Whtho7H2Div(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > & {
        title: string;
        titleClassName?: string;
        children?: React.ReactNode;
        rootClassName?: string;
    }
) {
    const { title, children, titleClassName, className, rootClassName } = props;
    return (
        <motion.div
            className={`${rootClassName ?? ""}`}
            variants={{
                show: {
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
            initial="hidden"
            viewport={{
                margin: "20% 0% 0% 0%",
                amount: 0.95,
            }}
            whileInView="show">
            <motion.h2
                className={`relative text-whtho7-h2 w-fit p-y-2 p-x-4 m-l-[calc(-1rem-2px)] ${
                    titleClassName ?? ""
                } rounded-1 bg-whtho7-cyan-2 shadow-[0_0_8px_4px_#0000] shadow-whtho7-cyan border-2 border-whtho7-cyan`}
                variants={{
                    hidden: { opacity: 0, transform: "scale(0)" },
                    show: {
                        opacity: 1,
                        transform: "scale(1)",
                    },
                }}>
                {title}
            </motion.h2>
            {children ? (
                <motion.div
                    variants={getTranslateVariantsByXY(-1, 0)}
                    className={`text-whtho7-p m-t-2 ${className ?? ""}`}>
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
            title: "东方裁判梦",
            pic: "/东方裁判梦.png",
        },
        {
            key: 1,
            title: "东方冰之勇者记",
            pic: "/东方冰之勇者记.jpg",
        },
        {
            key: 2,
            title: "幻走 SkyDrift",
            pic: "/幻走_SkyDrift.jpg",
        },
        {
            key: 3,
            title: "毛玉大冒险",
            pic: "/毛玉大冒险.jpg",
        },
        {
            key: 4,
            title: "幻想女武神",
            pic: "/幻想女武神.jpg",
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
        <div
            // 这个抽象的横向 Grid 纵向 Flex 是为了让走马灯调按钮在 bottom 时不崩掉，虽然也不知道为什么= =
            className="md:grid md:grid-cols-3 lt-md:flex lt-md:flex-col gap-20px m-y-2">
            <div className="flex-1 border-2 rounded-xl">
                <ul className="h-full line-height-48px md:line-height-64px lg:line-height-80px">
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
            </div>
            <div className="flex-1 col-span-2 rounded-xl overflow-hidden [--carousel-length:3] md:[--carousel-length:5] lg:[--carousel-length:6.33]">
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
                            className="relative w-fit"
                            initial={{
                                height: `calc(var(--carousel-length) * 64px)`,
                            }}>
                            <Image
                                className="object-fill object-center"
                                src={activity.pic}
                                alt={activity.title}
                                fill
                                sizes="(min-width: 1024px) 619px, (min-width: 768px) 448px, 326px"
                            />
                        </motion.div>
                    ))}
                </Carousel>
            </div>
        </div>
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

export function THOGameActivities() {
    return (
        <section>
            <Whtho7H2Div title="游戏内容" titleClassName={`${lxgw.className}`}>
                <p>丰富的游戏活动：同人游戏试玩、舞台游戏活动、音游区……</p>
            </Whtho7H2Div>
            <SkewedCard className="m-t-4">
                <p>众多游戏，任你试玩！</p>
                <THOActivityCarousel />
                <AndMoreLabel className="m-b--4 m-r--4" />
            </SkewedCard>
            <div className="flex flex-col md:flex-row m-t-4 gap-4 md:h-280px lg:h-320px">
                <SkewedCard className="flex flex-col lt-md:h-280px">
                    <h3 className="text-whtho7-h3">舞台游戏活动</h3>
                    <ul
                        role="list"
                        className="list-image-[url(/MaterialSymbolsArrowRightAltRounded.svg)] list-inside">
                        <li key={0}>STG 弹幕接龙</li>
                        <li key={1}>非想天则比赛</li>
                    </ul>
                    <div className="flex flex-row flex-1 gap-2 m-b--4">
                        <figure
                            className="flex-1 relative opacity-80 m-l--4"
                            style={{
                                maskImage:
                                    "radial-gradient(at bottom left, #000000, #000000 25%, transparent 70%)",
                                WebkitMaskImage:
                                    "radial-gradient(at bottom left, #000000, #000000 25%, transparent 70%)",
                            }}>
                            <Image
                                src={"/fxtz.png"}
                                alt="fxtz"
                                fill
                                className="object-cover"
                            />
                        </figure>
                        <div
                            className="flex-1 relative opacity-80 m-r--4"
                            style={{
                                maskImage:
                                    "radial-gradient(at bottom right, #000000, #000000 25%, transparent 70%)",
                                WebkitMaskImage:
                                    "radial-gradient(at bottom right, #000000, #000000 25%, transparent 70%)",
                            }}>
                            <Image
                                src={"/stg.png"}
                                alt="stg"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </SkewedCard>
                <SkewedCard className="flex flex-col lt-md:h-350px gap-2">
                    <h3 className="text-whtho7-h3">音游区</h3>
                    <p>音游免费试玩，更有未公布的彩蛋音游！</p>
                    <div className="flex-3 md:flex-2 flex flex-col md:flex-row gap-2">
                        <div className="flex-2 md:flex-1 relative opacity-80">
                            <Image
                                src={"/太鼓达人.jpg"}
                                alt="太鼓达人"
                                fill
                                className="md:object-cover object-contain"
                            />
                        </div>
                        <div className="flex-1 flex flex-row md:flex-col gap-1">
                            <div className="flex-1 relative opacity-80">
                                <Image
                                    src={"/chunithm_amazon.png"}
                                    alt="chunithm_amazon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1 relative opacity-80">
                                <Image
                                    src={"/chunithm_amazon_plus.png"}
                                    alt="chunithm_amazon_plus.png"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-1">
                        <div className="flex-1 relative opacity-80">
                            <Image
                                src={"/project_diva_arcade.png"}
                                alt="project_diva_arcade"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1" />
                    </div>
                    <AndMoreLabel className="absolute w-fit h-min bottom-0 right-0" />
                </SkewedCard>
            </div>
        </section>
    );
}

export function MiniLiveCard() {
    const logoShowDivRef = useRef<HTMLDivElement>(null);
    const showYuuhei = useInView(logoShowDivRef, {
        margin: "0px 0px -40% 0px",
    });
    return (
        <SkewedCard className="md:flex-3 lg:flex-5 flex flex-col lt-md:h-250px gap-2">
            <h3 ref={logoShowDivRef} className="text-whtho7-h3">
                场内 MINI LIVE
            </h3>
            <p className="">
                由人气同人音乐社团{" "}
                <span className="">疯帽子茶会 & 幻想诗篇</span>{" "}
                <AnimatePresence mode="popLayout">
                    {showYuuhei && (
                        <motion.span
                            key={"yuuhei_text"}
                            className="opacity-0 lg:m-r--100px"
                            animate={{
                                opacity: 1,
                                // 这里使用 margin 同样会导致卡慢的动画，所以感觉流畅的动画还是给大屏吧（
                                marginRight: "0px",
                            }}
                            exit={{
                                opacity: 0,
                            }}>
                            & 幽闭星光&nbsp;
                        </motion.span>
                    )}
                </AnimatePresence>
                带来的同人 LIVE 表演！
            </p>
            <div className="flex-1 flex flex-row bg-whtho7-green bg-opacity-40 rounded-lg shadow-[0_0_4px_1px] shadow-white">
                <figure className="relative flex-1">
                    <Image
                        src={"/疯帽子茶会_LOGO.png"}
                        alt="疯帽子茶会 LOGO"
                        fill
                        className="object-cover"
                    />
                </figure>
                <figure className="relative flex-1">
                    <Image
                        src={"/幻想诗篇Xanadu_CantoLOGO.png"}
                        alt="幻想诗篇Xanadu_CantoLOGO"
                        fill
                        className="object-contain"
                    />
                </figure>
                <AnimatePresence mode="popLayout">
                    {showYuuhei && (
                        <motion.figure
                            className="relative opacity-0 w-1/3 lg:w-0 scale-100"
                            // 这个图片宽度缩放在（我的）手机上会有比较肉眼可见的卡顿，虽然动画确实看着舒服
                            animate={{
                                opacity: 1,
                                width: "33.3%",
                                transform: "scale(1)",
                            }}
                            exit={{
                                opacity: 0,
                                transform: "scale(0)",
                            }}>
                            <Image
                                src={"/幽閉サテライト.png"}
                                alt="幽閉サテライト.png"
                                fill
                                className="object-contain"
                            />
                        </motion.figure>
                    )}
                </AnimatePresence>
            </div>
        </SkewedCard>
    );
}

export function ClickToShowMusicNote({
    children,
    className,
    r = 200,
}: {
    children: React.ReactNode;
    className?: string | undefined;
    r?: number;
}) {
    const [musicNotes, setMusicNotes] = useImmer(
        [] as { x: number; y: number; duration: number; noteType: number }[]
    );
    const musicNoteSvg = [MdiMusic, MdiMusicNote, MdiMusicNoteQuarter];
    return (
        <motion.div
            className={`${className ?? ""}`}
            onClick={() => {
                setMusicNotes((draft) => {
                    draft.push({
                        x: Math.random() * r - r / 2,
                        y: Math.random() * r - r / 2,
                        duration: Math.random() * 1 + 1,
                        noteType: Math.floor(Math.random() * 3),
                    });
                });
            }}
            whileTap={{
                scale: 0.9,
            }}>
            {children}
            {musicNotes.map((item, _) => (
                <motion.div
                    key={item.x}
                    className="absolute top-50% left-50% z-10 aspect-square h-16px"
                    initial={{
                        opacity: 1,
                        transform: `translateX(0px) translateY(0px)`,
                    }}
                    animate={{
                        opacity: 0,
                        transform: `translateX(${item.x}px) translateY(${item.y}px)`,
                        transition: {
                            duration: item.duration,
                            ease: "linear",
                        },
                    }}
                    onAnimationEnd={() => {
                        setMusicNotes((draft) => {
                            draft.splice(draft.indexOf(item), 1);
                        });
                    }}>
                    {musicNoteSvg[item.noteType]({
                        className: "w-full h-full",
                    })}
                </motion.div>
            ))}
        </motion.div>
    );
}

export function THOMusicActivities() {
    return (
        <section>
            <Whtho7H2Div
                title="音乐活动"
                titleClassName={`${lxgw.className}`}
                rootClassName="m-t-4"
            />
            <div className="flex flex-col md:flex-row m-t-4 gap-4 md:h-300px lg:h-320px relative">
                <MiniLiveCard />
                <SkewedCard className="relative md:flex-2 lg:flex-4">
                    <h3 className="text-whtho7-h3">音乐合奏</h3>
                    <ul>
                        <li>独家编曲</li>
                        <li>多种乐器完美调和</li>
                        <li>畅想 4 合奏曲目 + 2 独奏曲目</li>
                        <li>带来意想不到的乐趣</li>
                    </ul>
                    <div className="absolute bottom-0 left-0% w-full h-16px">
                        <MusicNoteSpring />
                    </div>
                    <ClickToShowMusicNote className="absolute right-0 top-30% md:top-70% h-100px w-100px z-10">
                        <p className="text-center">应该是某张图片</p>
                    </ClickToShowMusicNote>
                </SkewedCard>
            </div>
        </section>
    );
}
