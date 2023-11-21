"use client";
import Image, { StaticImageData } from "next/image";
import {
    experimental_useEffectEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { useMouseHovered, useMedia, useWindowScroll } from "react-use";
import { useImmer } from "use-immer";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import {
    AnimatePresence,
    motion,
    useInView,
    useScroll,
    useTransform,
    stagger,
    useAnimate,
    useMotionValue,
} from "framer-motion";
import { ReservoirSampling } from "./alg";
import { ShowCircleItem, THOTicketMsgDetail } from "./Component";
import {
    ArrowDropUp,
    BilibiliIcon,
    MdiMusic,
    MdiMusicNote,
    MdiMusicNoteQuarter,
    QQIcon,
    RefreshLineIcon,
    WeiboIcon,
} from "./svg";
import { circleItem } from "./circleList";
import { getTranslateVariantsByXY } from "./tools";
import {
    WHTHONLYLOGO,
    WHTHONLYLOGOMAIN,
    ayaFumo,
    cirnoFumo,
    flandreFumo,
    koishiFumo,
    leeks,
    megumu,
    miko,
    satoriFumo,
    ヤゴコロ先生,
    东方冰之勇者记,
    东方裁判梦,
    太鼓达人,
    幻想女武神,
    幻想诗篇Xanadu_CantoLOGO,
    幻走_SkyDrift,
    幽閉サテライト,
    毛玉大冒险,
    疯帽子茶会_LOGO,
} from "./image/images";
import Link from "next/link";
import { frame } from "framer-motion/dom";

export function SkewedCard({
    children,
    className,
    rotateMultiple = 2,
}: {
    children: React.ReactNode;
    className?: string | undefined;
    rotateMultiple?: number;
}) {
    const ref = useRef(null);
    const { elX, elY, elW, elH } = useMouseHovered(ref, { whenHovered: true });
    return (
        // 参考了 GitHub 官网的实现，不过这里重复用了 while/when Hover，可能会有性能问题
        <motion.div
            ref={ref}
            className={`w-full h-full border-gray rounded-xl bg-card-bg border-1 p-4 overflow-hidden transform-origin-center ${className}`}
            initial={{ transform: "perspective(700px) rotateX(0) rotateY(0)" }}
            whileHover={{
                transform: `perspective(700px) rotateX(${
                    (elY / elH - 0.5) * rotateMultiple
                }deg) rotateY(${(elX / elW - 0.5) * -rotateMultiple}deg)`,
                transition: { duration: 0 },
            }}>
            {children}
        </motion.div>
    );
}

export function ShowCircleGrid({
    itemsList,
    className,
    buttonClassName,
    buttonText = "刷新",
}: {
    itemsList: circleItem[];
    className?: string;
    buttonClassName?: string;
    buttonText?: string;
}) {
    const isMd = useMedia("(min-width: 768px)", false);
    const isLg = useMedia("(min-width: 1024px)", false);
    const [circleList, setCircleList] = useState(itemsList.slice(0, 1));
    const RefrashRandomCircleList = useCallback(() => {
        setCircleList(
            ReservoirSampling(
                Math.random() > 0.5 ? itemsList : itemsList.slice().reverse(),
                isLg ? 20 : isMd ? 16 : 6
            )
        );
    }, [itemsList, isLg, isMd]);
    useEffect(() => {
        RefrashRandomCircleList();
    }, [RefrashRandomCircleList]);
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animate(
            "div",
            {
                opacity: [0, 1],
                transform: ["scale(1.05)", "scale(1)"],
            },
            {
                type: "spring",
                duration: 0.8,
                bounce: 0.1,
                delay: stagger(0.03),
            }
        );
    }, [circleList, animate]);
    return (
        <div className={`${className ?? ""}`}>
            <div
                className={`max-h-450px overflow-hidden m-t--4 m-x--4 rounded-lg`}>
                <div
                    ref={scope}
                    className="relative left--5px top--20px grid grid-cols-[repeat(2,_minmax(180px,_1fr))] rotate-15 gap-4 lg:left-5px lg:top--90px md:left--25px md:top--100px lg:grid-cols-[repeat(5,_minmax(180px,_1fr))] md:grid-cols-[repeat(4,_minmax(180px,_1fr))]">
                    {circleList.map((circleItem, index) => (
                        <ShowCircleItem
                            key={`${circleItem.name}`}
                            logoSrc={circleItem.logoSrc}
                            name={`${circleItem.name}`}
                            link="https://thwiki.cc/%E5%B9%BD%E9%97%AD%E6%98%9F%E5%85%89"
                        />
                    ))}
                </div>
            </div>
            <button
                type="button"
                className={`${
                    buttonClassName ?? ""
                } group m-t-2 m-x-auto w-fit flex flex-row items-center h-36px md:h-42px lg:h-48px gap-2 p-y-2 p-x-4 transition-common hover:scale-105`}
                onClick={() => {
                    RefrashRandomCircleList();
                }}>
                {RefreshLineIcon({
                    className:
                        "fill-white h-full transition-common group-active:rotate--360 group-active:duration-0",
                })}
                <span>{buttonText}</span>
            </button>
        </div>
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
            "translateY(10vh) translateX(-50%)",
            "translateY(30vh) translateX(-50%)",
            "translateY(30vh) translateX(-50%) rotate(0deg)",
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
                className="sticky top-0 m-x-auto h-100vh max-w-1440px w-full flex flex-col items-center overflow-hidden bg-whtho-bg"
                style={{
                    opacity: mainMainOpacity,
                }}>
                <h1
                    className={`font-lxgw font-light text-5xl md:text-6xl lg:text-7xl absolute text-center top-40vh text-whtho7-cyan `}>
                    武汉 THO 7
                    <br /> 楚韵九歌
                </h1>
                <MainMainSpEffects />
            </motion.main>
            <div className="absolute left-0 right-0 top-0 h-[calc(70vh+320px)] w-whtho7-layout">
                <motion.figure
                    className="sticky z-10 h-fit w-fit"
                    style={{
                        left: whthologoLeft,
                        transform: whthoLogoTransform,
                        top: whthologoTop,
                    }}>
                    <Image
                        src={WHTHONLYLOGO}
                        alt="WHTHONLYLOGO"
                        draggable={false}
                        className="h-10rem w-auto select-none object-contain lg:h-14rem md:h-12rem"
                    />
                </motion.figure>
            </div>
            <div className="relative h-fit w-full bg-whtho-bg">
                <section className="p-y-3 w-whtho7-layout">
                    <Whtho7H1Div title="WHTHO，复活！" className="m-r-88px">
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
            className="m-b-5 m-t-10"
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
            pic: 东方裁判梦,
        },
        {
            key: 1,
            title: "东方冰之勇者记",
            pic: 东方冰之勇者记,
        },
        {
            key: 2,
            title: "幻走 SkyDrift",
            pic: 幻走_SkyDrift,
        },
        {
            key: 3,
            title: "毛玉大冒险",
            pic: 毛玉大冒险,
        },
        {
            key: 4,
            title: "幻想女武神",
            pic: 幻想女武神,
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
            className="m-y-2 gap-20px md:grid md:grid-cols-3 lt-md:flex lt-md:flex-col">
            <div className="flex-1 border-2 rounded-xl">
                <ul className="h-full line-height-48px lg:line-height-80px md:line-height-64px">
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
            <div className="[--carousel-length:3] col-span-2 flex-1 overflow-hidden rounded-xl lg:[--carousel-length:6.33] md:[--carousel-length:5]">
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
                            key={idx}
                            className="relative w-fit"
                            initial={{
                                height: `calc(var(--carousel-length) * 64px)`,
                            }}>
                            <Image
                                fill
                                sizes="(min-width: 1024px) 619px, (min-width: 768px) 448px, 326px"
                                className="object-fill object-center"
                                src={activity.pic}
                                alt={activity.title}
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
                once: true,
            }}
            className="m-x-auto m-t-10 space-y-1">
            {msgMap.map((msg, index) => (
                <>
                    <motion.dt
                        key={`${msg[0]}_dt`}
                        variants={getVariantsByIndex(0)}
                        className={`text-whtho7-h2`}>
                        {msg[1]}
                    </motion.dt>
                    <dd
                        className="flex justify-between space-x-2 text-whtho7-p"
                        key={`${msg[0]}_dd`}>
                        <motion.p
                            variants={getVariantsByIndex(1)}
                            key={`${msg[0]}_p1`}>
                            {msg[2]}
                        </motion.p>
                        <motion.p
                            variants={getVariantsByIndex(2)}
                            key={`${msg[0]}_p2`}>
                            {msg[3]}
                        </motion.p>
                    </dd>
                </>
            ))}
        </motion.dl>
    );
}

export function MiniLiveCard() {
    const logoShowDivRef = useRef<HTMLDivElement>(null);
    const showYuuhei = useInView(logoShowDivRef, {
        margin: "0px 0px -50% 0px",
        once: true,
    });
    const [yuuheiRef, yuuheiAniamte] = useAnimate();
    return (
        <SkewedCard className="flex lg:flex-5 md:flex-3 flex-col justify-start gap-2 lt-md:h-250px">
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
            <div className="flex flex-1 flex-row rounded-lg bg-whtho7-green bg-opacity-40 shadow-[0_0_4px_1px] shadow-white">
                <figure className="relative flex-1">
                    <Image
                        src={疯帽子茶会_LOGO}
                        alt="疯帽子茶会 LOGO"
                        fill
                        sizes="(min-width: 1024px) 168px, (min-width: 768px) 128px, 110px"
                        className="object-cover"
                    />
                </figure>
                <figure className="relative flex-1">
                    <Image
                        src={幻想诗篇Xanadu_CantoLOGO}
                        alt="幻想诗篇Xanadu_CantoLOGO"
                        fill
                        sizes="(min-width: 1024px) 168px, (min-width: 768px) 128px, 110px"
                        className="object-contain"
                    />
                </figure>
                <AnimatePresence mode="popLayout">
                    {showYuuhei && (
                        <motion.figure
                            className="relative w-1/3 scale-100 opacity-0 lg:w-0"
                            // 这个图片宽度缩放在（我的）手机上会有比较肉眼可见的卡顿，虽然动画确实看着舒服
                            animate={{
                                opacity: 1,
                                width: "33.33%",
                                transform: "scale(1)",
                            }}
                            exit={{
                                opacity: 0,
                                transform: "scale(0)",
                            }}>
                            <Image
                                ref={yuuheiRef}
                                src={幽閉サテライト}
                                alt="幽閉サテライト.png"
                                fill
                                sizes="(min-width: 1024px) 168px, (min-width: 768px) 128px, 110px"
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
        <div
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
            }}>
            <motion.div className="h-full w-full" whileTap={{ scale: 0.9 }}>
                {children}
            </motion.div>
            {musicNotes.map((item, _) => (
                <motion.div
                    key={item.x}
                    className="absolute left-50% top-50% z-10 aspect-square h-16px"
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
        </div>
    );
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
            <p className="relative w-fit bg-whtho7-blue p-2 font-extrabold font-sans text-green-6">
                <svg
                    viewBox="0 0 9 8"
                    className="absolute left-0 top-0 h-full translate-x--90% fill-whtho7-blue">
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
            className="absolute scale-80% shadow-lg backdrop-invert lg:scale-120% md:scale-100%"
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
    const [showMusicNoteSpring, setShowMusicNoteSpring] = useState(false);
    useEffect(() => {
        setShowMusicNoteSpring(true);
    }, []);
    return (
        <div className="absolute left-0 top-0 h-full w-full translate-y-100%">
            {showMusicNoteSpring &&
                Array.from({ length: 20 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute left-0 top-0 z-10 aspect-square h-full"
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
    const [showRandomInvert, setRandomInvert] = useState(false);
    useEffect(() => {
        setRandomInvert(true);
    }, []);
    return (
        <>
            <div className="absolute left-0 top-0 z-20 h-screen w-100% overflow-hidden">
                {showRandomInvert &&
                    Array.from({ length: 10 }).map((_, index) => (
                        <RandomInvert key={index} />
                    ))}
            </div>
            <motion.div
                className="absolute top-0 z-20 h-screen w-full bg-whtho-bg"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                }}
            />
        </>
    );
}

export function THOTicketMsg() {
    return (
        <section className="w-whtho7-layout">
            <Whtho7H1Div
                title="购票相关"
                className="flex flex-col justify-evenly gap-4 md:flex-row">
                {[
                    ["普通票 65 元", "免费会场折页，全天不限次数进出场！"],
                    ["特典票 110 元", "包含额外的场限 CD 与合同志场刊！"],
                ].map((ticket, index) => (
                    <div key={index}>
                        <div className="flex flex-col items-center">
                            <h2 className="text-whtho7-yellow text-whtho7-h2">
                                {ticket[0]}
                            </h2>
                            <motion.p
                                className="w-fit"
                                variants={{
                                    ...getTranslateVariantsByXY(0, -1),
                                    show: {
                                        ...getTranslateVariantsByXY(0, -1).show,
                                        transition: { delay: 0.4 },
                                    },
                                }}>
                                {ticket[1]}
                            </motion.p>
                        </div>
                    </div>
                ))}
            </Whtho7H1Div>
            <THOTicketMsgDetail />
        </section>
    );
}

export function NavBar() {
    const { y } = useWindowScroll();
    const [showNavBar, setShowNavBar] = useState(false);
    const [preY, setPreY] = useState(-1);
    const [scope, animate] = useAnimate();
    useEffect(() => {
        if (!showNavBar) {
            animate([
                [
                    scope.current,
                    { transform: ["translateY(0%)", "translateY(-110%)"] },
                ],
                [
                    "button > svg",
                    { transform: ["rotateX(0deg)", "rotateX(180deg)"] },
                    { at: "<" },
                ],
            ]);
        } else {
            animate([
                [
                    scope.current,
                    { transform: ["translateY(-110%)", "translateY(0%)"] },
                ],
                [
                    "button > svg",
                    { transform: ["rotateX(180deg)", "rotateX(0deg)"] },
                    { at: "<" },
                ],
            ]);
        }
    }, [animate, scope, showNavBar]);
    const calShow = (nowY: number) => {
        if (nowY - preY > 150 || nowY === 0) {
            setShowNavBar(false);
            setPreY(nowY);
        } else if (preY - nowY > 150) {
            setShowNavBar(true);
            setPreY(nowY);
        }
    };
    useEffect(() => {
        calShow(y);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [y]);

    return (
        <header
            className="fixed top-0 z-20 h-16 w-full flex flex-row justify-between bg-whtho-bg p-x-4 opacity-100 shadow-black shadow-md"
            ref={scope}>
            <nav className="h-full w-max flex shrink-0 flex-row items-center justify-start text-white">
                <Link href="#" replace scroll className="h-full p-y-2">
                    <Image
                        src={WHTHONLYLOGOMAIN}
                        alt="WHTHONLYLOGO"
                        className="h-full w-auto"
                        onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            e.preventDefault();
                        }}
                    />
                </Link>
            </nav>
            <address className="h-full flex shrink-1 flex-row items-center justify-end gap-1 md:gap-2">
                {[
                    {
                        icon: BilibiliIcon,
                        name: "bilibili",
                        link: "https://space.bilibili.com/330548191",
                        className: "fill-bilibili-pink hover:bg-bilibili-pink",
                    },
                    {
                        icon: WeiboIcon,
                        name: "weibo",
                        link: "https://weibo.com/youyou0613",
                        className: "fill-weibo-red hover:bg-weibo-red",
                    },
                    {
                        icon: QQIcon,
                        name: "qq",
                        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ncDdfWsItAsb5wT_YkJCXC2CiCiuq4xT&authKey=bKaMK8DOEc6qMoADOsE2ImOyEgAeJp22ZIMrAl2LAssrob%2BXwSM0ml9pt6%2Bn5L%2Bj&noverify=0&group_code=106724753",
                        className: "fill-qq-skyblue hover:bg-qq-skyblue",
                    },
                ].map((item, _) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer">
                        {item.icon({
                            className: `w-32px p-1 box-content rounded-full hover:fill-white transition-common ${item.className}`,
                        })}
                    </Link>
                ))}
            </address>
            <button
                className="absolute bottom-0 right-0 z--5 h-40px w-64px translate-y-95% rounded-b-lg bg-whtho-bg shadow-[0_3px_3px_0px_#000]"
                onClick={() => {
                    setShowNavBar(!showNavBar);
                }}>
                {ArrowDropUp({
                    className: "fill-white h-full transition-common m-x-auto",
                })}
            </button>
        </header>
    );
}

export function THOExtraMsgDetail() {
    const rootRef = useRef(null);
    const { scrollYProgress: rootScrollYProgress } = useScroll({
        target: rootRef,
        offset: ["start end", "end end"],
    });
    const [showed, setShowed] = useState(<></>);
    const nowShow = useMotionValue(-1);
    useEffect(() => {
        console.log("test");
        const outputItem = (children: JSX.Element, index: number) => {
            return (
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(200px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-200px)" }}
                    key={index}
                    className="sticky top-15vh h-70vh w-full flex flex-col items-center justify-center overflow-y-clip">
                    {children}
                </motion.div>
            );
        };
        return rootScrollYProgress.on("change", (latest) => {
            if (latest <= 0.4) {
                if (nowShow.get() === 0) return;
                nowShow.set(0);
                const generateFumo = (fumo: StaticImageData, key: number) => {
                    const animationDuration = Math.random() * 2 + 1;
                    const X = Math.random() * 40 + 5;
                    const Y = Math.random() * 30 + 5;
                    return (
                        <motion.div
                            key={key}
                            className="absolute keyframes-zIndexSurround animate-[0s_linear_0s_infinite_normal_none_running_zIndexSurround]"
                            style={{
                                animationDuration: `${animationDuration}s`,
                            }}
                            animate={{
                                transform: [
                                    `scale(1) translateX(-${X}vw) translateY(-${Y}vh)`,
                                    `scale(1.5) translateX(0) translateY(0)`,
                                    `scale(1) translateX(${X}vw) translateY(${Y}vh)`,
                                    `scale(0.5) translateX(0) translateY(0)`,
                                    `scale(1) translateX(-${X}vw) translateY(-${Y}vh)`,
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 0,
                                delay: 0,
                                duration: animationDuration,
                                times: [0, 0.25, 0.5, 0.75, 1],
                                ease: "linear",
                            }}>
                            <Image
                                src={fumo}
                                alt="fumo"
                                className="h-50px w-auto"
                            />
                        </motion.div>
                    );
                };
                setShowed(
                    outputItem(
                        <>
                            {[
                                cirnoFumo,
                                koishiFumo,
                                satoriFumo,
                                flandreFumo,
                            ].map((fumo, index) => generateFumo(fumo, index))}
                            <motion.div
                                className="absolute z--10 after:absolute after:left-50% after:top-50% after:z--20 after:shadow-[0_0_25px_25px_#fff] after:content-['']"
                                animate={{
                                    transform: [
                                        "translateY(40vh)",
                                        "translateY(0vh)",
                                    ],
                                    opacity: [1, 1, 1, 0],
                                }}
                                transition={{
                                    ease: "linear",
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    repeatType: "loop",
                                }}>
                                <Image
                                    src={ayaFumo}
                                    alt="ayaFumo"
                                    className="h-50px w-auto"
                                />
                            </motion.div>
                            <Image
                                src={太鼓达人}
                                alt={"top"}
                                className="h-100px w-auto"
                            />
                        </>,
                        0
                    )
                );
            } else if (latest <= 0.7) {
                if (nowShow.get() === 1) return;
                nowShow.set(1);
                setShowed(
                    outputItem(
                        <div className="opacity-90">
                            <motion.div
                                className="relative m-b--30vh"
                                animate={{
                                    transform: [
                                        "translateX(-30vw)",
                                        "translateX(30vw)",
                                    ],
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatDelay: 0,
                                    repeatType: "reverse",
                                }}>
                                <Image
                                    src={ヤゴコロ先生}
                                    alt="ヤゴコロ先生"
                                    className="h-370px w-auto"
                                />
                                <motion.div
                                    className="absolute left--75% top-32% origin-center"
                                    animate={{
                                        transform: [
                                            "rotate(0deg)",
                                            "rotate(360deg)",
                                        ],
                                    }}
                                    transition={{
                                        ease: "linear",
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatDelay: 0,
                                        repeatType: "loop",
                                    }}>
                                    <Image
                                        src={leeks}
                                        alt="leeks"
                                        className="h-auto w-80%"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>,
                        1
                    )
                );
            } else if (latest <= 1) {
                if (nowShow.get() === 2) return;
                nowShow.set(2);
                setShowed(
                    outputItem(
                        <>
                            <Image
                                src={miko}
                                alt="miko"
                                className="h-50vh w-auto"
                            />
                            <Image
                                src={megumu}
                                alt="megumo"
                                className="absolute right-0"
                            />
                            <Image
                                src={megumu}
                                alt="megumo"
                                className="absolute left-0 rotate-y-180"
                            />
                        </>,
                        2
                    )
                );
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div ref={rootRef} className="h-270vh">
            <AnimatePresence mode="popLayout">{showed}</AnimatePresence>
        </div>
    );
}
