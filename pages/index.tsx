// import MainLayout from "../components/common/MainLayout";
import Head from "../components/common/Head";
import MainHero from "../components/home/hero/MainHero";
import SkillSection from "../components/home/skills";
import AboutSection from "../components/home/about";
import ContactSection from "../components/home/contact";
import TestimonialSection from "../components/home/testimonial";
import ProjectSection from "../components/home/projects";
import dynamic from "next/dynamic";
import Script from "next/script";
import { MutableRefObject } from "react";
import { NavItemActiveProvider } from '../context/navItemActiveContext'
const MainLayout = dynamic(() => import("../components/common/MainLayout"), { ssr: false });
export default function Home() {
    return (
        <NavItemActiveProvider>
            <MainLayout>
                {(headerRef: MutableRefObject<HTMLHeadElement | null>) => (
                    <>
                        <Head
                            title="Afzal Saiyed"
                            url="/"
                            keywords="afzal, saiyed, fullstack, developer, python, javascript, react, nextjs, django, restapi"
                            description="Afzal Saiyed is a Fullstack developer based in Mumbai with expertise in python/Django and Javascript/React."
                        />
                        <>
                            <MainHero headerRef={headerRef} />
                            <SkillSection />
                            <ProjectSection />
                            <AboutSection />
                            <TestimonialSection />
                            <ContactSection />
                        </>
                    </>
                )}
            </MainLayout>
        </NavItemActiveProvider>
    );
}
