import Head from 'next/head';


const MetaHead = ({ title, url }) => {

    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d4758" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff"></meta>



            <meta name="robots" content="all" />
            <meta property="og:site_name" content="CoreCare" />
            <meta property="og:url" content={url}/>
            <link rel="canonical" href={url} />
            <meta property="og:type" content= "website" />
            <title>{title}</title>
        </Head>        
    )
}


export default MetaHead