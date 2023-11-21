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
                {/* <THOExtraMsg /> */}
            </main>
            <footer className="h-100px w-full flex flex-col items-center justify-center bg-card-bg text-white text-whtho7-small">
                <p>2023</p>
                <p>武汉 Touhou Only</p>
            </footer>
        </>
    );
}
