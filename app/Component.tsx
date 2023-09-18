import { SVGProps } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import {
    Whtho7H2Div,
    SkewedCard,
    THOActivityCarousel,
    ClickToShowMusicNote,
    MiniLiveCard,
    ShowCircleGrid,
    Whtho7H1Div,
    MusicNoteSpring,
    AndMoreLabel,
} from "./IndexClientComponent";
import { CircleList } from "./circleList";
import { BilibiliIcon, TaobaoFillIcon } from "./svg";
import {
    chunithm_amazon,
    chunithm_amazon_plus,
    fxtz,
    project_diva_arcade,
    stg,
    太鼓达人,
} from "./image/images";

export function LinkButton({
    href,
    title,
    bgColorClassName,
    className,
    svgElement,
}: {
    href: string;
    title: string;
    bgColorClassName: string;
    className?: string;
    svgElement: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}) {
    return (
        <Link
            target="_blank"
            href={href}
            className={`p-y-4 p-x-8 text-center max-w-full w-224px h-72px md:h-72px lg:h-80px rounded-full text-whtho7-h2 font-sans font-semibold flex flex-row justify-evenly items-center
            ${bgColorClassName} fill-white hover:brightness-110 transition-common hover:shadow-white hover:shadow-sm ${
                className ?? ""
            }`}>
            {svgElement({
                className: "h-full",
            })}
            <span>{title}</span>
        </Link>
    );
}

export function ShowCircleItem({
    logoSrc,
    name,
    link = "#",
}: {
    logoSrc: StaticImageData | string;
    name: string;
    link?: string;
}) {
    return (
        <div className="h-150px border-1 shadow-black shadow-md transition-common hover:shadow-white hover:brightness-110%">
            <Link href={link} target="_blank">
                <figure className="h-full w-full flex flex-col p-2">
                    <div className="relative w-full flex-1">
                        <Image
                            src={logoSrc}
                            alt={name}
                            fill
                            sizes="224px"
                            className="object-contain"
                        />
                    </div>
                    <figcaption className="text-center text-whtho7-small">
                        {name}
                    </figcaption>
                </figure>
            </Link>
        </div>
    );
}

export function THOGameActivities() {
    return (
        <section>
            <Whtho7H2Div title="游戏内容">
                <p>丰富的游戏活动：同人游戏试玩、舞台游戏活动、音游区……</p>
            </Whtho7H2Div>
            <SkewedCard className="m-t-4">
                <p>众多游戏，任你试玩！</p>
                <THOActivityCarousel />
                <AndMoreLabel className="m-b--4 m-r--4" />
            </SkewedCard>
            <div className="m-t-4 flex flex-col gap-4 lg:h-320px md:h-280px md:flex-row">
                <SkewedCard className="flex flex-col lt-md:h-280px">
                    <h3 className="text-whtho7-h3">舞台游戏活动</h3>
                    <ul
                        role="list"
                        className="list-inside list-image-[url(/MaterialSymbolsArrowRightAltRounded.svg)]">
                        <li key={0}>STG 弹幕接龙</li>
                        <li key={1}>非想天则比赛</li>
                    </ul>
                    <div className="m-b--4 flex flex-1 flex-row gap-2">
                        <figure
                            className="relative m-l--4 flex-1 opacity-80"
                            style={{
                                maskImage:
                                    "radial-gradient(at bottom left, #000000, #000000 25%, transparent 70%)",
                                WebkitMaskImage:
                                    "radial-gradient(at bottom left, #000000, #000000 25%, transparent 70%)",
                            }}>
                            <Image
                                src={fxtz}
                                alt="fxtz"
                                fill
                                sizes="(min-width: 1024px) 236px, (min-width: 768px) 172px, 176px"
                                className="object-cover"
                            />
                        </figure>
                        <div
                            className="relative m-r--4 flex-1 opacity-80"
                            style={{
                                maskImage:
                                    "radial-gradient(at bottom right, #000000, #000000 25%, transparent 70%)",
                                WebkitMaskImage:
                                    "radial-gradient(at bottom right, #000000, #000000 25%, transparent 70%)",
                            }}>
                            <Image
                                src={stg}
                                alt="stg"
                                fill
                                sizes="(min-width: 1024px) 236px, (min-width: 768px) 172px, 176px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </SkewedCard>
                <SkewedCard className="flex flex-col gap-2 lt-md:h-350px">
                    <h3 className="text-whtho7-h3">音游区</h3>
                    <p>音游免费试玩，更有未公布的彩蛋音游！</p>
                    <div className="flex flex-3 md:flex-2 flex-col gap-2 md:flex-row">
                        <div className="relative flex-2 opacity-80 md:flex-1">
                            <Image
                                src={太鼓达人}
                                alt="太鼓达人"
                                fill
                                sizes="(min-width: 1024px) 220px, (min-width: 768px) 156px, 300px"
                                className="object-contain md:object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-row gap-1 md:flex-col">
                            <div className="relative flex-1 opacity-80">
                                <Image
                                    src={chunithm_amazon}
                                    alt="chunithm_amazon"
                                    fill
                                    sizes="(min-width: 1024px) 220px, (min-width: 768px) 156px, 164px"
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative flex-1 opacity-80">
                                <Image
                                    src={chunithm_amazon_plus}
                                    alt="chunithm_amazon_plus.png"
                                    fill
                                    sizes="(min-width: 1024px) 220px, (min-width: 768px) 156px, 164px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-row">
                        <div className="relative flex-1 opacity-80">
                            <Image
                                src={project_diva_arcade}
                                alt="project_diva_arcade"
                                fill
                                sizes="(min-width: 1024px) 220px, (min-width: 768px) 156px, 164px"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1" />
                    </div>
                    <AndMoreLabel className="absolute bottom-0 right-0 h-min w-fit" />
                </SkewedCard>
            </div>
        </section>
    );
}

export function THOMusicActivities() {
    return (
        <section>
            <Whtho7H2Div title="音乐活动" rootClassName="m-t-4" />
            <div className="relative m-t-4 flex flex-col gap-4 lg:h-320px md:h-300px md:flex-row">
                <MiniLiveCard />
                <SkewedCard className="relative lg:flex-4 md:flex-2">
                    <h3 className="text-whtho7-h3">音乐合奏</h3>
                    <ul>
                        <li>独家编曲</li>
                        <li>多种乐器完美调和</li>
                        <li>畅想 4 合奏曲目 + 2 独奏曲目</li>
                        <li>带来意想不到的乐趣</li>
                    </ul>
                    <div className="absolute bottom-0 left-0% h-16px w-full">
                        <MusicNoteSpring />
                    </div>
                    <ClickToShowMusicNote className="absolute right-0 top-30% z-10 h-100px w-100px md:top-60%">
                        <p className="text-center">应该是某张图片(可点击)</p>
                    </ClickToShowMusicNote>
                </SkewedCard>
            </div>
        </section>
    );
}

export function THOCircleMsg() {
    return (
        <section className="w-whtho7-layout">
            <Whtho7H1Div title="会场详情">
                这里插入图片或者其他更高级的东西
            </Whtho7H1Div>
            <Whtho7H2Div title="参展社团"></Whtho7H2Div>
            <SkewedCard className="m-t-4">
                <ShowCircleGrid itemsList={CircleList} />
            </SkewedCard>
        </section>
    );
}

export function THOExtraMsg() {
    return (
        <section className="w-whtho7-layout">
            <Whtho7H1Div title="额外内容">这些是……？！</Whtho7H1Div>
            <p>大概可以放些东西</p>
        </section>
    );
}

export function THOTicketMsgDetail() {
    return (
        <>
            <Whtho7H2Div title="特典详情"></Whtho7H2Div>
            <SkewedCard className="m-t-4 flex flex-col md:flex-row-reverse">
                <article className="text-right">
                    <h3 className="text-whtho7-h3">特典 1</h3>
                    <p>
                        神子大人特别关照拨款
                        <br />
                        东方说唱同音社团——异象聚合
                        <br />
                        鼎力制作的神灵庙主题音乐专辑
                    </p>
                </article>
                <figure className="relative h-300px grow-1 md:h-400px">
                    一个非常好图片
                </figure>
            </SkewedCard>
            <SkewedCard className="m-t-4 flex flex-col flex-wrap md:flex-row">
                <article className="text-left">
                    <h3 className="text-whtho7-h3">特典 2</h3>
                    <p>怀旧 00 年”故事会“风格杂志《梦殿妙》</p>
                    <ul className="list-disc list-inside text-whtho7-h3">
                        <li>独家漫画</li>
                        <li>短篇小说</li>
                    </ul>
                </article>
                <figure className="relative h-300px grow-1 md:h-400px">
                    另一个非常好图片
                </figure>
                <p className="h-min leading-normal text-gray-2 text-whtho7-small">
                    在活动开始后，会场限定产品会有余量售卖；
                    <br className="md:hidden" />
                    淘宝购票当天通过订单号验证，请确认收货~
                    <br />
                    详情请游客群联系组委
                </p>
            </SkewedCard>
            <Whtho7H2Div
                title="购票链接"
                rootClassName="m-t-4"
                className="m-t-4">
                <SkewedCard
                    rotateMultiple={1}
                    className="flex flex-col items-center gap-4 border-2 border-white rounded-lg p-4 md:flex-row md:justify-evenly">
                    <LinkButton
                        href="https://show.bilibili.com/platform/detail.html?id=75905"
                        title="会员购"
                        bgColorClassName="bg-bilibili-pink"
                        svgElement={BilibiliIcon}
                    />
                    <LinkButton
                        href="https://item.taobao.com/item.htm?ft=t&id=684322700306"
                        title="淘宝"
                        bgColorClassName="bg-taobao-orange"
                        svgElement={TaobaoFillIcon}
                    />
                </SkewedCard>
            </Whtho7H2Div>
        </>
    );
}
