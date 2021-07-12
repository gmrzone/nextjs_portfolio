import MainLayout from "../components/common/MainLayout";
import Head from "../components/common/Head";
import MainHero from "../components/home/hero/MainHero";
import SkillSection from "../components/home/skills";
import AboutSection from "../components/home/about";
import ContactSection from "../components/home/contact";
import TestimonialSection from "../components/home/testimonial";
import ProjectSection from "../components/home/projects";
export default function Home() {
    return (
        <MainLayout>
            <>
                <Head
                    title="Afzal Saiyed"
                    url="/"
                    keywords="afzal, saiyed, fullstack, developer, python, javascript, react, nextjs, django, restapi"
                    description="Afzal Saiyed is a Fullstack developer based in Mumbai with expertise in python/Django and Javascript/React."
                />
                <>
                    <MainHero />
                    <SkillSection />
                    <ProjectSection />
                    <AboutSection />
                    <TestimonialSection />
                    <ContactSection />
                </>
            </>
        </MainLayout>
    );
}
