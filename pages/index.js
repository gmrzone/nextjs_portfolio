import MainLayout from "../components/common/MainLayout";
import Head from "../components/common/Head";
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
                <div>
                    {/* <h1>Afzal Saiyed</h1>
            <h2>Afzal Saiyed</h2>
            <h3>Afzal Saiyed</h3>
            <p>Afzal Saiyed</p>
            <a href="">Afzal Saiyed</a> */}
                </div>
            </>
        </MainLayout>
    );
}
