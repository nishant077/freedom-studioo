import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import colimg1 from "../assets/Gallery12.jpeg";
import colimg2 from "../assets/About8.jpeg";

import './Service.css'
// import colimg3 from "../../assets/cap3-square.jpg";
import { useState } from "react";

const ServiceStickyCard = () => {

    const [reveal, setReveal] = useState(false);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        // 1️⃣ Split text lines once DOM ready
        const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
        textElements.forEach((element) => {
            const split = new SplitText(element, { type: "lines", linesClass: "line" });
            split.lines.forEach((line) => {
                line.innerHTML = `<span>${line.textContent}</span>`;
            });
        });

        // Refresh ScrollTrigger after split
        ScrollTrigger.refresh();

        // 2️⃣ Initial state
        gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
        gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });

        // 3️⃣ Controlled phase logic using timeline (simpler and stable)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-cols",
                start: "top top",
                end: "+=90%",
                pin: true,
                scrub: 1,
                // markers: true,
            },
        });
        tl.add(() => setReveal(false));
        // PHASE 1: Reveal col-2, hide col-1
        tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-2", { x: "0%", duration: 0.8 }, "<")
            .to(".col-3", { y: "0%", duration: 0.8 }, "<")
            .to(".col-img-1 img", { scale: 1, duration: 0.8 }, "<")
            .to(".col-img-2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
            }, "<")
            .to(".col-img-2 img", { scale: 1.6, duration: 0.8 }, "<")

        tl.add(() => setReveal(false));
        tl.add(() => setReveal(true));
        // PHASE 2: Switch col-2 -> col-3 content
        tl.to(".col-2", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-3 .col-content-wrapper .line span", {
                yPercent: -125,
                duration: 0.8,
            }, "<")
        tl.to(".col-3", { x: "0%", duration: 0.8 }, "-=0.8")
            .to(".col-4", { y: "0%", duration: 0.8 }, "<")
            .to(".col-3 .col-content-wrapper-2 .line span", {
                yPercent: 0,
                delay: 0.4,
                duration: 0.8,
            }, "<");

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    });

    return (
       
        <section className="sticky-cols pt-10 w-screen h-dvh overflow-hidden bg-[#040707]">
            <div className="sticky-cols-wrapper relative w-full h-screen">
                <div className="col col-1">
                    <div className="col-content">
                        <div className="col-content-wrapper">
                            <div className="space-y-20">
                                 <div className="md:w-[80%]">
                            <h1 className="md:text-5xl text-lg  font-droid text-[#b1a696] font-bold leading-auto md:w-[80%]">Strategic Design
                                {/* <br />
                                through—the wide
                                <br />
                                panoramic glass
                                <br /> */}
                                {/* window */}
                            </h1>
                            </div>
                             <p className="font-medium md:text-lg text-sm">
                                We support organizations  in creating internal clarity and external impact by co-creating cultures, strategies, and policies that are grounded in purpose. Our work spans from design thinking and participatory research to systems mapping and advocacy planning. Whether facilitating strategic retreats, building institutional frameworks, or co-developing theories of change, we enable organizations to navigate complexity, lead with intention, and design sustainable pathways for transformation
                             </p>
                             </div>
                            <div className="col-content-para flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-0 justify-center">
                                    <h3 className="border-1 px-4 py-2 rounded-full text-[#aaa091]">1</h3>
                                    <h3 className="border-1 px-4 py-2 rounded-full text-[#524e4b]">3</h3>
                                </div>
                                {/* <p className={`text-[12px] font-medium  ${!reveal ? "mr-6" : "mr-0"}`}> Get closer to the desert nature than ever before
                                    <br />
                                    and admire this unique, breathtaking landscape.
                                </p> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                    <div className="col col-img-2 p-2">
                        <div className="col-img-wrapper">
                            <img src={colimg2} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="col-content-wrapper">
                        <div className="space-y-20">
                             <div className="md:w-[80%]">
                        <h1 className="md:text-5xl text-lg font-droid font-bold leading-auto md:w-[80%]">Creative Communication
                            {/* <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window */}
                        </h1>
                        </div>
                            <p className="font-medium md:text-lg text-sm">
                               We craft communication that touches people, not just to watch or read, but to engage, act, and transform. From powerful campaign storytelling to immersive cultural productions, we bring ideas to life through multimedia, illustrations, video, animation, art curation, and public installations. Whether developing brand identities, designing exhibitions, or amplifying messages on social media, we blend art and advocacy to create stories that resonate and inspire action.
                             </p>
                        </div>
                        <div className={`col-content-para flex items-center gap-4 justify-between ${reveal ? "ml-0" : "ml-6"}`}>
                            <div className="flex items-center gap-0 justify-center">
                                <h3 className="border-1 px-4 py-2 rounded-full text-[#aaa091]">{(reveal) ? "3" : "2"}</h3>
                                <h3 className="border-1 px-4 py-2 rounded-full text-[#524e4b]">3</h3>
                            </div>
                            {/* <p className="text-[12px] font-medium"> Get closer to the desert nature than ever before
                                <br />
                                and admire this unique, breathtaking landscape.
                            </p> */}
                        </div>
                    </div>
                    <div className="col-content-wrapper-2">
                        <div className="space-y-20">
                            <div className="md:w-[80%]">
                        <h1 className="md:text-5xl text-lg font-droid font-bold leading-auto">Digital Transformation
                          
                            {/* <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window */}
                        </h1>
                          </div>
                         <p className="font-medium md:text-lg text-sm">
                              We create digital ecosystems that enable organizations to flourish in an ever evolving world. Our approach combines online platform development with UX/UI design, civic tech innovation, and data-driven tools to support learning, collaboration, and campaigning. From interactive engagement to secure online spaces, we ensure accessibility, safety, and strategic alignment so that partners digital presence is transformed.
                             </p>
                             </div>
                        <div className="col-content-para flex items-center gap-4 justify-between">
                            <div className="flex items-center gap-0 justify-center">
                                {/* <h3 className="border-1 px-3 py-1 rounded-full text-[#aaa091]">3</h3>
                                <h3 className="border-1 px-3 py-1 rounded-full text-[#524e4b]">3</h3> */}
                            </div>
                            {/* <p className={`text-[12px] font-medium  ${!reveal ? "mr-0" : "mr-6"}`}> Get closer to the desert nature than ever before
                                <br />
                                and admire this unique, breathtaking landscape.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ServiceStickyCard;