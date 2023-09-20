import { Whtho7LeadIn, Whtho7H1Div, NavBar } from "./IndexClientComponent";
import { THOGameActivities } from "./Component";
import { THOMusicActivities, THOCircleMsg, THOExtraMsg } from "./Component";
import { THOTicketMsg } from "./IndexClientComponent";

export default function Home() {
    return (
        <>
            <main
                className={`bg-whtho-bg h-fit font-sans-serif text-white text-whtho7-p p-b-10`}>
                <Whtho7LeadIn />
                <section className="w-whtho7-layout">
                    <Whtho7H1Div title="活动内容"></Whtho7H1Div>
                    <THOGameActivities />
                    <THOMusicActivities />
                </section>
                <THOTicketMsg />
                <THOCircleMsg />
                <THOExtraMsg />
            </main>
            <footer className="h-100px w-full flex flex-col items-center justify-center bg-card-bg text-white text-whtho7-small">
                <p>测试测试</p>
                <p>2023 的滴滴滴滴滴滴多多多多多</p>
            </footer>
        </>
    );
}
