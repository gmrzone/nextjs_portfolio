// import MainLayout from "../components/common/MainLayout";
import Head from "../components/common/Head";
import MainHero from "../components/home/hero/MainHero";
import SkillSection from "../components/home/skills";
import ExperienceSection from "../components/home/experience";
import AboutSection from "../components/home/about";
import ContactSection from "../components/home/contact";
import ProjectSection from "../components/home/projects";
import MainLayout from "../components/common/MainLayout";
import { RefObject } from "react";
export default function Home() {
    return (
        <MainLayout>
            {(headerRef: RefObject<HTMLHeadElement | null>) => (
                <>
                    <Head
                        title="Afzal Saiyed"
                        url="/"
                        keywords="afzal saiyed, tech lead, fullstack engineer, fintech, kyc, identity verification, python, fastapi, typescript, react, angular, webrtc, aws"
                        description="Afzal Saiyed is a Tech Lead Engineer (Fullstack) based in Mumbai, building KYC and identity-verification products in fintech across Python, TypeScript and AWS."
                    />
                    <>
                        <MainHero headerRef={headerRef} />
                        <SkillSection />
                        <ExperienceSection />
                        <ProjectSection />
                        <AboutSection />
                        <ContactSection />
                    </>
                </>
            )}
        </MainLayout>
    );
}
